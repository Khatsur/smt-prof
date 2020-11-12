import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import FeatureBox from '../../../components/box-image/layout-five'
import Heading from '../../../components/ui/heading'
import Anchor from '../../../components/ui/anchor'
import {SectionWrap} from './machines-en.style'

const FeaturesArea = ({headingStyle, linkStyle, featureBoxStyle}) => {
    const featureData = useStaticQuery(graphql `
        query MachinesEn {
            allMachinesJson(sort: {order: ASC, fields: id}, limit: 6) {
                edges {
                    node {
                        
                        entitle
                        enexcerpt
                        icon {
                            img_two {
                                childImageSharp {
                                    fixed(width: 250,  quality: 100) {
                                        ...GatsbyImageSharpFixed_tracedSVG
                                    }
                                }
                            }
                            img_hover {
                                childImageSharp {
                                    fixed(width: 250,  quality: 100) {
                                        ...GatsbyImageSharpFixed_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }      
    `);
    const features = featureData.allMachinesJson.edges
    return (
        <SectionWrap>
            <Container>
                <Row>
                    {features.map(feature => (
                        <Col lg={4} md={6} key={feature.node.id}>
                            <FeatureBox
                                {...featureBoxStyle}
                                imageSrc={feature.node.icon.img_two.childImageSharp}
                                hoverImg={feature.node.icon.img_hover.childImageSharp}
                                title={feature.node.entitle}
                                desc={feature.node.enexcerpt}
                                path="/"
                            />
                        </Col>
                    ))}
                    
                </Row>
                <Row>
                    <Col lg={12}>
                        <Heading {...headingStyle}>Challenges are just opportunities in disguise. <Anchor {...linkStyle} path="/">Take the challenge!</Anchor></Heading>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

FeaturesArea.defaultProps = {
    featureBoxStyle: {
        boxStyle: {
            mt: '30px'
        }
    },
    headingStyle: {
        as: 'h3',
        fontSize: '18px',
        fontweight: 500,
        lineHeight: 1.40,
        color: '#333333',
        mt: '60px',
        textalign: 'center',
        responsive: {
            small: {
                mt: '45px'
            }
        }
    },
    linkStyle: {
        layout: 'underline',
        hover: {
            layout: 2
        }
    }
}

export default FeaturesArea
