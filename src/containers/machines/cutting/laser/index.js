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
            allMachineJson (filter: {id: {regex: "/cutting-laser/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/cutting-laser/"}}, sort: {order: ASC, fields: id}) {
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
                Разделение групповых заготовок печатных плат лазером обеспечивает чистый процесс резки без пыли и не создавая дополнительного механического напряжения на смонтированные компоненты. По сравнению с традиционным механическим разделением фрезой, лазерная резка повышает производительность процесса на 70%  и уменьшает уровень брака. Применение новых материалов для монтажа электронных компонентов (гибкие печатные платы и др.) делают оборудование для разделения печатных плат лазером незаменимой инвестицией для динамично развивающегося современного предприятия.</h6>
                <br></br>
                    <Heading {...headingStyle}>Разделение печатных плат лазером</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надежность в работе электроники.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Лазерная резка – это современный метод разделения групповых заготовок печатных плат. Разделение групповых панелей печатных плат лазером обеспечивает максимальную гибкость для разработчиков печатных плат. Оборудование не имеет ограничений таких, какие имеют механическое оборудование для разделения групповых заготовок (роутери, штампы и др.), в связи с  отсутствием механического взаимодействия с печатными платами. Сокращение затрат и сроков на разработку новых изделий. Процесс рекомендуется для электронных плат, которые имеют сложный контур, изделия на гибких платах. Такие машины незаменимы при производстве электроники для современной портативной техники, умной одежды, смартфонов и других гаджетов.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надежность электроники</h5>
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
                Розділення групових заготовок друкованих плат лазером забезпечує чистий процес різання без пилу і не створюючи додаткових механічних напружень на змонтовані компоненти. У порівнянні з традиційним механічним поділом фрезою, лазерне різання підвищує продуктивність процесу на 70% і зменшує рівень дефектів. Застосування нових матеріалів для монтажу електронних компонентів (гнучкі друковані плати та ін.) роблять обладнання для розділення друкованих плат лазером незамінною інвестицією для сучасного підприємства, що динамічно розвивається.</h6>
                <br></br>
                    <Heading {...headingStyle}>Розділення друкованих плат лазером</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Якісне розділення друкованих плат .</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Лазерне різання - це сучасний метод розділення групових заготовок друкованих плат. Розділення групових панелей друкованих плат лазером забезпечує максимальну гнучкість для розробників друкованих плат. Обладнання не має обмежень таких, які мають механічне обладнання для поділу групових заготовок (роутери, штампи та ін.), В зв'язку з відсутністю механічного взаємодії з друкованими платами. Скорочення витрат і термінів на розробку нових виробів. Процес рекомендується для електронних плат, які мають складний контур, вироби на гнучких платах. Машини незамінні при виробництві електроніки для сучасної портативної техніки, розумного одягу, смартфонів та інших гаджетів.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Надійність електроніки</h5>
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