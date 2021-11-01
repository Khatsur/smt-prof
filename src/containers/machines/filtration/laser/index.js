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
            allMachineJson (filter: {id: {regex: "/laser-bofa/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/laser-bofa/"}}, sort: {order: ASC, fields: id}) {
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
                За последнее время новые технологии смогли удешевить оборудование для лазерной маркировки и резки. Малые компании могу позволить себе установить небольшой лазерный гравер для маркировки различных изделий от сувенирных ручек до печатных плат. Небольшое лазерное оборудование может  работать  в офисных центрах, где нет специализированных систем отвода продуктов возникающих при лазерной резке или маркировке.   Автономная мобильная вытяжка для лазерного станка будет оптимальным решением для такого применения. Оборудование не создает дополнительного шума и имеет 3-х ступенчатую систему очистки, что позволяет выпускать очищенный воздух, который соответствует санитарным нормам, непосредственно в помещение.</h6>
                <br></br>
                    <Heading {...headingStyle}>Автономные вытяжные системы</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Безопасность производства.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Оборудование для оснащения небольшого оборудования для лазерной обработки материалов – маркировка печатных плат, лазерное разделение печатных плат, гравирование. Компактная и бесшумная автономная вытяжная система подходит как для производственных условий таки и для использования в школах, мастерских по изготовлению вывесок, в небольших промышленных условиях, для машин для лазерной маркировки.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Культура производства</h5>
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