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
            allMachineJson (filter: {id: {regex: "/storage-ism/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/storage-ism/"}}, sort: {order: ASC, fields: id}) {
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
                Системы специально разработанные для достижения оптимальной производительности. Интеллектуальное и эффективное управление хранением и комплектацией рекомендуется для многономенклатурного производства при частой смене продуктов. Программное обеспечение, гарантирует комплексное управление хранением. Автоматизированная система позволяет быстро вставлять и извлекать катушки и лотки, хранящиеся в стандартной упаковке.</h6>
                <br></br>
                    <Heading {...headingStyle}>Оптимизация комплектования производства.</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Максимальная эффективность</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Системы управления хранением электронных компонентов предоставляют интеллектуальное и гибкое решение для хранения и помогают полностью сфокусироваться на производстве. Оборудование позволяет хранить до 3644 катушек с компонентами и автоматически контролировать, регистрировать поступление и выдачу электронных компонентов. Автоматизированные склады имеют гибкую конфигурацию и могут комплектоваться различным дополнительным оборудованием: поддержание влажности и температуры внутри камеры, рентгеновская система подсчета количества компонентов в катушках и др. Возможность последующего наращивания оборудования и конфигурации под специфические требования Заказчика.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Бесперебойная работа производства</h5>
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
                Системи спеціально розроблені для досягнення оптимальної продуктивності. Інтелектуальне і ефективне керування зберіганням і комплектацією рекомендується для багатономенклатурного виробництва при частій зміні продуктів. Програмне забезпечення, гарантує комплексне управління зберіганням. Автоматизована система дозволяє швидко вставляти та виймати котушки і лотки, що зберігаються в стандартній упаковці.</h6>
                <br></br>
                    <Heading {...headingStyle}>Оптимізація комплектування виробництва.</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Максимальна ефективність</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Настільні дискові пристрої для розділення друкованих плат застосовують для попередньо скрайбуванних групових заготовок друкованих плат (палет). Найпростіші пристрої з ручною подачею плат. Установки для розділення панелей з електричним приводом і програмуванням зазору між ножами.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Безперебійна робота виробництва</h5>
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