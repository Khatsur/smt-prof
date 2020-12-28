import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import ServiceBox from '../../../components/box-icon/layout-one'
import {SectionWrap} from './services-area.style'

const ServicesArea = ({sectionTitleStyle, servicBoxStyle}) => {
    const servicesData = useStaticQuery(graphql `
        query SolutionsQueryEn {
            indexResolutionsJson(id: {eq: "solutions-lines-content"}) {
                entitle
                ensubtitle
            }
            allSolutionsJson(sort: {order: ASC, fields: id}, limit: 8) {
                edges {
                    node {
                        
                        id
                        entitle
                        enexcerpt
                        icon {
                            svg {
                                publicURL
                            }
                        }
                    }
                }
            }
        }   
    `);
    const {entitle, ensubtitle} = servicesData.indexResolutionsJson;
    const services = servicesData.allSolutionsJson.edges;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            title={entitle}
                            subtitle={ensubtitle}
                        />
                    </Col>
                </Row>
                <Row>
                    {services.map(service => (
                         <Col xl={3} lg={4} md={6} key={service.node.id}>
                         <ServiceBox
                             {...servicBoxStyle}
                             id={service.node.id}
                             icon={service.node.icon}
                             title={service.node.entitle}
                             desc={service.node.enexcerpt}
                             path={'/'}
                         />
                     </Col>
                    ))}
                </Row>
            </Container>
        </SectionWrap>
    )
}

ServicesArea.defaultProps = {
    sectionTitleStyle: {
        mb: '30px',
        responsive: {
            small: {
                mb: '20px'
            }
        }
    },
    servicBoxStyle: {
        boxStyles: {
            mt: '30px'
        }
    }
}

export default ServicesArea
