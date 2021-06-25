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
            allSelectiveJson (filter: {title: {regex: "/inline/"}}) {
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
            allSelectiveUaJson (filter: {title: {regex: "/inline/"}}) {
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
    
    const caseStudies = autoPrinterData.allSelectiveJson.edges;
    const caseStudiesUa = autoPrinterData.allSelectiveUaJson.edges;
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <Heading {...headingStyle}>Автоматические системы селективной пайки.</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Монтаж компонентов в отверстия плат</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Универсальное гибкое оборудование для полной автоматизации ручных операций пайки в условиях серийного многономенклатурного и крупносерийного производств.  Автоматические установки селективной пайки применяются для работы в линии и как отдельностоящее оборудование. Для крупносерийного производства установки дополнительно оснащаются модулем групповой пайки.  Оборудование имеет модульную конструкцию и оптимально комплектуется согласно требованиям заказчика под конкретное изделие. Быстрая переналадка и возможность широкой регулировки процесса  делает автоматическое оборудование для селективной пайки идеальным решением для контрактных производителей и производителей изделий повышенной надежности.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART решения для THT</h5>
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
                <Heading {...headingStyle}>Автоматичні системи селективного паяння.</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Монтаж компонентів в отвори плат</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Універсальне гнучке обладнання для повної автоматизації ручних операцій паяння в умовах серійного багатономенклатурного і багатосерійного виробництв. Автоматичні установки селективного паяння застосовуються для роботи в лінії і як окреме обладнання. Для багатосерійного виробництва машини додатково оснащуються модулем групового паяння. Устаткування має модульну конструкцію і оптимально комплектується відповідно до вимог замовника під конкретний виріб. Швидка переналагодження і можливість регулювання технологічного процесу робить автоматичне обладнання для селективного паяння ідеальним рішенням для контрактних виробників і продукції підвищеної надійності.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART рішення для THT</h5>
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