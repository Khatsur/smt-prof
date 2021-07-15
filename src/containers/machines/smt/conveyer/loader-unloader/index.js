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
            allConveyerJson (filter: {id: {regex: "/loader/"}}, sort: {order: ASC, fields: id}) {
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
            allConveyerUaJson (filter: {id: {regex: "/loader/"}}, sort: {order: ASC, fields: id}) {
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
                Оборудование для автоматической загрузки печатных плат в линию  и выгрузки печатных плат с линии применяют для полной автоматизации производственной линии. Устройства загрузки / выгрузки полностью исключат ручное перемещение плат и существенно снижает уровень брака на ранних стадия производства. Перемещение печатных плат в устройствах загрузки может осуществляться с накопителей плат или непосредственно со стопки. Использование устройств загрузки / выгрузки позволяет увеличить производительность линии в условиях мелкосерийного многономенклатурного производства на 30%. Это незаменимый атрибут для контрактных производителей и показатель высокой организации производства.</h6>
                <br></br>
                    <Heading {...headingStyle}>Системы автоматической загрузки и выгрузки печатных плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Сбалансированная работа линии.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Устройства загрузки и выгрузки печатных плат применяются в линиях поверхностного монтажа (SMT). Загрузчики печатных плат устанавливаются в начале линии и используются для автоматической подачи плат на конвейер линии. По типу делятся на загрузчики из стопки плат, загрузчики магазинного типа (с накопителем плат) и вакуумные. Разгрузчики печатных плат устанавливаются в конце производственной линии для автоматического снятия плат с конвейера и загрузки в магазин (накопитель). Устройства загрузки / выгрузки позволяют полностью автоматизировать линию, существенно увеличить производительность, уменьшить уровень брака.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART решения для перемещения печатных плат</h5>
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
                Устаткування для автоматичного завантаження друкованих плат в лінію і вивантаження друкованих плат з лінії застосовують для повної автоматизації виробничої лінії. Пристрої завантаження і розвантаження повністю виключають ручне переміщення плат і істотно знижують рівень дефектів на ранніх стадія виробництва. Переміщення друкованих плат в пристроях завантаження може здійснюватися з накопичувачів плат або безпосередньо зі стопки. Використання пристроїв завантаження та розвантаження дозволяє збільшити продуктивність лінії в умовах дрібносерійного багатономенклатурного виробництва на 30%. Це незамінний атрибут для контрактних виробників і показник високої організації виробництва.</h6>
                <br></br>
                    <Heading {...headingStyle}>Системи автоматичного завантаження і вивантаження друкованих плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Збалансована робота лінії.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Пристрої завантаження і вивантаження друкованих плат застосовуються в лініях поверхневого монтажу (SMT). Завантажники друкованих плат встановлюються на початку лінії і використовуються для автоматичної подачі плат на конвеєр лінії. За типом поділяються на завантажувачі зі стосу плат, завантажувачі магазинного типу (з накопичувачем плат) і вакуумні. Розвантажувачі друкованих плат встановлюються в кінці виробничої лінії для автоматичного зняття плат з конвеєра і завантаження в магазин (накопичувач). Пристрої завантаження / розвантаження дозволяють повністю автоматизувати лінію, істотно збільшити продуктивність, зменшити рівень дефектів.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART рішення для переміщення друкованих плат</h5>
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