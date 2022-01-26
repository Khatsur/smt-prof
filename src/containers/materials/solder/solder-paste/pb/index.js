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
            allMaterialJson (filter: {id: {regex: "/pb-indium-smq92j/"}}, sort: {order: ASC, fields: id}) {
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
            allMaterialUaJson (filter: {id: {regex: "/pb-indium-smq92j/"}}, sort: {order: ASC, fields: id}) {
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
                <Heading {...headingStyle}>Безотмывочная паяльная паста со свинцом</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Паяльная паста для свинцовой пайки не требующая отмывки. </h5>
                    <h6 style={{textAlign: "justify"}}>
                    Свинцовые паяльные пасты применяются в технологии поверхностного монтажа, где нет ограничений по применению сплавов с содержанием свинца. Они обеспечивают хорошую пайку и смачивание различных типов металлизации по покрытиям свинцовых и безсвинцовых компонентов. Демонстрирует высокую стабильность качества отпечатков пасты при печати под компоненты с мелким шагом. Отпечатки пасты долгое время сохраняют клеящие свойства и хорошо удерживают установленные компоненты до оплавления. Поддерживают технологию не   требующую отмывки. Минимальные остатки после пайки позволяют наносить защитные покрытия без отмывки для изделий бытового назначения.</h6>
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
                <Heading {...headingStyle}>Безвідмивальна паяльна паста зі свинцем</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Паяльна паста для свинцевої пайки, що не вимагає відмивання.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Свинцеві паяльні пасти застосовують у технології поверхневого монтажу, де немає обмежень щодо застосування сплавів із вмістом свинцю. Вони забезпечують хорошу пайку та змочування різних типів металізації по покриттям свинцевих та безсвинцевих компонентів. Демонструє високу стабільність якості відбитків пасти під час друку під компоненти з дрібним кроком. Відбитки пасти довго зберігають клеючі властивості і добре утримують встановлені компоненти до оплавлення. Підтримують технологію, що не вимагає відмивання. Мінімальні залишки після паяння дозволяють наносити захисні покриття без відмивання для виробів побутового призначення.</h6>
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