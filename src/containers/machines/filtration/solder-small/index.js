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
            allMachineJson (filter: {id: {regex: "/small-bofa/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/small-bofa/"}}, sort: {order: ASC, fields: id}) {
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
                Дымоуловители для пайки предназначены для обеспечения безопасности на рабочем месте монтажника. Дымоулавливающие системы позволяют нейтрализовать вредные вещества возникающие во время пайки электронных компонентов на печатные платы. Системы имеют 3-х ступенчатую систему очистки и состоят из предварительного фильтра и комбинированного фильтра типа HEPA/GAS. Бюджетные дымоуловители для пайки предназначение для отвода дыма и газов на 1-2 рабочих места монтажников. Конструктивно оборудование состоит из блока фильтрации где размещены фильтры, системы крепления и отвода вредных испарений.</h6>
                <br></br>
                    <Heading {...headingStyle}>Автономные вытяжные системы</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Безопасность производства.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Бюджетное оборудование для оснащения рабочего места монтажника. Система вытягивает вредные продукты возникающие во время процесса ручной пайки и фильтрует.  Оборудование имеет трехступенчатую систему очистки воздуха и включает в себя комбинированные фильтры типа HEPA/GAS и предварительный фильтры. Малошумный режим роботы и удобный доступ для замены фильтров. Время работы основного фильтра 1 год.</h6>
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
                Димоуловлювачі для паяння призначені для забезпечення безпеки на робочому місці монтажника. Димоуловлювальні системи дозволяють нейтралізувати шкідливі речовини, що виникають під час паяння електронних компонентів на друковані плати. Системи мають 3-ступінчасту систему очищення і складаються з попереднього фільтра та комбінованого фільтра типу HEPA/GAS. Бюджетні димоуловлювачі для паяння призначені для відведення диму та газів на 1-2 робочих місця монтажників. Конструктивно обладнання складається з блоку фільтрації, де розміщені фільтри, системи кріплення та відведення шкідливих випарів.</h6>
                <br></br>
                    <Heading {...headingStyle}>Безпека виробництва.</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Зниження кількості дефектів при виробництві.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Бюджетне обладнання для обладнання робочого місця монтажника. Система витягує шкідливі продукти, що виникають під час процесу ручного паяння і фільтрує. Обладнання має триступеневу систему очищення повітря і включає комбіновані фільтри типу HEPA/GAS і попередній фільтри. Малошумний режим роботи та зручний доступ для заміни фільтрів. Час роботи головного фільтра 1 рік.</h6>
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