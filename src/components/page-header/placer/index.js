import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import {PageHeaderWrap} from './page-header.style'

const PageHeader = ({sectionStyle, titleStyle, descStyle, lang, titletext}) => {
    const PageHeaderData = useStaticQuery(graphql `
        query PlacerPageHeaderQuery {
            aboutUsJson(id: {eq: "about-placer-data"}) {
                title
                desc
                uatitle
                uadesc
                bg_image {
                    childImageSharp {
                      fluid(maxWidth: 1920, maxHeight: 570, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        presentationWidth
                        presentationHeight
                      }
                    }
                }
            }
        } 
    `);
    const {title, desc, uatitle, uadesc, bg_image} = PageHeaderData.aboutUsJson
    const imageData = bg_image.childImageSharp.fluid;
    if (lang === "ru") {
        return (
            <PageHeaderWrap fluid={imageData}>
                <Container>
                    <Row textalign="center">
                        <Col lg={8} ml="auto" mr="auto">
                            {title && <Heading {...titleStyle}>{title }</Heading>}
                            {desc && <Heading {...descStyle}>{desc}</Heading>}
                        </Col>
                    </Row>
                </Container>
            </PageHeaderWrap>
        )
    } else if (lang === "ua") {
        return (
            <PageHeaderWrap fluid={imageData}>
                <Container>
                    <Row textalign="center">
                        <Col lg={8} ml="auto" mr="auto">
                            {uatitle && <Heading {...titleStyle}>{uatitle }</Heading>}
                            {uadesc && <Heading {...descStyle}>{uadesc}</Heading>}
                        </Col>
                    </Row>
                </Container>
            </PageHeaderWrap>
        )
    }
}

PageHeader.propTypes = {
    descStyle: PropTypes.object,
    titleStyle: PropTypes.object
}

PageHeader.defaultProps = {
    titleStyle: {
        as: 'h1',
        color: "#fff",
        mb: '15px'
    },
    descStyle: {
        as: "h5",
        color: "#fff",
        fontweight: 400
    }
}

export default PageHeader;