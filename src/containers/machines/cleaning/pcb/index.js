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
            allMachineJson (filter: {id: {regex: "/pcb/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/pcb/"}}, sort: {order: ASC, fields: id}) {
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
                Оборудование применяются для отмывки печатных плат после пайки от остатков флюса, паяльной пасты и других загрязнений.   Отмывка собранных плат очень ответственный процесс, требующий строгого соблюдения технологии и применения качественного оборудования и материалов. Мойка плат позволяет уменьшить количество брака, возникающего в процессе эксплуатации оборудования и повысить надежность изделия в целом. В последнее время производители электроники все больше склоняются с машинам струйного типа. Оборудование позволяет делать процесс мойки в автоматическом режиме с минимальны влиянием человека. Ультразвуковой метод отмывки плат нашел применение в модульных установка с отдельными ваннами для мойки и полоскания.</h6>
                <br></br>
                    <Heading {...headingStyle}>Системы отмывки плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Высокая надежность электроники.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Системы отмывки печатных плат применяются для очистки печатных плат после пайки от остатков флюса, паяльной пасты и других загрязнений. Оборудование может конфигурироваться под конкретные задачи заказчика для ответственных изделий применяемых в автомобильной, военной, медицинской промышленностях и в системах жизнеобеспечения. Отмывка печатных плат происходит последовательно с ручным или автоматическим перемещением плат. Системы отмывка печатных плат позволяют спроектировать и отработать идеальный процесс очистки под изделие и производственные условия Заказчика; максимально уменьшить количество брака, возникающего в процессе эксплуатации оборудования и повысить надежность изделия в целом.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART решения для очистки печатных плат</h5>
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
                Обладнання застосовують для відмивання друкованих плат після паяння від залишків флюсу, паяльної пасти та інших забруднень. Відмивання зібраних плат дуже відповідальний процес, що вимагає суворого дотримання технології і застосування якісного обладнання і матеріалів. Миття плат дозволяє зменшити кількість браку, який виникає в процесі експлуатації обладнання і підвищити надійність виробу в цілому. Останнім часом виробники електроніки все більше схиляються до машин струменевого типу. Устаткування дозволяє робити процес мийки в автоматичному режимі з мінімальними впливом людини. Ультразвуковий метод відмивання плат знайшов застосування в модульних установка з окремими ваннами для миття і полоскання.</h6>
                <br></br>
                    <Heading {...headingStyle}>Системи відмивання плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Висока надійність електроніки.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Системи відмивання друкованих плат застосовуються для очищення друкованих плат після паяння від залишків флюсу, паяльної пасти і інших забруднень. Обладнання може комплектуватися під конкретні завдання замовника для відповідальних виробів, що застосовуються в автомобільній, військової, медичної промисловості і в системах життєзабезпечення. Відмивання друкованих плат відбувається послідовно з ручним або автоматичним переміщенням плат. Системи відмивання друкованих плат дозволяють спроектувати і відпрацювати ідеальний процес очищення під виріб і виробничі умови Замовника; максимально зменшити кількість браку, який виникає в процесі експлуатації обладнання і підвищити надійність виробу в цілому.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART рішення для очищення друкованих плат</h5>
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