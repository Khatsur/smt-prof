import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col} from '../../../../../components/ui/wrapper'
import Heading from '../../../../../components/ui/heading'
import CaseStudyBox from '../../../../../components/box-large-image/layout-two'
import ButtonSection from '../../../../../containers/elements/button/button-smt'

const CaseStudiesArea = (props) => {
    const autoPrinterData = useStaticQuery(graphql `
        query {
            allMachineJson (filter: {title: {regex: "/jm/"}}, sort: {order: ASC, fields: id}) {
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
            allMachineUaJson (filter: {title: {regex: "/jm/"}}, sort: {order: ASC, fields: id}) {
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
                <Heading {...headingStyle}>Многозадачные платформы.</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Установка компонентов в отверстия плат и компонентов сложной формы</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Несмотря на стремительное развитие технологии поверхностного монтажа SMT монтаж электронных компонентов в отверстия печатных плат не умер. Благодаря развитию автомобильной электроники, электромобилей увеличилось количество силовых блоков у наших автомобилях которые требуют крупносерийного производства и высококачественного выводного монтажа. На рынке стали востребованы машины которые могли бы одновременно устанавливать как  SMD  так и компоненты в отверстия на одной платформе. Большие громоздкие машины которые ставили или только радиальные или только аксиальные компоненты ушли в прошлое. Их заменило новое поколение машин для смешанного монтажа. Установщик компонентов в отверстия плат может устанавливаться в линию SMT и устанавливать компоненты в отверстия.  В оборудовании Juki использованы все передовые технологии установки электронных компонентов сложной формы и в отверстия.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART решения для THT</h5>
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
                <Heading {...headingStyle}>Багатозадачні платформи.</Heading>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>Встановлення компонентів в отвори плат і компонентів складної форми</h5>
                    <h6 style={{textAlign: "justify"}}>
                    Незважаючи на стрімкий розвиток технології поверхневого монтажу SMT монтаж електронних компонентів в отвори друкованих плат не помер. Завдяки розвитку автомобільної електроніки та електромобілів збільшилася кількість силових блоків у наших автомобілях, які вимагають багатосерійного виробництва і високоякісного вивідного монтажу. На ринку стали потрібні машини, які могли б одночасно встановлювати, як SMD так і компоненти в отвори на одній платформі. Великі громіздкі машини які ставили або тільки радіальні або тільки аксіальні компоненти пішли в минуле. Їх замінило нове покоління машин для змішаного монтажу. Установник компонентів в отвори плат може встановлюватися в лінію SMT і встановлювати компоненти в отвори і на поверхню плат. В обладнанні Juki використані всі передові технології встановлення електронних компонентів складної форми і в отвори.</h6>
                    <h5 style={{textAlign: "justify", color: "#086AD8"}}>SMART рішення для THT</h5>
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