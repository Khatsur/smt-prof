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
    sliderStyle, language }) => {
    const caseStudyData = useStaticQuery(graphql`
    query LineSmtSmall3Query {
        indexLinesJson(id: {eq: "smt-small-3"}) {
          id
          title
          subtitle
          uatitle
          uasubtitle
          excerpt
          uaexcerpt
          bgImage {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        } 
        allMachineJson (filter: {id: {regex: "/mb814|g-titan|rs-1r|rs-800|mb815/"}}, sort: {order: ASC, fields: id}, limit: 5) {
            edges {
                node {
                    ru
                    id
                    bigtitle
                    title
                    category
                    excerpt
                    brochure
                    image {
                        childImageSharp {
                            fluid(maxHeight: 230, quality: 100){
                                ...GatsbyImageSharpFluid_withWebp
                                presentationWidth
                                presentationHeight
                            }
                        }
                    }
                }
            }
        }
        allMachineUaJson (filter: {id: {regex: "/mb814|g-titan|rs-1r|rs-800|mb815/"}}, sort: {order: ASC, fields: id}, limit: 5) {
            edges {
                node {
                    ru
                    id
                    bigtitle
                    title
                    category
                    excerpt
                    brochure
                    image {
                        childImageSharp {
                            fluid(maxHeight: 230, quality: 100){
                                ...GatsbyImageSharpFluid_withWebp
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
    const caseStudySecData = caseStudyData.indexLinesJson;
    const caseStudies = caseStudyData.allMachineJson.edges;
    const caseStudiesUa = caseStudyData.allMachineUaJson.edges;
    const imageData = caseStudySecData.bgImage.childImageSharp.fluid;

    if (language === "ru") {
    return (
        <CaseStudyWrapper fluid={imageData}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            title={caseStudySecData.title}
                            subtitle={caseStudySecData.subtitle}
                        />
                    </Col>
                </Row>
                <Row>
                    <h6 style={{textAlign: "justify"}}>{caseStudySecData.excerpt}</h6>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider {...sliderStyle} settings={slider}>
                            {caseStudies.map(caseStudy => (
                                <div className="item" key={caseStudy.node.id}>
                                    <CaseStudyBox
                                        {...caseStudyStyles}
                                        imageSrc={caseStudy.node.image.childImageSharp}
                                        title={caseStudy.node.bigtitle}
                                        category={caseStudy.node.category}
                                        desc={caseStudy.node.excerpt}
                                        path={`/${caseStudy.node.ru}/${caseStudy.node.title}`}
                                        btnText="Подробно"
                                    />
                                </div>
                            ))}
                        </SwiperSlider>
                    </Col>
                </Row>
                
            </Container>
        </CaseStudyWrapper>
    )
  } else if (language === "uk") {
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
                    </Col>
                </Row>
                <Row>
                   <h6 style={{textAlign: "justify"}}>{caseStudySecData.uaexcerpt}</h6>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider {...sliderStyle} settings={slider}>
                            {caseStudiesUa.map(caseStudyUa => (
                                <div className="item" key={caseStudyUa.node.id}>
                                    <CaseStudyBox
                                        {...caseStudyStyles}
                                        imageSrc={caseStudyUa.node.image.childImageSharp}
                                        title={caseStudyUa.node.bigtitle}
                                        category={caseStudyUa.node.category}
                                        desc={caseStudyUa.node.excerpt}
                                        path={`/${caseStudyUa.node.ua}/${caseStudyUa.node.title}`}
                                        btnText="Подробно"
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