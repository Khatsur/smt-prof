import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../../components/ui/wrapper'
import Heading from '../../../../../components/ui/heading'
import CaseStudyBox from '../../../../../components/box-large-image/layout-two'
import ButtonSection from '../../../../../containers/elements/button/button-smt'

const CaseStudiesArea = (props) => {
    const autoPrinterData = useStaticQuery(graphql `
        query {
            allSelectiveJson (filter: {title: {regex: "/sig/"}}) {
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
            allSelectiveUaJson (filter: {title: {regex: "/sig/"}}) {
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
                        brochure
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
        
    `)
    
    const caseStudies = autoPrinterData.allSelectiveJson.edges;
    const caseStudiesUa = autoPrinterData.allSelectiveUaJson.edges;
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <Heading {...headingStyle}>Установки пайки волной припоя начального уровня.</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Монтаж компонентов в отверстия плат</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Пайка волной припоя применяется в условиях мелкосерийного производства  для улучшения качества монтируемых изделий.  Применяется оборудование, как отдельностоящая машина для пайки печатных плат по мере накопления. Пайка волной припоя может использоваться, как для пайки компонентов в отверстия плат так и для смешанного монтажа. С применением соответствующей оснастки пайка волной припоя может заменить установку селективной пайки, обеспечивая при этом более высокую производительность.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Решения для монтажа в отверстия</h5>
                </Col>
            </Row>
            <br></br>
            <Row>
                {caseStudies.map(caseStudy => (
                    
                    <Col lg={4} md={6} mb="30px" key={caseStudy.node.id}>
                        <CaseStudyBox
                            {...caseStudyStyles}
                            imageSrc={caseStudy.node.image.childImageSharp}
                            title={caseStudy.node.bigtitle}
                            category={caseStudy.node.category}
                            desc={caseStudy.node.excerpt}
                            path={`/${props.path}/${caseStudy.node.fields.slug}`}
                            btnText="Подробно"
                            
                        />
                        
                    </Col>
                ))}
            </Row>
            <Row>
            <ButtonSection path={brochure} lang={props.language}/>
            </Row>
        </Section>
    )
} else if (props.language === "uk") {
    return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <Heading {...headingStyle}>Установки паяння хвилею припою початкового рівня.</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Монтаж компонентів в отвори плат.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Пайка хвилею припою застосовується в умовах дрібносерійного виробництва для поліпшення якості монтованих виробів. Застосовується обладнання, як окремостояча машина для паяння друкованих плат в міру накопичення. Пайка хвилею припою може використовуватися, як для пайки компонентів в отвори плат так і для змішаного монтажу. Із застосуванням відповідного оснащення пайка хвилею припою може замінити установку селективної пайки, забезпечуючи при цьому більш високу продуктивність.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Рішення для монтажу в отвори</h5>
                </Col>
            </Row>
            <br></br>
            <Row>
                {caseStudiesUa.map(caseStudiesUa => (
                    <Col lg={4} md={6} mb="30px" key={caseStudiesUa.node.id}>
                        <CaseStudyBox
                            {...caseStudyStyles}
                            imageSrc={caseStudiesUa.node.image.childImageSharp}
                            title={caseStudiesUa.node.bigtitle}
                            category={caseStudiesUa.node.category}
                            desc={caseStudiesUa.node.excerpt}
                            path={`/${props.path}/${caseStudiesUa.node.fields.slug}`}
                            btnText="Докладно"
                        />
                    </Col>
                ))}
            </Row>
            <Row>
            <ButtonSection path={brochure} lang={props.language}/>
            </Row>
        </Section>
    )
}

}


CaseStudiesArea.propTypes = {
    sectionStyle: PropTypes.object,
    headingStyle: PropTypes.object,
    caseStudyStyles: PropTypes.object
}

CaseStudiesArea.defaultProps = {
    sectionStyle: {
        pt: '39px',
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