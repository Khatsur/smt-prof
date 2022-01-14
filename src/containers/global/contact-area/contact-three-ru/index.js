import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { MdPhone } from "react-icons/md";
import {Container, Row, Col, Box} from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Text from '../../../../components/ui/text'
import Anchor from '../../../../components/ui/anchor'
import Button from '../../../../components/ui/button'
import {SectionWrap, ContactInfoBox} from './contact.style'
//import Modal from '../../../../components/modal/modal.js'

const ContactArea = ({
    headingStyle, 
    descStyle,
    conactInfoStyles: {
        titleStyle,
        phoneAnchorStyle,
        btnStyle
    } 
}) => {
    const contactQueryData = useStaticQuery(graphql `
        query {
            sectionBg: file(relativePath: {eq: "images/bg/contact-section-bg-2.png"}) {
                childImageSharp {
                  fluid(maxWidth: 1192, maxHeight: 630, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            contactData: site {
                siteMetadata {
                  contact {
                    phone
                  }
                }
            }
        } 
    `);
    const imageData = contactQueryData.sectionBg.childImageSharp.fluid;
    const {phone} = contactQueryData.contactData.siteMetadata.contact
    return (
        <SectionWrap fluid={imageData}>
            <Container>
                <Row alignitems="center">
                    <Col lg={6}>
                        <Box>
                            <Heading {...headingStyle}>Для получения полной информации <span>свяжитесь</span> с нашими специалистами.</Heading>
                            <Text {...descStyle}>Мы доступны полный рабочий день.! <br/></Text>
                        </Box>
                    </Col>
                    <Col lg={6}>
                        <ContactInfoBox>
                            <MdPhone className="icon"/>
                            <Heading {...titleStyle}>ПОЗВОНИТЕ СЕЙЧАС!</Heading>
                            {phone && (
                                <Heading><Anchor path="tel:+380504409925" {...phoneAnchorStyle}>{phone}</Anchor></Heading>
                            )}
                            <Button to="/contact-us-form" {...btnStyle}>Сообщение</Button>
                        </ContactInfoBox>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

ContactArea.propTypes = {
    headingStyle: PropTypes.object
}

ContactArea.defaultProps = {
    headingStyle: {
        as: 'h3',
        position: 'relative',
        pl: '34px',
        fontweight: 600,
        lineHeight: 1.4,
        color: '#fff',
        before: {
            top: '50%',
            width: '4px',
            height: '94%',
            bgColor: 'secondary',
            transform: 'translateY(-50%)'
        }
    },
    descStyle: {
        mt: '15px',
        fontSize: '18px',
        color: '#fff',
        ml: '34px'
    },
    conactInfoStyles: {
        titleStyle: {
            as: 'h6',
            fontSize: '15px',
            color: '#fff',
            letterspacing: '2px',
            texttransform: 'uppercase',
            mb: '10px',
            mt: '10px',
        },
        phoneAnchorStyle: {
            color: 'secondary',
            hover: {
                layout: 2,
                color: 'secondary'
            }
        },
        btnStyle: {
            mt: '20px',
            skin: 'light',
            minwidth: '230px',
            color: 'primary',
            hover: {
                bgColor: 'secondary'
            }
        }
    }
}

export default ContactArea;