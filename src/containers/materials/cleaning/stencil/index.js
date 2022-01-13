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
            allMaterialJson (filter: {id: {regex: "/zestron-stencil/"}}, sort: {order: ASC, fields: id}) {
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
            allMaterialUaJson (filter: {id: {regex: "/zestron-stencil/"}}, sort: {order: ASC, fields: id}) {
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
                <Heading {...headingStyle}>Очистка трафаретов паяльной пасты</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Отмывочные жидкости для очистки трафаретов</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Нанесение паяльной пасты – это первый технологический процесс технологии поверхностного монтажа (SMT). Устранение потенциального брака на этой стадии позволяет снизить уровень брака на 50% и соответственно снизить затраты на производство изделия. В современном производстве очистка трафаретов это отдельный технологический процесс. Отмывочные жидкости для очистки трафаретов для нанесения паяльной пасты разработаны для эффективного удаления неоплавленной паяльной пасты и клеев для поверхностного монтажа с поверхности и апертур трафарета. Применение отмывочных жидкостей от известных мировых производителей экономит средства и гарантирует высокое качество.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART технологии очистки трафаретов от ZESTRON</h5>
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
                <Heading {...headingStyle}>Очищення трафаретів паяльної пасти</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Миючі засоби для очищення трафаретів</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Нанесення паяльної пасти – це перший технологічний процес технології поверхневого монтажу (SMT). Усунення потенційних дефектів на цій стадії дозволяє знизити рівень браку на 50% і, відповідно, знизити витрати на виробництво виробу. У сучасному виробництві очищення трафаретів – це окремий технологічний процес. Миючі засоби для очищення трафаретів для нанесення паяльної пасти розроблені для ефективного видалення неоплавленої паяльної пасти та клеїв для поверхневого монтажу з поверхні та апертур трафарету. Застосування миючих рідин від відомих світових виробників заощаджує кошти та гарантує високу якість.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART технології очищення трафаретів від ZESTRON</h5>
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