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
            allMaterialJson (filter: {id: {regex: "/soldering-bars/"}}, sort: {order: ASC, fields: id}) {
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
            allMaterialUaJson (filter: {id: {regex: "/soldering-bars/"}}, sort: {order: ASC, fields: id}) {
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
                <Heading {...headingStyle}>Припой для волновой пайки</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Припой в брусках для загрузки паяльных машин.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Припой для волновой пайки и селективной пайки поставляется в брусках из припойного сплава высокой чистоты. Применяется для машинной групповой пайки на установках пайки волной припоя и на установка селективной пайки для электрического соединения и фиксации электронных компонентов на печатной плате. Поставляются припои в брусках с различными видами сплавов: для свинцовой пайки, для бессвинцовой пайки и специального назначения. Качество паянных соединений на прямую завит от качества применяемых припоев. Качество припоев для машинной групповой пайки определяется количеством примесей и должно подтверждаться документацией сертифицирующих организаций. Применение проверенных припоев от известных производителей позволяет снизить расходы и уменьшить количество брака на ранних технологических стадиях.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Технология машинной пайки</h5>
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
                <Heading {...headingStyle}>Припій для хвильової пайки</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Припій у брусках для завантаження паяльних машин.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Припій для хвильового паяння та селективного паяння поставляється в брусках із припойного сплаву високої чистоти. Застосовується для машинного групового паяння на установках пайки хвилею припою та на установках селективного паяння для електричного з'єднання та фіксації електронних компонентів на друкованій платі. Поставляються припої в брусках з різними видами сплавів: для свинцевого паяння, для безсвинцевого паяння та спеціального призначення. Якість паяних з'єднань залежить від якості застосовуваних припоїв. Якість припоїв для машинного групового паяння визначається кількістю домішок і має підтверджуватись документально від організацій, що сертифікують припій. Застосування перевірених припоїв від відомих виробників дозволяє знизити витрати та зменшити кількість дефектів на ранніх технологічних стадіях.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Технологія машинного паяння</h5>
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