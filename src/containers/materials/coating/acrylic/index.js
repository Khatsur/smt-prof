import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Section, { Row, Col } from "../../../../components/ui/wrapper";
import Heading from "../../../../components/ui/heading";
import CaseStudyBox from "../../../../components/box-large-image/layout-two";
import ButtonSection from "../../../../containers/elements/button/button-smt";

const CaseStudiesArea = (props) => {
    const autoPrinterData = useStaticQuery(graphql `
        query {
            allMaterialJson (filter: {id: {regex: "/humiseal-acrylic/"}}, sort: {order: ASC, fields: id}) {
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
            allMaterialUaJson (filter: {id: {regex: "/humiseal-acrylic/"}}, sort: {order: ASC, fields: id}) {
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
        
    `);
    
    const caseStudies = autoPrinterData.allMaterialJson.edges;
    const caseStudiesUa = autoPrinterData.allMaterialUaJson.edges;
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <Heading {...headingStyle}>Защитные покрытия HumiSeal</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Влагозащитные акриловые покрытия</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Современные акриловые влагозащитные покрытия HumiSeal представляют собой однокомпонентные лаки с высокими техническим и технологическими характеристиками. Благодаря простым процессам нанесения, полимеризации и  контроля, акриловые покрытия HumiSeal широкое применяются во многих отраслях. Преимущества акриловых влагозащитных покрытий это быстрое отверждение при нагреве; хорошая устойчивость к плесневым грибкам; высокая эластичность в широком диапазоне температур; наилучшая адгезия к материалам печатного узла и высокая ремонтопригодность.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART технологии защиты от HumiSeal</h5>
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
                <Heading {...headingStyle}>Захисні покриття HumiSeal</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Вологозахисні акрилові покриття</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Сучасні акрилові вологозахисні покриття HumiSeal є однокомпонентними лаками з високими технічними і технологічними характеристиками. Завдяки простим процесам нанесення, полімеризації та контролю, акрилові покриття HumiSeal широке застосовують у багатьох галузях. Переваги акрилових вологозахисних покриттів - це швидке затвердіння при нагріванні; хороша стійкість до цвілевих грибків; висока еластичність у широкому діапазоні температур; найкраща адгезія до матеріалів електронної плати та висока ремонтопридатність.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART технології захисту від HumiSeal</h5>
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