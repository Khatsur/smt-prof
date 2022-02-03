import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../../components/ui/wrapper'
import Heading from '../../../../../components/ui/heading'
import CaseStudyBox from '../../../../../components/box-large-image/layout-two'
import ButtonSection from '../../../../elements/button/button-smt'

const CaseStudiesArea = (props) => {
    const autoPrinterData = useStaticQuery(graphql `
        query {
            allMaterialJson (filter: {id: {regex: "/soldering-flux-wave/"}}, sort: {order: ASC, fields: id}) {
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
            allMaterialUaJson (filter: {id: {regex: "/soldering-flux-wave/"}}, sort: {order: ASC, fields: id}) {
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
    
    const caseStudies = autoPrinterData.allMaterialJson.edges;
    const caseStudiesUa = autoPrinterData.allMaterialUaJson.edges;
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <Heading {...headingStyle}>Флюс для машинной пайки</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Жидкий флюс для пайки волной припоя</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Флюс для пайки волной применяется для очистки и подготовки металлических поверхностей перед пайкой. Используют флюс для пайки при групповых методах монтажа на установках пайки волной припоя, на установках селективной пайки и пайке методом погружения, для монтажа электронных компонентов в отверстия печатных плат и для смешанного монтажа. Может применятся для ручной пайки и ремонта плат. По типу нанесения флюсы для пайки делятся на два основных типа: распыление и вспенивание. Флюс для пайки улучшает смачиваемость поверхностей расплавленным припоем и защищает  поверхности от окисления при высоких температурах. Применение флюсов для пайки известных мировых производителей позволяет минимально снизить количество брака на ранних технологических стадиях и избежать дополнительных технологических процессов таких как отмывка и контроль отмывки.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Технология машинной пайки</h5>
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
                <Heading {...headingStyle}>Флюс для машинного паяння</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Рідкий флюс для паяння хвилею припою.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Флюс для паяння хвилею застосовується для очищення та підготовки металевих поверхонь перед паянням. Використовують флюс для паяння при групових методах монтажу на установках пайки хвилею припою, на установках селективного паяння та пайки методом занурення, для монтажу електронних компонентів в отвори друкованих плат та змішаного монтажу. Може застосовуватися для ручного паяння та ремонту плат. За типом нанесення флюси для паяння поділяються на два основні типи: розпилення та спінювання. Флюс для паяння покращує змочуваність поверхонь розплавленим припоєм та захищає поверхні від окиснення за високих температур. Застосування флюсів для паяння відомих світових виробників дозволяє мінімально знизити кількість дефектив на ранніх технологічних стадіях та уникнути додаткових технологічних процесів, таких як відмивання та контроль відмивання.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Технологія машинного паяння</h5>
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