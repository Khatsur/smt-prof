import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Text from '../../../components/ui/text'
import Anchor from '../../../components/ui/anchor'
import CaseStudyBox from '../../../components/box-large-image/layout-two'
import SwiperSlider from '../../../components/ui/swiper'
import { CaseStudyWrapper } from './case-study-area.style'

const CaseStudySection = ({
    sectionStyle,
    sectionTitleStyle,
    bottomRowStyle,
    bottomTextStyle,
    bottoTextLinkStyle,
    caseStudyStyles,
    slider,
    sliderStyle }) => {
    const caseStudyData = useStaticQuery(graphql`
    query SmallSmtUa {
        indexAppointmentJson(id: {eq: "small-smt"}) {
          id
          uatitle
          uasubtitle
          uatext
          bottom_text
          bottom_link_text
          bottom_link
          bgImage {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        } 
        allBudSmtJson(filter: {is_featured: {eq: true}}, limit: 3, sort: {order: ASC, fields: id}) {
            edges {
              node {
               
                id
                uatitle
                category
                uaexcerpt
                image {
                  childImageSharp {
                    fluid(maxHeight: 198, quality: 100){
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        presentationWidth
                        presentationHeight
                    }
                  }
                }
              }
            }
        }
      } 
    `);
    const caseStudySecData = caseStudyData.indexAppointmentJson;
    const caseStudies = caseStudyData.allBudSmtJson.edges;
    const imageData = caseStudySecData.bgImage.childImageSharp.fluid;

    return (
        <CaseStudyWrapper fluid={imageData}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            title={caseStudySecData.uatitle}
                            subtitle={caseStudySecData.uasubtitle}
                        />
                        <div style={{fontSize: 16}}>{caseStudySecData.uatext}</div><br></br>
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider {...sliderStyle} settings={slider}>
                            {caseStudies.map(caseStudy => (
                                <div className="item" key={caseStudy.node.id}>
                                    <CaseStudyBox
                                        {...caseStudyStyles}
                                        imageSrc={caseStudy.node.image.childImageSharp}
                                        title={caseStudy.node.uatitle}
                                        category={caseStudy.node.category}
                                        desc={caseStudy.node.uaexcerpt}
                                        path={caseStudy.node.path}
                                        btnText="Докладно"
                                    />
                                </div>
                            ))}
                        </SwiperSlider>
                    </Col>
                </Row>
                
            </Container>
        </CaseStudyWrapper>
    )
}

CaseStudySection.propTypes = {
    sectionTitleStyle: PropTypes.object,
    bottomTextStyle: PropTypes.object,
    bottoTextLinkStyle: PropTypes.object
}

CaseStudySection.defaultProps = {
    sectionTitleStyle: {
        mb: '40px',
        responsive: {
            small: {
                mb: '30px'
            }
        }
    },
    bottomTextStyle: {
        fontSize: '18px',
        fontweight: 500,
        lineHeight: 1.40,
        color: '#333333',
        mt: '40px',
        align: 'center'
    },
    bottoTextLinkStyle: {
        fontWeight: 500,
        layout: 'underline',
        hover: {
            layout: 2
        }
    },
    slider: {
        slidesPerView: 3,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    },
    sliderStyle: {
        pagination: {
            bottom: 0
        }
    },
    caseStudyStyles: {
        boxStyle: {
            mt: '20px',
            mb: '35px',
            ml: '15px',
            mr: '15px'
        },
        contentBoxStyle: {
            pt: '25px',
            pl: '26px',
            pr: '26px',
            textalign: 'left'
        },
        headingStyle: {
            as: 'h6',
            fontweight: 600,
            mb: '2px'
        },
        descStyle: {
            mb: 0,
            mt: '13px'
        }
    }
}

export default CaseStudySection;