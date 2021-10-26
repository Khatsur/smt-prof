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
            allMachineJson (filter: {id: {regex: "/storage-dry/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/storage-dry/"}}, sort: {order: ASC, fields: id}) {
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
                Шкафы сухого хранения для электронных компонентов обеспечивают оптимальные условия  для защиты от влаги различных изделий и материалов, применяемых в производстве электроники. Конструкция оборудования обеспечивает уровень относительной влажности до 0,5%, имеет антистатическое исполнение (ESD).  Оборудование сухого хранения X-Treme соответствуют стандартам IPC/JEDEC-J-STD-033B.1. Грамотно организованная процедура обращения з компонентами на производственном участке, позволяет снизить уровень брака и затраты на производство изделия в целом.</h6>
                <br></br>
                    <Heading {...headingStyle}>Сухое хранение электронных компонентов</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Снижение количества дефектов при производстве.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Бюджетная серия шкафы сухого хранения объемом камеры до 900 л. Применяются для увеличения срока хранения электронных компонентов и печатных плат. Оборудование обеспечивает поддержание относительной влажности до 0,5%RH. Для длительного хранения рекомендуется применять азотную (N2) среду. Оборудование обеспечивает восстановление влажности внутри камеры за короткое время. Дополнительно оборудование может дооснащаться системой сушки для устранения влаги в корпусах электронных компонентов.</h6>
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
                Шафи сухого зберігання для електронних компонентів забезпечують оптимальні умови для захисту від вологи різних виробів і матеріалів, що застосовуються у виробництві електроніки. Конструкція обладнання забезпечує рівень відносної вологості до 0,5%, має антистатичне виконання (ESD). Устаткування сухого зберігання X-Treme відповідають стандартам IPC / JEDEC-J-STD-033B.1. Грамотно організована процедура поводження з компонентами на виробничій дільниці, дозволяє знизити рівень браку і витрати на виробництво вироби в цілому.</h6>
                <br></br>
                    <Heading {...headingStyle}>Сухе зберігання електронних компонентів</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Зниження кількості дефектів при виробництві.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Бюджетна серія шафи сухого зберігання об'ємом камери до 900 л. Застосовуються для збільшення терміну зберігання електронних компонентів і друкованих плат. Обладнання забезпечує підтримку відносної вологості до 0,5% RH. Для тривалого зберігання рекомендується застосовувати азотне (N2) середовище. Устаткування забезпечує відновлення вологості всередині камери за короткий час. Додатково обладнання може дооснащаться системою сушіння для усунення вологи в корпусах електронних компонентів та друкованих платах.</h6>
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