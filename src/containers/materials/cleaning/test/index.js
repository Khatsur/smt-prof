import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Section, { Row, Col } from "../../../../components/ui/wrapper";
import Heading from "../../../../components/ui/heading";
import CaseStudyBox from "../../../../components/box-large-image/layout-two";
import ButtonSection from "../../../../containers/elements/button/button-smt";

const CaseStudiesArea = (props) => {
    const autoPrinterData = useStaticQuery(graphql `
        query {
            allMaterialJson (filter: {id: {regex: "/zestron-testing/"}}, sort: {order: ASC, fields: id}) {
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
            allMaterialUaJson (filter: {id: {regex: "/zestron-testing/"}}, sort: {order: ASC, fields: id}) {
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
        
    `);
    
    const caseStudies = autoPrinterData.allMaterialJson.edges;
    const caseStudiesUa = autoPrinterData.allMaterialUaJson.edges;
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <Heading {...headingStyle}>Анализ чистоты печатных плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Тестовые наборы</h5>
                    <h6 style={{textAlign: "justify"}}>
                    В  современных реалиях когда компоненты становятся меньше и все теснее прижимаются к печатной плате не достаточно только визуального косметического эффекта чистоты. Визуальная инспекции даже с использованием современных видео микроскопов не сможет определить наличие остатков активаторов флюса на электронных сборках. Наличие активаторов можно легко и недорого определить с помощью тестовых химических наборов. Данная процедура поможет определить эффективность процессов отмывки печатных плат. Ведь очень важно понимать, что процессы отмывки плат после монтажа не такие простые как кажется на первый взгляд. Неправильно организованные технологически процессы отмывки могут сделать много вреда и снизить надежность изделия.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART технологии анализа чистоты от ZESTRON</h5>
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
                <Heading {...headingStyle}>Аналіз чистоти друкованих плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Тестові набори</h5>
                    <h6 style={{textAlign: "justify"}}>
                    У сучасних реаліях коли компоненти стають менше і дедалі тісніше притискаються до друкованої плати мало лише візуального косметичного ефекту чистоти. Візуальна інспекція навіть з використанням сучасних відео мікроскопів не зможе визначити наявність залишків активаторів флюсу на електронних блоках. Наявність активаторів можна легко і недорого визначити за допомогою хімічних тестових наборів. Ця процедура допоможе визначити ефективність процесів відмивання друкованих плат. Адже дуже важливо розуміти, що процеси відмивання плат після монтажу не такі прості, як здається на перший погляд. Неправильно організовані технологічно процеси відмивання можуть зробити багато шкоди та знизити надійність виробу.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART технології аналізу чистоти від ZESTRON</h5>
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