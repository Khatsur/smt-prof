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
            allMachineJson (filter: {id: {regex: "/pallete/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/pallete/"}}, sort: {order: ASC, fields: id}) {
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
                Техническое обслуживание оборудование очень важна и необходимая процедура для ритмичного функционирования производства. И такие обычные мероприятия, как мойка оснастки и частей оборудования для пайки могут повлиять на качество проведения ТО. Механизация процессов мойки оснастки не требует больших инвестиций, но может улучшить качество и снизить время на проведение не всегда приятных операций.</h6>
                <br></br>
                    <Heading {...headingStyle}>Оборудование для мойки оснастки</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Улучшение культуры производства.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Оборудование применятся для отмывки частей оборудования для пайки ( машины пайки волной припоя, паяльные печи и др.) и технологической оснастки ( паллеты, каретки) от тяжелых загрязнений. Оборудование может работать, как с жидкостями на водной основе, так и с моющими жидкостями на базе растворителей. Машины конструктивно состоят из трех камер: мойка, ополаскивание, сушка. Перемещение осуществляется вручную оператором. В качестве механического воздействия применятся барботаж или струю.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Техническое обслуживание</h5>
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
                Технічне обслуговування обладнання дуже важлива і необхідна процедура для ритмічного функціонування виробництва. І такі звичайні заходи, як миття оснащення і частин обладнання для паяння можуть вплинути на якість проведення ТО. Механізація процесів миття оснащення не вимагає великих інвестицій, але може поліпшити якість і знизити час на проведення не завжди приємних операцій.</h6>
                <br></br>
                    <Heading {...headingStyle}>Устаткування для миття оснастки</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Поліпшення культури виробництва.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Обладнання застосовується для відмивання частин обладнання для паяння (машини паяння хвилею припою, паяльні печі та ін.) І технологічної оснастки (палети, каретки) від важких забруднень. Обладнання може працювати, як з рідинами на водній основі, так і з миючими рідинами на базі розчинників. Машини конструктивно складаються з трьох камер: миття, ополіскування, сушіння. Переміщення здійснюється вручну оператором. Як механічний вплив застосовують барботаж або струмінь.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Технічне обслуговування</h5>
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