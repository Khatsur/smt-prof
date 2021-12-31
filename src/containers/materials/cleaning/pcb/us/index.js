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
            allMaterialJson (filter: {id: {regex: "/zestron-pcb-us|vigon-efm/"}}, sort: {order: ASC, fields: id}) {
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
            allMaterialUaJson (filter: {id: {regex: "/zestron-pcb-us|vigon-efm/"}}, sort: {order: ASC, fields: id}) {
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
    const brochure = "https://drive.google.com/file/d/1fyiZShg1Djwc7uOD1tD1KxCyLjN0paTg/view?usp=sharing";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <Heading {...headingStyle}>SMART оборудование для конвекционной пайки.</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Конвейерные печи для работы в линии SMT</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Промышленные печи оплавления паяльной пасты серии RS применяются в условиях серийного и крупносерийного производств. Печи специально спроектированы для обеспечения: максимальной передачи тепла, широкого диапазона процесса пайки и постоянного отслеживания технологических параметров. Так комбинация передовых технологий пайки, простота в эксплуатации и техническом обслуживании, обеспечивает печам  лидирующее место на рынке печей для изделий с высокими требованиями в эксплуатации.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART технологии пайки</h5>
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
                <Heading {...headingStyle}>SMART обладнання для конвекційного паяння</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Конвеєрні печі для роботи в лінії SMT</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Промислові печі оплавлення паяльної пасти серії RS застосовуються в умовах серійного і багатосерійного виробництв. Печі спеціально спроектовані для забезпечення: максимальної передачі тепла, широкого діапазону процесу пайки і постійного відстеження технологічних параметрів. Так комбінація передових технологій паяння, простота в експлуатації і технічному обслуговуванні, забезпечує печам лідируюче місце на ринку для виробів з високими вимогами в експлуатації.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART технології паяння</h5>
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