import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../../components/ui/wrapper'
import Heading from '../../../../../components/ui/heading'
import CaseStudyBox from '../../../../../components/box-large-image/layout-two'
import PbtPrinter from '../pbt-printer'
import PbtPrinterUa from '../pbt-printer-ua'


const CaseStudiesArea = (props) => {
    const smallPrinterData = useStaticQuery(graphql `
        query {
            allMachineJson (filter: {id: {regex: "/printer-spide/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/printer-spide/"}}, sort: {order: ASC, fields: id}) {
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
    `
    )

    
    
    const smallPrinter = smallPrinterData.allMachineJson.edges;
    const smallPrinterUa = smallPrinterData.allMachineUaJson.edges;
    //const pbtPrinter = pbtPrinterData.allMachineJson.edges;
    //const pbtPrinterUa = pbtPrinterData.allMachineUaJson.edges;

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                    <Heading {...headingStyle}>Нанесение паяльной пасты через трафарет</Heading>
                    <h6 style={{textAlign: "justify"}}>Оборудование предназначено для ручного нанесения паяльной пасты через металлический трафарет на контактные площадки печатных плат – принтеры для нанесения паяльной пасты. Применяется в условиях мелкосерийного производства монтажа печатных плат для технологии поверхностного монтажа SMT. Принтеры для нанесения паяльной пасты повышают производительности технологических процессов нанесения материалов на печатные платы для технологии поверхностного монтажа SMT.</h6>
                </Col>
            </Row>
            <br></br>
            <Row>
                {smallPrinter.map(smallPrinter => (
                    
                    <Col lg={4} md={6} mb="30px" key={smallPrinter.node.id}>
                        <CaseStudyBox
                            {...caseStudyStyles}
                            imageSrc={smallPrinter.node.image.childImageSharp}
                            title={smallPrinter.node.bigtitle}
                            category={smallPrinter.node.category}
                            desc={smallPrinter.node.excerpt}
                            path={`/${props.path}/${smallPrinter.node.fields.slug}`}
                            btnText="Подробно"
                            
                        />
                        
                    </Col>
                ))}
            </Row>

            <PbtPrinter />
        </Section>

        
    )
} else if (props.language === "uk") {
    return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                    <Heading {...headingStyle}>Нанесення паяльної пасти через трафарет</Heading>
                    <h6 style={{textAlign: "justify"}}>Устаткування призначене для ручного нанесення паяльної пасти через металевий трафарет на контактні площадки друкованих плат - принтери для нанесення паяльної пасти. Застосовується в умовах дрібносерійного виробництва монтажу друкованих плат для технології поверхневого монтажу SMT. Принтери для нанесення паяльної пасти підвищують продуктивності технологічних процесів нанесення матеріалів на друковані плати для технології поверхневого монтажу SMT.</h6>
                </Col>
            </Row>
            <br></br>
            <Row>
                {smallPrinterUa.map(smallPrinterUa => (
                    <Col lg={4} md={6} mb="30px" key={smallPrinterUa.node.id}>
                        <CaseStudyBox
                            {...caseStudyStyles}
                            imageSrc={smallPrinterUa.node.image.childImageSharp}
                            title={smallPrinterUa.node.bigtitle}
                            category={smallPrinterUa.node.category}
                            desc={smallPrinterUa.node.excerpt}
                            path={`/${props.path}/${smallPrinterUa.node.fields.slug}`}
                            btnText="Докладно"
                        />
                    </Col>
                ))}
            </Row>
            <PbtPrinterUa />
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