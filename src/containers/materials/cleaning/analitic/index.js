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
            allMaterialJson (filter: {id: {regex: "/zestron-analitic/"}}, sort: {order: ASC, fields: id}) {
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
            allMaterialUaJson (filter: {id: {regex: "/zestron-analitic/"}}, sort: {order: ASC, fields: id}) {
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
                <Heading {...headingStyle}>Методы контроля качества отмывки плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Контроль концентрации отмывочной жидкости</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Отмывка печатных плат не такой простой процесс, как может показаться на первый взгляд. Эффективность отмывки зависит  от правильности организации и постоянного мониторинга процесса. Важным условием для обеспечения стабильно хороших результатов отмывки является поддержание заданной концентрации отмывочной жидкости, которую необходимо постоянно отслеживать. Такую процедуру можно осуществить, как автоматизировано, так и с помощью простого набора. Методы контроля качества отмывки плат не должны ограничиваться только визуальной проверкой. Необходимо проводить выборочный тест на наличие остатков активаторов флюсов.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART технологии очистки от ZESTRON</h5>
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
                <Heading {...headingStyle}>Методи контролю якості відмивання плат</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Контроль концентрації миючого розчину</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Відмивання друкованих плат не такий простий процес, як може здатися на перший погляд. Ефективність відмивання залежить від правильності організації та постійного моніторингу процесу. Важливою умовою для забезпечення стабільно хороших результатів відмивання є підтримання заданої концентрації миючого розчину, яку необхідно постійно відстежувати. Таку процедуру можна здійснити як автоматизовано, так і за допомогою простого набору. Методи контролю якості відмивання плат не повинні обмежуватися лише візуальною перевіркою. Необхідно проводити вибірковий тест на наявність залишків активаторів флюсів.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART технології очищення від ZESTRON</h5>
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