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
            allMachineJson (filter: {id: {regex: "/crimping/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/crimping/"}}, sort: {order: ASC, fields: id}) {
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
                Оборудование для опрессовки контактов применятся для увеличение производительности и достижения высокого качества обжима. По принципу действия прессы бывают пневматические и электромеханические. Оборудование имеет сменные аппликаторы под определенные типы наконечников для обеспечения оптимальных параметров опресовки. Оборудование позволяет получить высокое качество опрессовки. Простое в эксплуатации и требует минимального технического обслуживания.</h6>
                <br></br>
                    <Heading {...headingStyle}>Опрессовка контактов</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Обработка проводов и кабелей</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Оборудование для опрессовки контактов применяют для автоматизации технологических процессов крепления контактных наконечников на проводах. Оборудование имеет стационарную конфигурацию для применения на производственных участках и портативное настольное исполнение для сборочных мест в мелкосерийном производстве и производстве прототипов. Автоматическое оборудование для опрессовки контактов комплектуется матрицами под определенные виды наконечников, которые подаются в соответствующей упаковке (лента). Могут имеет дополнительные функции (напр. зачистка изоляции). Портативные устройства имеют сменные тиски и работаю с россыпью.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Повышение производительности</h5>
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
                Останнім часом нові технології змогли здешевити обладнання для лазерного маркування та різання. Малі компанії можуть дозволити собі встановити невеликий лазерний гравер для маркування різних виробів від сувенірних ручок до друкованих плат. Невелике лазерне обладнання може працювати в офісних центрах, де немає спеціалізованих систем відведення продуктів, що виникають при лазерному різанні або маркуванні. Автономна витяжка для лазерного верстата буде оптимальним рішенням для такого застосування. Устаткування не створює додаткового шуму і має 3-ступінчасту систему очищення, що дозволяє випускати очищене повітря, яке відповідає санітарним нормам, безпосередньо в приміщення.</h6>
                <br></br>
                    <Heading {...headingStyle}>Безпека виробництва.</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Зниження кількості дефектів при виробництві.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Обладнання для оснащення невеликого обладнання для лазерної обробки матеріалів – маркування друкованих плат, лазерне розділення друкованих плат, гравірування. Компактна та безшумна автономна витяжна система підходить як для виробничих умов, так і для використання в школах, майстерень з виготовлення вивісок, у невеликих промислових умовах, для машин для лазерного маркування.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Культура виробництва</h5>
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