import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../../components/ui/wrapper'
import Heading from '../../../../../components/ui/heading'
import CaseStudyBox from '../../../../../components/box-large-image/layout-two'

const CaseStudiesArea = (props) => {
    const autoPrinterData = useStaticQuery(graphql `
        query {
            allMachineJson (filter: {id: {regex: "/printer-semi/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/printer-semi/"}}, sort: {order: ASC, fields: id}) {
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
        
    `)
    
    const caseStudies = autoPrinterData.allMachineJson.edges;
    const caseStudiesUa = autoPrinterData.allMachineUaJson.edges;

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                    <Heading {...headingStyle}>Полуавтоматическое оборудование для нанесения паяльной пасты</Heading>
                    <h6 style={{textAlign: "justify"}}>Оборудование предназначено для нанесения паяльной пасты через металлический трафарет на контактные площадки печатных плат в автоматическом или полуавтоматическом режиме. Оборудование для нанесения паяльной пасты среднего уровня – Полуавтоматический трафаретный принтер – это промежуточное звено, которое помогает связать мелкую серию и качество процессов “топового” оборудование при разумных инвестициях. Принтер – автомат контролирует все технологические параметры нанесения паяльной пасты на печатные платы. Совмещение трафарета и печатной платы при помощи СТЗ. Оборудование для нанесения паяльной пасты повышает производительности и качество технологических процессов нанесения материалов на печатные платы для технологии поверхностного монтажа SMT. Полуавтоматическая машина для нанесения паяльной пасты может применятся в мелкосерийном производстве и средне серийном производстве монтажа печатных плат, как отдельностоящее оборудование.</h6>
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

            
        </Section>

        
    )
} else if (props.language === "uk") {
    return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                    <Heading {...headingStyle}>Напівавтоматичне обладнання для нанесення паяльної пасти</Heading>
                    <h6 style={{textAlign: "justify"}}>Обладнання призначене для нанесення паяльної пасти через металевий трафарет на контактні площадки друкованих плат в автоматичному чи напівавтоматичному режимі. Устаткування для нанесення паяльної пасти середнього рівня - Напівавтоматичний трафаретний принтер - це проміжна ланка, яка допомагає зв'язати дрібну серію і якість процесів автоматичного обладнання при розумних інвестиціях. Принтер - автомат контролює всі технологічні параметри нанесення паяльної пасти на друковані плати. Суміщення трафарету і друкованої плати за допомогою СТЗ. Обладнання для нанесення паяльної пасти підвищує продуктивності і якість технологічних процесів нанесення матеріалів на друковані плати для технології поверхневого монтажу SMT. Напівавтоматична машина для нанесення паяльної пасти може застосовуватися в дрібносерійному виробництво і середньо серійному виробництві монтажу друкованих плат, як окреме обладнання.</h6>
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