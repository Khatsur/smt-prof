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
            allJukiPlacerJson (filter: {title: {regex: "/jx/"}}) {
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
            allJukiPlacerUaJson (filter: {title: {regex: "/jx/"}}) {
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
    
    const caseStudies = autoPrinterData.allJukiPlacerJson.edges;
    const caseStudiesUa = autoPrinterData.allJukiPlacerUaJson.edges;
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <Heading {...headingStyle}>LED установщики JUKI серии JX</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Максимальная эффективность LED монтажа</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Автоматические установщики SMD электронных компонентов  предназначены для среднесерийного производства SMT монтажа длинных печатных плат разной сложности. Установщики SMD серии JX  сочетают в себе компактный дизайн и высокое качество процессов установки электронных компонентов. Оборудование подходит для монтажа длинных печатных плат до 1,50 метра и особенно для экономичной сборки светодиодов. Встроенная лазерная технология позволяет очень точно размещать рассеивающие линзы благодаря технологии распознавания, которая определяет основную ориентацию линз.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Почувствуйте свет…</h5>
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
                <Heading {...headingStyle}>LED установники JUKI серії JX</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Максимальна ефективність LED монтажу.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Автоматичні установники SMD електронних компонентів призначені для серійного виробництва SMT монтажу довгих друкованих плат різної складності. Установники SMD серії JX поєднують в собі компактний дизайн і високу якість процесів встановлення електронних компонентів. Устаткування підходить для монтажу довгих друкованих плат до 1,50 метра і особливо для економічного складання світлодіодних плат. Вбудована лазерна технологія дозволяє дуже точно розміщувати розсіюванні лінзи завдяки технології розпізнавання, яка визначає основну орієнтацію лінз.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Відчуйте світло…</h5>
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