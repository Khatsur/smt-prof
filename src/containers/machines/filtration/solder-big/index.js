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
            allMachineJson (filter: {id: {regex: "/big-bofa/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/big-bofa/"}}, sort: {order: ASC, fields: id}) {
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
                Многоместная вытяжка для пайки для оснащения рабочих мест монтажного производства. На первый взгляд все выглядит очень просто и здесь нет инновационных решений. Передовые технологии управления и отслеживания уже встроены в современные вытяжные системы. Они обеспечивают удобный и интуитивно понятный способ работы с данными. К ним легко получить доступ и провести анализ данных как локально на рабочем месте так удаленно. Замена фильтра может быть спланирована, чтобы минимизировать или исключить перерывы в работе и что бы избежать дополнительного технического обслуживания. Операционная система iQ включает в себя методы контроля состояния  предварительного фильтра и комбинированного (основного) фильтра. Предупреждения перед блокировкой системы предоставляют операторам достаточно времени для подготовки к замене, определяя, какой фильтр необходимо заменить и когда.</h6>
                <br></br>
                    <Heading {...headingStyle}>Автономные вытяжные системы</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Безопасность производства.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Интеллектуальное оборудование для оснащения производственного участка для ручного монтажа электронных компонентов. Система вытягивает вредные продукты возникающие во время процесса ручной пайки и фильтрует.  Двухуровневая система управления и возможность загрузки рабочих параметров для мониторинга и оценки  на удаленном рабочем месте. Оборудование имеет трехступенчатую систему очистки воздуха и включает в себя комбинированные фильтры типа HEPA/GAS и запатентованную технология предварительного фильтра DeepPleat DUO. Малошумный режим роботы и удобный доступ для замены фильтров.</h6>
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
                Багатомісна витяжка для паяння для оснащення робочих місць монтажного виробництва. На перший погляд, все виглядає дуже просто і тут немає інноваційних рішень. Передові технології управління та відстеження вже вбудовані у сучасні витяжні системи. Вони забезпечують зручний та інтуїтивно зрозумілий спосіб роботи з даними. До них легко отримати доступ та провести аналіз даних як локально на робочому місці так віддалено. Заміна фільтра може бути спланована, щоб мінімізувати або виключити перерви в роботі і уникнути додаткового технічного обслуговування. Операційна система iQ включає методи контролю стану попереднього фільтра і комбінованого (основного) фільтра. Попередження перед блокуванням системи надають операторам достатньо часу для підготовки до заміни, визначаючи, який фільтр необхідно замінити і коли.</h6>
                <br></br>
                    <Heading {...headingStyle}>Безпека виробництва.</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Зниження кількості дефектів при виробництві.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Интеллектуальное оборудование для оснащения производственного участка для ручного монтажа электронных компонентов. Система вытягивает вредные продукты возникающие во время процесса ручной пайки и фильтрует.  Двухуровневая система управления и возможность загрузки рабочих параметров для мониторинга и оценки  на удаленном рабочем месте. Оборудование имеет трехступенчатую систему очистки воздуха и включает в себя комбинированные фильтры типа HEPA/GAS и запатентованную технология предварительного фильтра DeepPleat DUO. Малошумный режим роботы и удобный доступ для замены фильтров.</h6>
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