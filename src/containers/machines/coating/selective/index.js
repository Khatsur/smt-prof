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
            allMachineJson (filter: {id: {regex: "/pva-selective/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/pva-selective/"}}, sort: {order: ASC, fields: id}) {
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
                Селективное  нанесение защитных покрытий – это современный метод обеспечения влагозащиты печатных плат, который набирает все большей популярности. Установка селективной влагозащиты позволяет покрывать, как целую плату, так и части плати и отдельные компоненты с высокой точностью. Подходит для всех типов защитных покрытий: влагозащитные акриловые покрытия, влагозащитные силиконовые покрытия, влагозащитные покрытие ультрафиолетового отверждения, влагозащитные уретановые покрытия. Оборудование для селективного нанесения влагозащитных покрытий делает покрытие высокого качества за счет поддержания нужной вязкости материала. Данное оборудование это хорошая инвестиция в производство, которая позвоялет снизить расходы за счет уменьшение рабочих мест на вредных участка производства.</h6>
                <br></br>
                    <Heading {...headingStyle}>Оборудование для селективного нанесения защитных покрытий</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надежность в работе электроники.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Установки селективной влагозащиты печатных плат. Конструкция машин представляет собой робот с перемещением инструмента по осям X,Y,Z. Модульная конструкция позволяет применят различные инструменты (головки) для нанесения защитных покрытий и оптимально сконфигурировать машину под конкретное изделие без дополнительных инвестиций. Оптимальное решение для контрактных производителей электроники.</h6>
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
                Селективне нанесення захисних покриттів - це сучасний метод забезпечення вологозахисту друкованих плат, який набирає все більшої популярності. Машина селективного нанесення захисних покриттів дозволяє покривати, як цілу плату, так і частини плати і окремі компоненти з високою точністю. Підходить для всіх типів захисних покриттів: захисні акрилові покриття, захисні силіконові покриття, захисні покриття ультрафіолетового затвердіння, захисні уретанові покриття. Устаткування для селективного нанесення вологозахисних покриттів робить покриття високої якості за рахунок підтримки потрібної в'язкості матеріалу. Дане обладнання це хороша інвестиція у виробництво, яка дозволяє знизити витрати за рахунок зменшення робочих місць на шкідливих ділянки виробництва.</h6>
                <br></br>
                    <Heading {...headingStyle}>Обладнання для селективного нанесення захисних покриттів</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надійність в роботі електроніки.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Установки селективної вологозахисту друкованих плат. Конструкція машин є робот з переміщенням інструменту по осях X, Y, Z. Модульна конструкція дозволяє застосовувати різні інструменти (головки, клапани) для нанесення захисних покриттів і оптимально налаштувати машину під конкретний виріб без додаткових інвестицій. Оптимальне рішення для контрактних виробників електроніки.</h6>
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