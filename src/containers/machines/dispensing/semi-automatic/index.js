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
            allMachineJson (filter: {id: {regex: "/dispensing-semi-automatic/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/dispensing-semi-automatic/"}}, sort: {order: ASC, fields: id}) {
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
                Полу автоматические дозаторы идеально подходят для применения в технологии поверхностного монтажа (SMT) для нанесения паяльной пасты, клея и других материалов применяемых в производстве монтажа печатных плат. Полу автоматические дозаторы позволяют сделать процесс более удобным для оператора. Оборудование для дозирования способно автоматизировать не только нанесения паяльной пасты и клея. но и много других технологически трудоемких процессов, повысить качество изделия и существенно снизить текущие затраты на производство. Дозаторы работают как отдельностоящее оборудование в мелкосерийном производстве и производстве прототипов.</h6>
                <br></br>
                    <Heading {...headingStyle}>Полу автоматические дозаторы</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Автоматизация процессов нанесения материалов</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Оборудование для оснащения сборочно-монтажного производства в условиях мелкосерийного производства и лабораторий для прототипирования продукции. Оборудование позволяет осуществить начальную автоматизацию нанесения материалов на печатные платы и облегчить работу монтажника. Оборудование применяется для нанесения паяльной пасты и клея</h6>
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
                Напів автоматичні дозатори ідеально підходять для застосування в технології поверхневого монтажу (SMT) для нанесення паяльної пасти, клею та інших матеріалів, що застосовуються у виробництві монтажу друкованих плат. Напів автоматичні дозатори дозволяють зробити процес зручнішим для оператора. Устаткування для дозування здатне автоматизувати не тільки нанесення паяльної пасти та клею. але й багато інших технологічно трудомістких процесів, підвищити якість виробу та суттєво знизити поточні витрати на виробництво. Дозатори працюють як окреме обладнання в дрібносерійному виробництві та виробництві прототипів.</h6>
                <br></br>
                    <Heading {...headingStyle}>Напів автоматичні дозатори</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Автоматизація процесів нанесення матеріалів</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Обладнання для оснащення складально-монтажного виробництва в умовах дрібносерійного виробництва та лабораторій для прототипування продукції. Обладнання дозволяє здійснити початкову автоматизацію нанесення матеріалів на друковані плати та полегшити роботу монтажника. Устаткування застосовується для нанесення паяльної пасти та клею</h6>
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