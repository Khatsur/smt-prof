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
            allMachineJson (filter: {id: {regex: "/spray/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/spray/"}}, sort: {order: ASC, fields: id}) {
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
                Нанесение защитных покрытий применятся сейчас не только в военной электронике. Это процесс становиться очень популярным в последнее время благодаря росту автомобильной отрасли. Самый простои и инвестиционно привлекательный метод – это ручное нанесение покрытий методом распыления. В качестве распыляющего инструмента используются стандартные головки компании PVA. Можно подобрать головки с широкой или узкой полосой нанесения. Головки для микродозирования или для нанесения защитных покрытий под компоненты. Рабочее место необходимо оснащать с учетом санитарных норм по работе с соответствующими материалами. </h6>
                <br></br>
                    <Heading {...headingStyle}>Оборудование для ручного нанесения защитных покрытий</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надежность в работе электроники.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Оборудование для нанесения влагозащитных покрытий на печатные платы начального уровня рекомендуется для мелкосерийного и серийного производства. Оборудование может покрывать  целую плату методом распыления или отдельные места и компоненты на плате, предварительно закрыв места где не нужно покрытие. Оборудование существенно расширяет возможности предприятия по выпуску новых изделий для новых рынков при минимальных инвестициях.</h6>
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
                Нанесення захисних покриттів застосуються зараз не тільки у військовій електроніці. Це процес ставати дуже популярним останнім часом завдяки зростанню автомобільної галузі. Самий простий та інвестиційно привабливий метод - це ручне нанесення покриттів методом розпилення. У якості розпилювального інструменту використовуються стандартні головки компанії PVA. Можна підібрати головки з широкою або вузькою смугою нанесення. Головки для мікродозування або для нанесення захисних покриттів під компоненти. Робоче місце необхідно оснащувати з урахуванням санітарних норм по роботі з відповідними матеріалами.</h6>
                <br></br>
                    <Heading {...headingStyle}>Обладнання для ручного нанесення захисних покриттів</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надійність в роботі електроніки.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Обладнання для нанесення влагозащитних покриттів на друковані плати початкового рівня рекомендується для дрібносерійного і серійного виробництва. Устаткування може покривати цілу плату методом розпилення або окремі місця і компоненти на платі, попередньо закривши місця де не потрібно покриття. Устаткування істотно розширює можливості підприємства з випуску нових виробів для нових ринків при мінімальних інвестиціях.</h6>
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