import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import CaseStudyBox from '../../../../components/box-large-image/layout-two'
import ButtonSection from '../../../elements/button/button-smt'

const CaseStudiesArea = (props) => {
    const autoPrinterData = useStaticQuery(graphql `
        query {
            allMachineJson (filter: {id: {regex: "/wire-stripping/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/wire-stripping/"}}, sort: {order: ASC, fields: id}) {
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
                Машины для оснащения участка для обработки проводов и кабелей. Оборудование для автоматического снятия изоляционного покрытия проводов позволяет в разы увеличить производительность труда по сравнению с применением ручного инструмента. Машины имеют возможность программировать длину зачистки. Более продвинутые прецизионные машины программируются на глубину резки и позволяют обрабатывать многослойные кабели и разными типами покрытия. Простые бюджетные машины имеют простое исполнение с пневматическим приводом и минимальным техническим обслуживанием.</h6>
                <br></br>
                    <Heading {...headingStyle}>Зачистка проводов</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Обработка проводов и кабелей</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Оборудование для зачистки проводов применяют для автоматизации ручных процессов снятия изоляции. Системы позволяют быстро и качественно очищать просты провода, внутренние провода кабелей  и многослойные покрытия на коаксиальных кабелях. Машины имеют компактную настольную конструкцию. По принципу работы машины могут быть с вращающимися ножами ( роторные ) для прецизионной зачистки многослойных кабелей ( например коаксиальные) и с обычными фиксированными ножами.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Повышение производительности</h5>
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
                Машини для оснащення дільниці для обробки дротів та кабелів. Обладнання для автоматичного зняття ізоляційного покриття дротів дозволяє в рази збільшити продуктивність праці в порівнянні з ручним інструментом. Машини мають можливість програмувати довжину зачистки. Більш просунуті прецизійні машини програмуються на глибину різання та дозволяють обробляти багатошарові кабелі з різними типами покриття. Прості бюджетні машини мають просте виконання з пневматичним приводом та мінімальним технічним обслуговуванням.</h6>
                <br></br>
                    <Heading {...headingStyle}>Зачищення ізоляції проводів</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Обробка проводів та кабелів</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Обладнання для зачистки проводів застосовують для автоматизації ручних процесів зняття ізоляції. Системи дозволяють швидко та якісно очищати прості дроти, внутрішні дроти кабелів та багатошарові покриття на коаксіальних кабелях. Машини мають компактну настільну конструкцію. За принципом роботи машини можуть бути з ножами, що обертаються (роторні) для прецизійної зачистки багатошарових кабелів (наприклад коаксіальні) і зі звичайними фіксованими ножами.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Підвищення продуктивності</h5>
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