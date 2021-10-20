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
            allMachineJson (filter: {id: {regex: "/storage-paste/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {id: {regex: "/storage-paste/"}}, sort: {order: ASC, fields: id}) {
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
                Паяльная паста это смесь мелких частиц припоя с флюсом и дополнительными веществами для получения необходимых физических свойств. Припой в составе пасты  - это сплав, который используется для соединения двух или более металлических деталей. Этот сплав состоит из смеси элементов олова, свинца и серебра. В процессе пайки печатных плат к компонентам схем используются многочисленные методы и различные припои. Для поддержания свойств паяльной пасты необходимо специальное оборудование для поддержания температуры и влажности окружающей среды.</h6>
                <br></br>
                    <Heading {...headingStyle}>Хранение паяльной пасты</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Высокое качество пайки.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Шкафы для хранения паяльной пасты X-Treme используется для безопасного хранения паяльной пасты в контролируемых условиях. Эти условия обычно составляют от 2 ° C до 20 ° C и варьируются в зависимости от марки паяльной пасты. Высокие температуры хранения влияют на паяемость и механические свойства паяльных паст. Срок годности паяльных паст, которые не хранятся в надлежащих условиях, сокращается, что вызывает такие проблемы, как окисление и загрязнение, что приводит к низкому качеству пайки. По этой причине паяльные пасты следует хранить при низких температурах и в условиях подходящей влажности.</h6>
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
                Паяльна паста це суміш дрібних частинок припою з флюсом і додатковими речовинами для отримання необхідних фізичних властивостей. Припій в складі пасти - це сплав, який використовується для з'єднання двох або більше металевих деталей. Цей сплав складається з суміші елементів олова, свинцю і срібла. В процесі пайки друкованих плат до компонентів схем використовуються численні методи і різні припої. Для підтримки властивостей паяльної пасти необхідне спеціальне обладнання для підтримки температури і вологості навколишнього середовища.</h6>
                <br></br>
                    <Heading {...headingStyle}>Зберігання паяльної пасти</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Висока якість паяння.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Шафи для зберігання паяльної пасти X-Treme використовується для безпечного зберігання паяльної пасти в контрольованих умовах. Ці умови зазвичай складають від 2 ° C до 20 ° C і варіюються в залежності від марки паяльної пасти. Високі температури зберігання впливають на паяємість і механічні властивості паяльних паст. Термін придатності паяльних паст, що не зберігаються в належних умовах, скорочується і викликає такі проблеми, як окислення припою і зміну фізичних властивостей. З цієї причини паяльні пасти слід зберігати при низьких температурах і в умовах відповідної вологості.</h6>
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