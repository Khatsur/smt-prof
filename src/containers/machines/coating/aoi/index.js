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
            allMachineJson (filter: {id: {regex: "/pva-aoi/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/pva-aoi/"}}, sort: {order: ASC, fields: id}) {
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
                Оборудование для автоматической оптической инспекции качества нанесения защитных покрытий на собранные электронные платы не только отбраковывает дефектные платы. Инспекция во время производственного процесса обеспечивает постоянное отслеживание продуктов, позволяет полностью задокументировать данные по изделию  и обеспечивает отслеживаемость продукции.</h6>
                <br></br>
                    <Heading {...headingStyle}>Инспекция качества нанесения защитных покрытий</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надежность в работе электроники.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Автоматическая оптическая инспекция нанесения защитных покрытий применяется для оценки качества нанесения лака на собранные печатные платы. Оборудование предназначено для работы в производственной линии и работает с УФ-флуоресцентными материалами. Машина проверяет целостность нанесения защитных покрытый на платы.</h6>
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
                Обладнання для автоматичної оптичної інспекції якості нанесення захисних покриттів на складені електронні плати не лише не бракує дефектні плати. Інспекція під час виробничого процесу забезпечує постійне відстеження продуктів, дозволяє повністю задокументувати дані виробу та забезпечує відстежуваність продукції.</h6>
                <br></br>
                    <Heading {...headingStyle}>Інспекція якості нанесення захисних покриттів</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надійність в роботі електроніки.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Автоматична оптична інспекція нанесення захисних покриттів застосовується з метою оцінки якості нанесення лаку на зібрані друковані плати. Обладнання призначене для роботи у виробничій лінії та працює з УФ-флуоресцентними матеріалами. Машина перевіряє цілісність нанесення захисних покриттів на плати.</h6>
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