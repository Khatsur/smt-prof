import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import CaseStudyBox from '../../../../components/box-large-image/layout-two'
import ButtonSection from '../../../../containers/elements/button/button-smt'

const CaseStudiesArea = (props) => {
    const autoPrinterData = useStaticQuery(graphql `
        query {
            allConveyerJson (filter: {id: {regex: "/stencil/"}}, sort: {order: ASC, fields: id}) {
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
            allConveyerUaJson (filter: {id: {regex: "/stencil/"}}, sort: {order: ASC, fields: id}) {
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
    
    const caseStudies = autoPrinterData.allConveyerJson.edges;
    const caseStudiesUa = autoPrinterData.allConveyerUaJson.edges;
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <h6 style={{textAlign: "justify"}}>
                Постоянные уменьшение размеров электронных компонентов делает процесс обмывки трафаретов незаменимой процедурой на производстве. Оборудование для отмывки трафаретов применяют для очистки аппертур  трафаретов от остатков паяльной пасты и не полимеризованного клея. Применяют для трафаретов с большим количеством апертур малого размера. Как правило оборудование для отмывки трафаретов может использоваться для очистки плат от неоплавленной паяльной пасты.</h6>
                <br></br>
                    <Heading {...headingStyle}>Системы отмывки трафаретов</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Повышение качества монтажа</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Системы отмывки применяются для отмывки трафаретов от остатков паяльной пасты и не отвердевшего клея. Может использоваться для отмывки плат после нанесения паяльной пасты, при неудовлетворительном нанесении.  С уменьшением размеров электронных компонентов, отмывка трафаретов становится важным и незаменимый процессом в современном производстве. Отмывка трафаретов позволяет уменьшить количество брака на ранних стадиях , что существенно снижает расходы по устранению брака и увеличивает производительность производства в целом.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART решения для очистки трафаретов</h5>
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
                Постійні зменшення розмірів електронних компонентів робить процес миття трафаретів незамінною процедурою на виробництві. Устаткування для відмивання трафаретів застосовують для очищення аппертур трафаретів від залишків паяльної пасти і не полімеризованого клею. Застосовують для трафаретів з великою кількістю апертур малого розміру. Як правило, обладнання для відмивання трафаретів може використовуватися для очищення плат від неоплавленої паяльної пасти.</h6>
                <br></br>
                    <Heading {...headingStyle}>Системи відмивання трафаретів</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Підвищення якості монтажу.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Системи відмивання застосовуються для очищення трафаретів від залишків паяльної пасти і не отверділого клею. Може використовуватися для відмивання плат після нанесення паяльної пасти, при незадовільному нанесенні. Зі зменшенням розмірів електронних компонентів, миття трафаретів стає важливим і незамінний процесом в сучасному виробництві. Відмивання трафаретів дозволяє зменшити кількість браку на ранніх стадіях, що значно знижує витрати по усуненню браку і збільшує продуктивність виробництва в цілому.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART рішення для чищення трафаретів</h5>
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