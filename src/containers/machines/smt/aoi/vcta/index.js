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
            allMachineJson (filter: {title: {regex: "/vcta/"}}) {
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
            allMachineUaJson (filter: {title: {regex: "/vcta/"}}) {
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
    
    const caseStudies = autoPrinterData.allMachineJson.edges;
    const caseStudiesUa = autoPrinterData.allMachineUaJson.edges;
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <h6 style={{textAlign: "justify"}}>
                Системы автоматической оптической инспекции начального уровня применяются в условиях мелкосерийного и серийного многономенклатурного производств для контроля установки и пайки электронных компонентов. Машины работают, как отдельностоящее оборудование. Определяют основные дефекты монтажа компонентов. Настольные системы AOI – это бюджетное решение не требующее больших затрат, но позволяющее снизить: влияние человеческого фактора, уровень брака, затраты на производство изделия в целом. Оптическая инспекция печатных плат начального уровня рекомендуется для мелкосерийного производства изделий с повышенными требования в эксплуатации.</h6>
                <br></br>
                    <Heading {...headingStyle}>Off-line Оптическая инспекция печатных плат </Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Минимальные инвестиции в производство</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Полу автоматические оптические системы инспекции монтажа применяются для определения основных дефектов установки и пайки электронных компонентов. Используются в условиях мелкосерийного и серийного многономенклатурного производства. Рекомендуется для изделий с высокими требованиями в эксплуатации. Так же часто применяется контрактными производителями для небольших заказов для инспекции монтажа компонентов (AOI) и контроля качества нанесения паяльной пасты (SPI).</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Бюджетные решения для контроля качества.</h5>
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
                Системи автоматичного оптичної інспекції початкового рівня застосовуються в умовах дрібносерійного і серійного багатономенклатурного виробництв для контролю встановлення і паяння електронних компонентів. Машини працюють, як окреме обладнання. Визначають основні дефекти монтажу компонентів.  Off-line системи AOI - це бюджетне рішення, що не потребує великих затрат, але дозволяє знизити: вплив людського фактора, рівень дефектів, витрати на виробництво виробу в цілому. Оптична інспекція друкованих плат початкового рівня рекомендується для дрібносерійного виробництва виробів з підвищеними вимоги в експлуатації.</h6>
                <br></br>
                    <Heading {...headingStyle}>Off-line Оптична інспекція друкованих плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Мінімальні інвестиції у виробництво.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Напів автоматичні оптичні системи інспекції монтажу застосовуються для визначення основних дефектів встановлення і паяння електронних компонентів. Використовуються в умовах дрібносерійного і серійного багатономенклатурного виробництва. Рекомендується для виробів з високими вимогами в експлуатації. Так само часто застосовується контрактними виробниками для невеликих замовлень для інспекції монтажу компонентів (AOI) і контролю якості нанесення паяльної пасти (SPI)</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Бюджетні рішення для контролю якості.</h5>
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