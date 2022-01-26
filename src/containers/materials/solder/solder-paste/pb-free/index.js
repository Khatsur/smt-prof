import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../../components/ui/wrapper'
import Heading from '../../../../../components/ui/heading'
import CaseStudyBox from '../../../../../components/box-large-image/layout-two'
import ButtonSection from '../../../../elements/button/button-smt'

const CaseStudiesArea = (props) => {
    const autoPrinterData = useStaticQuery(graphql `
        query {
            allMaterialJson (filter: {id: {regex: "/pbfree-indium/"}}, sort: {order: ASC, fields: id}) {
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
            allMaterialUaJson (filter: {id: {regex: "/pbfree-indium/"}}, sort: {order: ASC, fields: id}) {
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
    
    const caseStudies = autoPrinterData.allMaterialJson.edges;
    const caseStudiesUa = autoPrinterData.allMaterialUaJson.edges;
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <Heading {...headingStyle}>Бессвинцовая паяльная паста</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Паяльная паста для бессвинцовая пайки не требующая отмывки.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Безсвинцовые паяльные пасты применяются в технологии поверхностного монтажа, где есть ограничений по применению сплавов с содержанием свинца. Паяльная пасты разработана для безсвинцового монтажа электронных компонентов на печатные платы. Паста обеспечивает качественную пайки припоями SAC305     (Sn/Ag/Cu, Sn/Ag). Высокое качество трафаретной печати для автоматического нанесения паяльной пасты через трафарет и при ручном нанесении. Остатки флюса после оплавления не требуют отмывки.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART технологии пайки от INDIUM</h5>
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
                <Heading {...headingStyle}>Безсвинцева паяльна паста</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Паяльна паста для безсвинцевої пайки, що не потребує відмивання.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Безсвинцеві паяльні пасти застосовують у технології поверхневого монтажу, де є обмежень щодо застосування сплавів із вмістом свинцю. Паяльна пасти розроблена для безсвинцевого монтажу електронних компонентів на друковані плати. Паста забезпечує якісну пайку припоями SAC305 (Sn/Ag/Cu, Sn/Ag). Висока якість трафаретного друку для автоматичного нанесення паяльної пасти через трафарет та при ручному нанесенні. Залишки флюсу після оплавлення не потребують відмивання.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART технології паяння від INDIUM</h5>
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