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
            allInspectionJson (filter: {title: {regex: "/aoi/"}}) {
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
            allInspectionUaJson (filter: {title: {regex: "/aoi/"}}) {
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
    
    const caseStudies = autoPrinterData.allInspectionJson.edges;
    const caseStudiesUa = autoPrinterData.allInspectionUaJson.edges;
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <h6 style={{textAlign: "justify"}}>
                Системы автоматической оптической инспекции (AOI) применяется для определение дефектов установки электронных компонентов (Pre-reflow Inspection) и дефектов пайки электронных компонентов на поверхность и в отверстия печатных плат (Post-reflow Inspection). Оборудование может определять: отсутствие компонента, сдвиг, неправильную полярность, непропай выводов, недостаток / избыток припоя, закоротки, несоответствие (чтение обозначение) и др. Установки полностью поддерживают систему отслеживания (traceability), позволяют отследить каждый отдельный компонент и передать информацию для ремонта или учета данных. Системы автоматической инспекции печатных плат JUKI серии RV лучшие в своем классе оборудование, которое используется ведущими мировыми производителями электроники.</h6>
                <br></br>
                    <Heading {...headingStyle}>Инспекция монтажа компонентов JUKI серия RV</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Максимальная гибкость и максимальная скорость.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Автоматическая оптическая инспекция монтажа применяется для определения дефектов монтажа электронных компонентов на поверхность и в отверстия печатных плат. Системы оптического контроля определяют дефекты пайки, геометрию паянных соединений и читают обозначения компонентов. В условиях мелкосерийного производства применяют настольные машины в условиях серийного производства конвейерные системы в составе линии и как отдельностоящее оборудование.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART решения для оптической инспекции</h5>
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
                <h6 style={{textAlign: "justify"}}>
                Системи автоматичного оптичної інспекції (AOI) застосовується для визначення дефектів встановлення електронних компонентів (Pre-reflow Inspection) і дефектів паяння електронних компонентів на поверхню і в отвори друкованих плат (Post-reflow Inspection). Устаткування може визначати: відсутність компонента, зрушення, неправильну полярність, непропай виводів ІС, недолік / надлишок припою, закоротки, невідповідність (читання позначення) і ін. Установки повністю підтримують систему відстеження (traceability), дозволяють відстежити кожен окремий компонент і передати інформацію для ремонту та обліку даних. Системи автоматичного інспекції друкованих плат JUKI серії RV кращі в своєму класі устаткування, яке використовується провідними світовими виробниками електроніки.</h6>
                <br></br>
                    <Heading {...headingStyle}>Інспекція монтажу компонентів JUKI серія RV</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Максимальна гнучкість і максимальна швидкість.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Автоматична оптична інспекція монтажу застосовується для визначення дефектів монтажу електронних компонентів на поверхню і в отвори друкованих плат. Системи оптичного контролю визначають дефекти паяння, геометрію паянних з'єднань і читають позначення компонентів. В умовах дрібносерійного виробництва застосовують настільні машини в умовах серійного виробництва конвеєрні системи в складі лінії і як окремостояча машина</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART рішення для оптичної інспекції</h5>
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