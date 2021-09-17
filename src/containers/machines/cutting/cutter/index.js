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
            allMachineJson (filter: {id: {regex: "/gem3-dip/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/gem3-dip/"}}, sort: {order: ASC, fields: id}) {
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
                Классический способ нанесения влагозащитных покрытий на печатные платы. Метод позволяет нанести покрытие на всю поверхность изделия, включая обработанные кромки, которые могут быть особо чувствительными и вбирать влагу. Применятся для изделий требующих полного покрытия платы. Нанесение защитных покрытий методом погружения – это оптимальный процесс для соотношения цена/качество. Эксплуатируется оборудование на специальных производственных участках под вытяжной вентиляцией с соответствующей защитой персонала.  Оборудование не требует больших инвестиций и подходит для мелкосерийного и серийного производства.</h6>
                <br></br>
                    <Heading {...headingStyle}>Установки влагозащиты погружением</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надежность в работе электроники.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Установки нанесения влагозащитных покрытий методом погружения в ванну – это классический метод нанесения. Несмотря на свою старомодность, метод активно применятся для изделий, которые необходимо полностью (включая кромки плат) покрывать защитным материалом. Оборудование имеет простую конструкцию и высокую надежность. Метод который прошел испытание временем.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Защита электроники</h5>
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
                Класичний спосіб нанесення захисних покриттів на друковані плати. Метод дозволяє нанести покриття на всю поверхню виробу, включаючи оброблені кромки, які можуть бути особливо чутливими і вбирати вологу. Застосуються для виробів, що вимагають повного покриття плати. Нанесення захисних покриттів методом занурення - це оптимальний процес для співвідношення ціна / якість. Експлуатується обладнання на спеціальних виробничих ділянках під витяжною вентиляцією з відповідним захистом персоналу. Обладнання не вимагає великих інвестицій і підходить для дрібносерійного і серійного виробництва.</h6>
                <br></br>
                    <Heading {...headingStyle}>Установки вологозахисту зануренням</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надійність в роботі електроніки.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Установки нанесення вологозахисних покриттів методом занурення в ванну - це класичний метод нанесення. Незважаючи на свою старомодність, метод активно застосовується для виробів, які необхідно повністю (включаючи кромки плат) покривати захисним матеріалом. Устаткування має просту конструкцію і високу надійність. Метод який пройшов випробування часом.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Захист електроніки</h5>
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