import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../../components/ui/wrapper'
import Heading from '../../../../../components/ui/heading'
import CaseStudyBox from '../../../../../components/box-large-image/layout-two'
import ButtonSection from '../../../../../containers/elements/button/button-smt'

const CaseStudiesArea = (props) => {
    const autoPrinterData = useStaticQuery(graphql `
        query {
            allInspectionJson (filter: {title: {regex: "/vcta/"}}) {
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
            allInspectionUaJson (filter: {title: {regex: "/3d/"}}) {
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
    
    const caseStudies = autoPrinterData.allInspectionJson.edges;
    const caseStudiesUa = autoPrinterData.allInspectionUaJson.edges;
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <h6 style={{textAlign: "justify"}}>
                Автоматические установщики  SMD предназначены для установки электронных компонентов  на контактные площадки печатных плат в автоматическом режиме. Автоматические установщики SMD контролируют все технологические параметры установки электронных компонентов на печатные платы и геометрические размеры SMD и печатных плат. Опознавание компонентов SMD происходит  при помощи СТЗ в автоматическом режиме. Применяется в условиях мелкосерийного, серийного и крупносерийного производства монтажа печатных плат для технологии поверхностного монтажа SMT. Повышает производительности и качество технологических процессов установки электронных компонентов на печатные платы для технологии поверхностного монтажа SMT. Оборудование предназначено для работы в линии поверхностного монтажа SMT. Может применяться в мелкосерийном производстве, как отдельностоящее оборудование для изделий с высокими требованиями к эксплуатации.</h6>
                <br></br>
                    <Heading {...headingStyle}>SMART установщики JUKI серии RS</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Максимальная гибкость для контрактных производителей.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Инновационные автоматические установщики SMD электронных компонентов  предназначены для среднесерийного многономенклатурного производства SMT монтажа печатных плат разной сложности. Установщики SMD серии RS  сочетают в себе компактный дизайн и высокое качество процессов установки электронных компонентов. Машины класса Hi-End которые могут быть одновременно и скоростным установщиком chipshooter и прецизионным оборудование для установки сложных и мелких компонентов.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Почувствуйте уверенность…</h5>
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
                Автоматичні установники SMD призначені для встановлення електронних компонентів на контактні площадки друкованих плат в автоматичному режимі. Автоматичні установники SMD контролюють всі технологічні параметри встановлення електронних компонентів на друковані плати і геометричні розміри SMD і друкованих плат. Розпізнавання компонентів SMD відбувається за допомогою СТЗ в автоматичному режимі. Обладнання JUKI застосовується в умовах, серійного і великосерійного виробництва монтажу друкованих плат для технології поверхневого монтажу SMT. Підвищує продуктивності і якість технологічних процесів встановлення електронних компонентів на друковані плати для технології поверхневого монтажу SMT. Устаткування призначене для роботи в лінії поверхневого монтажу SMT. Може застосовуватися в дрібносерійному виробництві для виробів з високими вимогами до експлуатації.</h6>
                <br></br>
                    <Heading {...headingStyle}>SMART установники JUKI серії RS</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Максимальна гнучкість для контрактних виробників.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Інноваційні автоматичні установники SMD електронних компонентів призначені для серійного багатономенклатурного виробництва SMT монтажу друкованих плат різної складності. Установники SMD серії RS поєднують в собі компактний дизайн і високу якість процесів встановлення електронних компонентів. Машини класу Hi-End які можуть бути одночасно і швидкісним чіпшутерами і прецизійним обладнання для встановлення складних і дрібних компонентів.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Відчуйте впевненість ...</h5>
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