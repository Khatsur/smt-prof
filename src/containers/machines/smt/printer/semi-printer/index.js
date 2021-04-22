import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../../components/ui/wrapper'
import Heading from '../../../../../components/ui/heading'
import CaseStudyBox from '../../../../../components/box-large-image/layout-two'
import ChangLang from '../../../../../containers/elements/tabs/changlang.js'
import {PagePath} from '../../../../../components/pagepath'

const CaseStudiesArea = (props) => {
    const semiPrinterData = useStaticQuery(graphql `
        query {
            allSemiPrinterJson (sort: {order: ASC, fields: id}) {
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
            allSemiPrinterUaJson (sort: {order: ASC, fields: id}) {
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
        
    `)
    
    const caseStudies = semiPrinterData.allSemiPrinterJson.edges;
    const caseStudiesUa = semiPrinterData.allSemiPrinterUaJson.edges;

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

            
        </Section>

        
    )
} else if (props.language === "ua") {
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