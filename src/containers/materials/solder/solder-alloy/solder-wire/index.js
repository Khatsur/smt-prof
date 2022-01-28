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
            allMaterialJson (filter: {id: {regex: "/soldering-wire/"}}, sort: {order: ASC, fields: id}) {
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
            allMaterialUaJson (filter: {id: {regex: "/soldering-wire/"}}, sort: {order: ASC, fields: id}) {
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
                <Heading {...headingStyle}>Припой трубчатый</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Припой с флюсом для ручной и роботизированной пайки.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Припой трубчатый для ручной пайки представляет собой проволоку из припойного сплава с флюсом внутри применяется для электрического соединения и фиксаци электронных компонентов на печатной плате. Поставляются припои с различными видами сплавов: для свинцовой пайки, для бессвинцовой пайки и специального назначения; с различными видами флюсов: не требующими отмывки и с активными химическими компонентами. Качество паянных соединений на прямую зависит от качества применяемых припоев. Применение проверенных припоев от извесных производителей позволяет снизить расходы и уменьшить количество брака на ранних технологических стадиях.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Технология ручной пайки</h5>
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
                <Heading {...headingStyle}>Припій трубчастий</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Припій з флюсом для ручного та роботизованого паяння.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Припій трубчастий для ручного паяння це дріт із припійного сплаву з флюсом всередині застосовується для електричного з'єднання і фіксації електронних компонентів на друкованій платі. Поставляються припої з різними видами сплавів: для свинцевого паяння, для безсвинцевого паяння та спеціального призначення; з різними видами флюсів: не вимагають відмивання та з активними хімічними компонентами. Якість паяних з'єднань прямо залежить від якості застосовуваних припоїв. Застосування перевірених припоїв від відомих виробників дозволяє знизити витрати та зменшити кількість дефектів на ранніх технологічних стадіях.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Технологія ручного паяння</h5>
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