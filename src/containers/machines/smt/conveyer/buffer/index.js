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
            allMachineJson (filter: {id: {regex: "/buffer/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/buffer/"}}, sort: {order: ASC, fields: id}) {
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
                Дополнительные специализированные модули для перемещения плат, которые применяются при особых требования Заказчика, специфики технологических процессов, балансирования и увеличения производительности линии. Перемещение печатных плат с использованием дополнительных модулей позволяет оптимизировать и сбалансировать производственную линию, делая ее совершенной и удобной для работы персонала.</h6>
                <br></br>
                    <Heading {...headingStyle}>Конвейерные системы для управления движением печатных плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Сбалансированная работа линии.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Дополнительное оборудование для производственных линий – конвейерные системы для управления движением печатных плат применяют для оптимизации потока плат в производственной линии, соединении и разделении производственных потоков. Применяются устройства в условиях серийного и крупносерийного производств. Позволяют оптимизировать производственные линии монтажа плат под изделия и производственные помещения заказчика для получения максимальной производительности.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART решения для перемещения печатных плат</h5>
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
                Додаткові спеціалізовані модулі для переміщення плат, які застосовуються при особливих вимогах Замовника, специфіки технологічних процесів, балансування і збільшення продуктивності лінії. Переміщення друкованих плат з використанням додаткових модулів дозволяє оптимізувати і збалансувати виробничу лінію, роблячи її досконалою та зручною для роботи персоналу.</h6>
                <br></br>
                    <Heading {...headingStyle}>Конвеєрні системи для керування рухом друкованих плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Збалансована робота лінії.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Додаткове обладнання для виробничих ліній - конвеєрні системи для управління рухом друкованих плат застосовують для оптимізації потоку плат у виробничій лінії, з'єднанні і поділі виробничих потоків. Застосовуються пристрої в умовах серійного і великосерійного виробництв. Дозволяють оптимізувати виробничі лінії монтажу плат під вироби і виробничі приміщення замовника для отримання максимальної продуктивності.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART рішення для переміщення друкованих плат</h5>
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