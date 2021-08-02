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
            allMachineJson (filter: {title: {regex: "/spi/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {title: {regex: "/spi/"}}, sort: {order: ASC, fields: id}) {
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
                Автоматическая оптическая инспекция нанесения паяльной пасты (SPI) применяется для определение дефектов печати паяльной пасты, оптимизации процесса нанесения паяльной пасты на контактные площадки и корректировки работы оборудования для нанесения паяльной пасты. Оборудование устанавливается в линии поверхностного монтажа (SMT) после устройства нанесения паяльной пасты. Машина может эксплуатироваться, как отдельностоящее оборудование. Системы автоматической инспекции нанесения паяльной пасты RV-2 от JUKI применяют инновационную технологию  3D  инспекции нанесения паяльной пасты.  Оборудование и учитывают все потребности Заказчиков, от мелкосерийного до крупносерийного производств для любого типа изделия.</h6>
                <br></br>
                    <Heading {...headingStyle}>Инспекция нанесения паяльной пасты JUKI серия RV</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Максимальная гибкость и максимальная скорость.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Инновационные 3D системы автоматической оптической инспекции нанесения паяльной пасты на контактные площадки печатных плат. Оборудование сочетает в себе все передовые решения для 3D измерений, современное программное обеспечение и компактный дизайн. Машины класса Hi-End для серийного и крупносерийного производства сложных электронных изделий.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART решения для оптической инспекции</h5>
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
                Автоматична оптична інспекція нанесення паяльної пасти (SPI) застосовується для визначення дефектів друку паяльної пасти, оптимізації процесу нанесення паяльної пасти на контактні площадки і коригування роботи обладнання для нанесення паяльної пасти. Устаткування встановлюється в лінії поверхневого монтажу (SMT) після обладнання для нанесення паяльної пасти. Машина може експлуатуватися, як окреме обладнання. Системи автоматичного інспекції нанесення паяльної пасти RV-2 від JUKI застосовують інноваційну технологію 3D інспекції нанесення паяльної пасти. Устаткування і враховують всі потреби Замовників, від дрібносерійного до багато серійного виробництв для будь-якого типу вироби.</h6>
                <br></br>
                    <Heading {...headingStyle}>Інспекція нанесення паяльної пасти JUKI серія RV</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Максимальна гнучкість і максимальна швидкість.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Інноваційні 3D системи автоматичної оптичної інспекції нанесення паяльної пасти на контактні площадки друкованих плат. Обладнання поєднує в собі всі передові рішення для 3D вимірювань, сучасне програмне забезпечення і компактний дизайн. Машини класу Hi-End для серійного і крупносерийного виробництва складних електронних виробів.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART рішення для оптичної інспекції</h5>
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