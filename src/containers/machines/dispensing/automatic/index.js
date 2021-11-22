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
            allMachineJson (filter: {id: {regex: "/dispensing-automatic/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/dispensing-automatic/"}}, sort: {order: ASC, fields: id}) {
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
                Оборудование для дозированного нанесения материалов применяются в условиях серийного и крупносерийного производств. Автоматы дозирования  спроектированы для точного и скоростного нанесения широкой гаммы материалов для различных технологических процессов сборки – нанесение паяльной пасты и клея для технологии SMT,  герметизации выводов безкорпусных компонентов (технология Underfill), точное нанесение защитных покрытий, герметиков. Дозаторы  Fritsch – это лучшее в своем классе оборудование мирового уровня, обеспечивающее высокую производительность, гарантируя стабильно высокое  качество нанесения материала, что существенно снижает расходы на производство изделия в целом.</h6>
                <br></br>
                    <Heading {...headingStyle}>Многофункциональное оборудование для дозирования</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Автоматизация процессов нанесения материалов</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Оборудование для оснащения сборочно-монтажного производства. Для технологии поверхностного монтажа машины применяются для нанесения паяльной пасты и клея. Но применение такого оборудования не ограничивается только монтажом электронных компонентов. Машины используют для автоматизации процессов герметизации корпусов, заливки компаундами, нанесения термопаст и защитных покрытий и др.</h6>
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
                Обладнання для дозованого нанесення матеріалів застосовуються в умовах серійного та багатосерійного виробництв. Автомати дозування спроектовані для точного та швидкісного нанесення широкої гами матеріалів для різних технологічних процесів складання – нанесення паяльної пасти та клею для технології SMT, герметизації виводів безкорпусних компонентів (технологія Underfill), точне нанесення захисних покриттів, герметиків. Дозатори PVA – це найкраще у своєму класі обладнання світового рівня, що забезпечує високу продуктивність, гарантуючи стабільно високу якість нанесення матеріалу, що суттєво знижує витрати на виробництво виробу загалом.</h6>
                <br></br>
                    <Heading {...headingStyle}>Багатофункціональне обладнання для дозування</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Автоматизація процесів нанесення матеріалів</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Обладнання для оснащення невеликого обладнання для лазерної обробки матеріалів – маркування друкованих плат, лазерне розділення друкованих плат, гравірування. Компактна та безшумна автономна витяжна система підходить як для виробничих умов, так і для використання в школах, майстерень з виготовлення вивісок, у невеликих промислових умовах, для машин для лазерного маркування.</h6>
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