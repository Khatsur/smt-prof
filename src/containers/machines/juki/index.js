import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import ServiceBox from '../../../components/box-icon/layout-one'
import {PagePath} from '../../../components/pagepath'
import {SectionWrap} from './services-area.style'

const ServicesArea = ({sectionTitleStyle, servicBoxStyle}) => {
    const servicesData = useStaticQuery(graphql `
        query ResolutionsServicesQuery {
            indexResolutionsJson(id: {eq: "resolutions-services-content"}) {
                title
                subtitle
            }
            allJukiJson(sort: {order: ASC, fields: id}, limit: 8) {
                edges {
                    node {
                        id
                        path
                        title
                        excerpt
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
    const {title, subtitle} = servicesData.indexResolutionsJson;
    const services = servicesData.allJukiJson.edges;
    let prodpath = "";
    for (let i = 0; i < PagePath.length; i++) {
        
    }
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            title={title}
                            subtitle={subtitle}
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
                             title={service.node.title}
                             desc={service.node.excerpt}
                             path={`/${service.node.path}`}

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
