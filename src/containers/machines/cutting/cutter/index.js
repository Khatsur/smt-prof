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
            allMachineJson (filter: {id: {regex: "/cab-cutting/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/cab-cutting/"}}, sort: {order: ASC, fields: id}) {
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
                Применение устройств разделения групповых заготовок в условиях мелкосерийного производства существенно снижает уровень дефектов, которые могут проявиться в процессе эксплуатации электронных изделий. В современном мелкосерийном производстве не допускается переламывания плат руками, что создает дополнительные механические напряжение в материале печатной платы и паянных соединениях. Использование даже самых простых настольных устройств с ручной подачей плат повысит надежность и повторяемость технологических процессов.</h6>
                <br></br>
                    <Heading {...headingStyle}>Устройства разделения печатных плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Минимальные механические напряжения.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Настольные дисковые устройства для разделения печатных плат применяют для предварительно скрайбированых групповых заготовок печатных плат (паллет). Самые простые устройства с ручной подачей плат. Установки для разделения панелей с электрическим приводом и программированием зазора между ножами.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надежность электроники</h5>
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
                Застосування пристроїв поділу групових заготовок в умовах дрібносерійного виробництва істотно знижує рівень дефектів, які можуть проявитися в процесі експлуатації електронних виробів. У сучасного дрібносерійного виробництва не допускається переломлення плат руками, що створює додаткові механічні напруження в матеріалі друкованої плати і паяних з'єднаннях. Використання навіть найпростіших настільних пристроїв з ручною подачею плат підвищить надійність і повторюваність технологічних процесів.</h6>
                <br></br>
                    <Heading {...headingStyle}>Пристрої розділення друкованих плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Мінімальні механічні напруження.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Настільні дискові пристрої для розділення друкованих плат застосовують для попередньо скрайбуванних групових заготовок друкованих плат (палет). Найпростіші пристрої з ручною подачею плат. Установки для розділення панелей з електричним приводом і програмуванням зазору між ножами.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надійність електроніки</h5>
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