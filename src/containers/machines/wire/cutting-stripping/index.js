import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import CaseStudyBox from '../../../../components/box-large-image/layout-two'
import ButtonSection from '../../../elements/button/button-smt'

const CaseStudiesArea = (props) => {
    const autoPrinterData = useStaticQuery(graphql `
        query {
            allMachineJson (filter: {id: {regex: "/cutting-stripping/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/cutting-stripping/"}}, sort: {order: ASC, fields: id}) {
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
                Оборудование для обработки проводов для резки и зачистки применятся для различных видов проводов и кабелей в широком диапазоне размеров: многослойные провода, плоские провода, многожильные плоские, с двойной изоляцией и др. Оборудование позволяет одновременно делать лужение и скручивание проводов. Машины имеют компактную конструкцию. Позволяют изменять основные технологические параметры для достижения максимального качества подготовки проводов.</h6>
                <br></br>
                    <Heading {...headingStyle}>Мерная резка и зачистка</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Обработка проводов и кабелей</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Оборудование для резки и зачистки проводов применяют для автоматизации основных технологических процессов обработки провода: мерная резка, зачистка изоляции и лужение. Процессы происходят в автоматическом режиме. Предварительно устанавливаются технологические параметры: длина отрезков, длина зачистки, глубина зачистки и др. Оборудование для резки и зачистки проводов работает с широким диапазон диаметров проводов. Подготавливаются многожильные кабели, коаксиальные кабели, плоские провода с различными типами изоляции.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Повышение производительности </h5>
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
                Обладнання для обробки проводів для різання та зачистки застосовується для різних видів проводів та кабелів у широкому діапазоні розмірів: багатошарові дроти, плоскі дроти, багатожильні плоскі, з подвійною ізоляцією та ін. Устаткування дозволяє одночасно робити лудіння та скручування дротів. Машини мають компактну конструкцію. Дозволяють змінювати основні технологічні параметри задля досягнення максимальної якості підготовки проводів.</h6>
                <br></br>
                    <Heading {...headingStyle}>Мірне різання та зачистка</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Обробка проводів та кабелів</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Обладнання для різання та зачистки дротів застосовують для автоматизації основних технологічних процесів обробки дроту: мірне різання, зачистка ізоляції та лудіння. Процеси відбуваються автоматично. Попередньо встановлюються технологічні параметри: довжина відрізків, довжина зачистки, глибина зачистки та ін. Устаткування для різання та зачистки проводів працює з широким діапазоном діаметрів проводів. Підготовляються багатожильні кабелі, коаксіальні кабелі, плоскі дроти з різними типами ізоляції.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Підвищення продуктивності</h5>
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