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
            allMachineJson (filter: {id: {regex: "/dispensing-manual/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/dispensing-manual/"}}, sort: {order: ASC, fields: id}) {
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
                Оборудование предназначено для нанесения паяльной пасты на контактные площадки печатных плат для технологии поверхностного монтажа SMT, для нанесения клея для фиксации SMD под пайку волной припоя для технологии монтажа электронных компонентов в отверстия печатных плат, для нанесения герметиков и смазочных материалов. Устанавливаются основные технологические параметры нанесения доз паяльной пасты и клея на печатные платы. Применяется в условиях мелкосерийного и серийного производства монтажа печатных плат для технологии поверхностного монтажа SMT и монтажа в отверстия печатных плат. Повышает производительности и качество технологических процессов нанесения материалов на печатные платы для технологии поверхностного монтажа SMT</h6>
                <br></br>
                    <Heading {...headingStyle}>Дозаторы начального уровня</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Автоматизация процессов нанесения материалов</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Оборудование для оснащения сборочно-монтажного производства в условиях мелкосерийного производства и лабораторий для прототипирования продукции. Ручные дозаторы в основном применяются для нанесения паяльной пасты и клея на печатные платы. Возможно применения в других отраслях для нанесения различных материалов.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Улучшение качества сборочно-монтажных процессов</h5>
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
                Обладнання призначене для нанесення паяльної пасти на контактні площадки друкованих плат для технології поверхневого монтажу SMT, для нанесення клею для фіксації SMD під паяння хвилею припою для технології монтажу електронних компонентів в отвори друкованих плат, для нанесення герметиків та мастильних матеріалів. Встановлюються основні технологічні параметри нанесення доз паяльної пасти та клею на друковані плати. Застосовується в умовах дрібносерійного та серійного виробництва монтажу друкованих плат для технології поверхневого монтажу SMT та монтажу в отвори плат. Підвищує продуктивність та якість технологічних процесів нанесення матеріалів на друковані плати для технології поверхневого монтажу SMT</h6>
                <br></br>
                    <Heading {...headingStyle}>Дозатори початкового рівня</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Автоматизація процесів нанесення матеріалів</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Обладнання для оснащення складально-монтажного виробництва в умовах дрібносерійного виробництва та лабораторій для прототипування продукції. Ручні дозатори переважно застосовуються для нанесення паяльної пасти та клею на друковані плати. Можливе застосування в інших галузях для нанесення різних матеріалів.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Поліпшення якості складально-монтажних процесів</h5>
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