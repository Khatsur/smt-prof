import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../../components/ui/wrapper'
import Heading from '../../../../../components/ui/heading'
import CaseStudyBox from '../../../../../components/box-large-image/layout-two'
import ButtonSection from '../../../../../containers/elements/button/button-smt'

const CaseStudiesArea = (props) => {
    const kayoReflowData = useStaticQuery(graphql `
        query {
            allReflowJson (filter: {id: {regex: "/kayo/"}}) {
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
            allReflowUaJson (filter: {id: {regex: "/kayo/"}}) {
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
    
    const caseStudies = kayoReflowData.allReflowJson.edges;
    const caseStudiesUa = kayoReflowData.allReflowUaJson.edges;
    const brochure = "https://drive.google.com/file/d/1fyiZShg1Djwc7uOD1tD1KxCyLjN0paTg/view?usp=sharing";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <Heading {...headingStyle}>Бюджетные конвейерные печи для монтажа SMD</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Промышленное оборудование для пайки печатных плат</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Конвекционные печи оплавления припоя среднего уровня предназначены для применения в мелкосерийном и среднесерийном производствах. Оборудование обеспечивает качественную пайку на уровне дорогого оборудования и обеспечивает максимальное качество пайки при разумных инвестициях. Пайка происходит с минимальным стрессом для компонентов и с максимальным приближением к рекомендованному термопрофилю. Оборудование спроектировано для бесвинцовой пайки в бережном для компонентов режиме.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Бюджетные решения для пайки</h5>
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
                <Heading {...headingStyle}>Бюджетні конвеєрні печі для монтажу SMD</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Промислове обладнання для паяння друкованих плат</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Конвекційні печі оплавлення припою середнього рівня призначені для застосування в дрібносерійному і середньосерійному виробництвах. Устаткування забезпечує якісну пайку на рівні дорогого устаткування і забезпечує максимальну якість пайки при розумних інвестиціях. Паяння відбувається з мінімальним стресом для компонентів і з максимальним наближенням до рекомендованого термопрофілю. Устаткування спроектовано для паяння безсвинцевими припоями в дбайливому для компонентів режимі.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Бюджетні рішення для паяння</h5>
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