import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../../components/ui/wrapper'
import Heading from '../../../../../components/ui/heading'
import CaseStudyBox from '../../../../../components/box-large-image/layout-two'
import ButtonSection from '../../../../elements/button/button-smt'

const CaseStudiesArea = (props) => {
    const autoPrinterData = useStaticQuery(graphql `
        query {
            allMaterialJson (filter: {id: {regex: "/soldering-preforms/"}}, sort: {order: ASC, fields: id}) {
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
            allMaterialUaJson (filter: {id: {regex: "/soldering-preforms/"}}, sort: {order: ASC, fields: id}) {
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
    const brochure = "";

    const {sectionStyle, headingStyle, caseStudyStyles} = props;
   
    
    if (props.language === "ru") 
    {return (
        <Section {...sectionStyle}>
            <Row>
                <Col>
                <Heading {...headingStyle}>Припой в специальном исполнении</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Припой в виде фольги преформ.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Припой в фольге изготавливается для стандартных сплавов в виде ленты, листов и преформ. Данный материал имеет различное применение для монтажа плат. Металлическая фольга от Indium имеет высокую чистоту материала, что требует особых условий хранения припоя в данном виде. Материал хранится в оригинальной упаковке от производителя при относительной влажности ниже 55%RH и температуре ниже 22°C. Рекомендуется хранить фольгу в специальных шкафах сухого хранения в инертной атмосфере (N2).</h6>
                    <h6 style={{textAlign: "justify"}}>
                    Припой в преформах имеет широкое применение в процессах монтажа, где необходимо точное количество припоя. Представляют собой дозированный припой определенных размеров определенного допуска. Преформы имеют стандартную форму: прямоугольник, треугольник, овал, круг, рамка, кольцо. Преформы могут упаковываться в стандартную ленту и устанавливаться на машинах для установки SMD в автоматическом режиме. Часто применяется для установки дополнительного количества припоя для монтажа компонентов монтируемых в отверстия печатных плат на паяльную пасту (технология PiP).</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Технология машинной пайки</h5>
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
                <Heading {...headingStyle}>Припій у спеціальному виконанні</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Припій у фользі та преформах.</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Припій у фользі виготовляється для стандартних сплавів у вигляді стрічки, листів та преформ. Цей матеріал має різноманітне застосування для монтажу плат. Металева фольга від Indium має високу чистоту матеріалу, що потребує особливих умов зберігання припою у цьому вигляді. Матеріал зберігається в оригінальній упаковці від виробника при відносній вологості нижче 55%RH та температурі нижче 22°C. Рекомендується зберігати фольгу у спеціальних шафах сухого зберігання в інертній атмосфері (N2).</h6>
                    <h6 style={{textAlign: "justify"}}>
                    Припій у преформах має широке застосування у процесах монтажу, де потрібна точна кількість припою. Преформа є дозованим припоєм певних розмірів певного допуску. Преформи мають стандартну форму: прямокутник, трикутник, овал, коло, рамка, кільце. Преформи можуть упаковуватись у стандартну стрічку та встановлюватися на машинах для встановлення SMD в автоматичному режимі. Часто застосовується для встановлення додаткової кількості припою для монтажу компонентів, що монтуються в отвори друкованих плат на паяльну пасту (технологія PiP).</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Технологія машинного паяння</h5>
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