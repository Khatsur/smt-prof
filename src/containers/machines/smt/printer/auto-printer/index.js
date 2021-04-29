import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../../components/ui/wrapper'
import Heading from '../../../../../components/ui/heading'
import CaseStudyBox from '../../../../../components/box-large-image/layout-two'
import ChangLang from '../../../../../containers/elements/tabs/changlang.js'
import {PagePath} from '../../../../../components/pagepath'
import ButtonSection from '../../../../../containers/elements/button/button-smt'

const CaseStudiesArea = (props) => {
    const autoPrinterData = useStaticQuery(graphql `
        query {
            allAutoPrinterJson (sort: {order: ASC, fields: id}) {
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
            allAutoPrinterUaJson (sort: {order: ASC, fields: id}) {
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
    
    const caseStudies = autoPrinterData.allAutoPrinterJson.edges;
    const caseStudiesUa = autoPrinterData.allAutoPrinterUaJson.edges;
    const brochure = "https://drive.google.com/file/d/1a_7TMCgdLr-v59YFuMCQYJV7nl6OVJjz/view?usp=sharing"

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                    <Heading {...headingStyle}>Автоматические принтеры для нанесения паяльной пасты</Heading>
                    <h6 style={{textAlign: "justify"}}>Оборудование  предназначено для нанесения паяльной пасты через металлический трафарет на контактные площадки печатных плат в автоматическом режиме. Принтер – автомат контролирует все технологические параметры нанесения паяльной пасты на печатные платы. Совмещение трафарета и печатной платы при помощи СТЗ в автоматическом режиме. Применяется в условиях мелкосерийного, серийного и крупносерийного производства монтажа печатных плат для технологии поверхностного монтажа SMT. Повышает производительности и качество технологических процессов нанесения материалов на печатные платы для технологии поверхностного монтажа SMT. Оборудование предназначено для работы в линии поверхностного монтажа SMT. Может применятся в мелкосерийном много-номенклатурном производстве, как отдельностоящее оборудование для изделий с высокими требованиями к эксплуатации.</h6>
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
                    <Heading {...headingStyle}>Автоматичні принтери для нанесення паяльної пасти</Heading>
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