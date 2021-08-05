import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../../components/ui/wrapper'
import Heading from '../../../../../components/ui/heading'
import CaseStudyBox from '../../../../../components/box-large-image/layout-two'


const CaseStudiesArea = (props) => {
    const smallPrinterData = useStaticQuery(graphql `
        query {
            allMachineJson (filter: {id: {regex: "/uniprint/"}}, sort: {order: ASC, fields: id}) {
                edges {
                    node {
                        fields{
                            slug
                        }
                        id
                        bigtitle
                        title
                        category
                        excerpt
                        image {
                            childImageSharp {
                                fluid(maxHeight: 258, quality: 100){
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
    `
    )

    
    
    const smallPrinter = smallPrinterData.allMachineJson.edges;

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                    <Heading {...headingStyle}>Принтеры для нанесения паяльной с доп. оборудованием</Heading>
                    <h6 style={{textAlign: "justify"}}>Оборудование для ручного нанесения паяльной пасты от европейского производителя оборудования PBT Works. Принтери имеют ручной привод, но могут оснащаться большой номенклатурой дополнительного оборудования, разного типа натяжными рамками (механические и пневматические), металлическими ракелями разной ширины, лифтом для автоматическое разделения платы и трафарета и другими опциями под требования Заказчика.</h6>
                </Col>
            </Row>
            <br></br>
            <Row>
                {smallPrinter.map(smallPrinter => (
                    
                    <Col lg={4} md={6} mb="30px" key={smallPrinter.node.id}>
                        <CaseStudyBox
                            {...caseStudyStyles}
                            imageSrc={smallPrinter.node.image.childImageSharp}
                            title={smallPrinter.node.bigtitle}
                            category={smallPrinter.node.category}
                            desc={smallPrinter.node.excerpt}
                            path={`${props.path}/../принтеры-пасты-ручные/${smallPrinter.node.fields.slug}`}
                            btnText="Подробно"
                            
                        />
                        
                    </Col>
                ))}
            </Row>
        </Section>
   )
}


CaseStudiesArea.propTypes = {
    sectionStyle: PropTypes.object,
    headingStyle: PropTypes.object,
    caseStudyStyles: PropTypes.object
}

CaseStudiesArea.defaultProps = {
    sectionStyle: {
        pt: '89px',
        pb: '70px',
        responsive: {
            medium: {
                pt: '72px',
                pb: '50px'
            },
            small: {
                pt: '53px',
                pb: '30px'
            }
        }
    },
    headingStyle: {
        as: "h3",
        mb: '40px',
        textalign: "center",
        child: {
            color: "primary"
        },
        responsive: {
            small: {
                mb: '30px'
            }
        }
    },
    caseStudyStyles: {
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

export default CaseStudiesArea;