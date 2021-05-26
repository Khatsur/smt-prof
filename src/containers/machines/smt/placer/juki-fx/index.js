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
            allJukiPlacerJson (filter: {title: {regex: "/fx/"}}) {
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
            allJukiPlacerUaJson (filter: {title: {regex: "/fx/"}}) {
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
    
    const caseStudies = autoPrinterData.allJukiPlacerJson.edges;
    const caseStudiesUa = autoPrinterData.allJukiPlacerUaJson.edges;
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <Heading {...headingStyle}>CHIP SHOOTER  установщики JUKI серии FX</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Максимальные обороты производственной линии SMT</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Инновационные автоматические установщики SMD электронных компонентов  предназначены для крупносерийного производства SMT монтажа печатных плат разной сложности. Сверхбыстрое и точное размещение микрокомпонентов на печатных платах.  SMD монтажный автомат серии RS  сочетает в себе максимальную скорость установки электронных компонентов и высокое качество процессов установки компонентов в CHIP корпусах.  Короткое время переоснащения благодаря быстрой замене питающих блоков и минимальное техническое обслуживание. Дружественный интерфейс с сенсорным экраном и мощное программное обеспечение для оптимизации обеспечивают дополнительную простоту использования.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Почувствуйте ускорение…</h5>
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
                <Heading {...headingStyle}>CHIP SHOOTER установники JUKI серії FX</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Максимальні обороти виробничої лінії SMT</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Інноваційні автоматичні установники SMD електронних компонентів призначені для багатосерійного виробництва SMT монтажу друкованих плат різної складності. Надшвидке і точне розміщення мікрокомпонентів на друкованих платах. SMD монтажний автомат серії RS поєднує в собі максимальну швидкість встановлення електронних компонентів і високу якість процесів встановлення компонентів в CHIP корпусах. Короткий час переоснащення завдяки швидкій заміні живильних блоків і мінімальне технічне обслуговування. Дружній інтерфейс з сенсорним екраном і потужне програмне забезпечення для оптимізації забезпечують додаткову простоту використання.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Відчуйте прискорення…</h5>
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
        pt: '39px',
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