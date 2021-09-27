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
            allMachineJson (filter: {id: {regex: "/separation-router/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/separation-router/"}}, sort: {order: ASC, fields: id}) {
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
    
    const caseStudies = autoPrinterData.allMachineJson.edges;
    const caseStudiesUa = autoPrinterData.allMachineUaJson.edges;
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <h6 style={{textAlign: "justify"}}>
                Классический метод разделения групповых заготовок печатных плат в условиях серийного производства электроники. В качестве рабочего инструмента используется фреза. К основному недостатку можно отнести износ рабочего инструмента, что может влиять на точностные характеристики машины. Но тем не менее, такое оборудование активно применяется на современных производствах и обеспечивает высоко качество разделения и высокую производительность.</h6>
                <br></br>
                    <Heading {...headingStyle}>Роутеры для разделения плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Минимальные механические напряжения.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Роутеры для разделения печатных плат могут работ как в линии, и как отдельностоящее оборудование. Полуавтоматы имеют ручную загрузку – выгрузку плат. Автоматическое оборудование для работы в линии может иметь встроенный робот манипулятор, который устанавливает разделенные платы в тару или сразу в упаковку.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надежность электроники</h5>
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
                Класичний метод розділення групових заготовок друкованих плат в умовах серійного виробництва електроніки. Як робочий інструмент використовується фреза. До основного недоліку можна віднести знос робочого інструмента, що може впливати на точнісні характеристики машини. Але тим не менш, таке обладнання активно застосовується на сучасних виробництвах і забезпечує високу якість розділення і високу продуктивність.</h6>
                <br></br>
                    <Heading {...headingStyle}>Роутери для розділення плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Мінімальні механічні напруження.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Установки нанесення вологозахисних покриттів методом занурення в ванну - це класичний метод нанесення. Незважаючи на свою старомодність, метод активно застосовується для виробів, які необхідно повністю (включаючи кромки плат) покривати захисним матеріалом. Устаткування має просту конструкцію і високу надійність. Метод який пройшов випробування часом.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надійність електроніки</h5>
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