import React from 'react'
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import parse from 'html-react-parser'
import { Container } from 'react-bootstrap'
import Logo from '../../../../assets/images/logo/dark-logo-160x48.png'
import gplayImage from '../../../../assets//images/icons/aeroland-button-google-play.jpg'
import appImage from '../../../../assets//images/icons/aeroland-button-app-store.jpg'
import { Row, Col } from '../../../../components/ui/wrapper'
import Text from '../../../../components/ui/text'
import Anchor from '../../../../components/ui/anchor'
import Button from '../../../../components/ui/button'
import Heading from '../../../../components/ui/heading'
import Social, { SocialLink } from '../../../../components/ui/social'
import {
    FooterWrap,
    FooterTop,
    FooterWidget,
    LogoWidget,
    TextWidget,
    FooterWidgetList,
    FooterBottom
} from './footer.style'

const Footer = ({ copyrightStyle, ...props }) => {
    const siteInfo = useStaticQuery(graphql`
        query FooterSiteQuery {
            site {
                siteMetadata {
                    copyright
                    contact {
                        phone
                        email
                        address
                        website
                    }
                    social {
                        facebook
                        twitter
                        instagram
                        linkedin
                    }
                }
            }
        }      
    `)
    const { phone, email, address, website } = siteInfo.site.siteMetadata.contact;
    const { copyright } = siteInfo.site.siteMetadata;
    const { facebook, twitter, instagram, linkedin } = siteInfo.site.siteMetadata.social;
    return (
        <FooterWrap {...props}>
            <FooterTop>
                <Container>
                    <Row>
                        <Col lg={4} sm={6}>
                            <FooterWidget responsive={{ medium: { mb: '31px' } }}>
                                <LogoWidget>
                                    <img src={Logo} alt="Logo" style={{width: "45%"}}/>
                                </LogoWidget>
                                <TextWidget>
                                    {address && <Text mb="10px">{address}</Text>}
                                    {email && <Text mb="10px">

                                        <Anchor path={`mailto:${email}`} color="textColor" hoverstyle="2">{email}</Anchor>

                                        </Text>}
                                    {phone && <Text mb="10px">
                                        
                                        <Anchor path={`tel:${phone}`} fontWeight="800" color="#333" hoverstyle="2">{phone}</Anchor>
                                        
                                        </Text>}
                                    {website && <Text mb="10px">
                                        
                                        <Anchor path={website} hoverstyle="2">{website}</Anchor>
                                        
                                        </Text>}
                                </TextWidget>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget responsive={{ medium: { mb: '31px' } }}>
                                <Heading as="h6" mt="-3px" mb="20px">JUKI</Heading>
                                <FooterWidgetList>
                                    <li><Anchor path="/оборудование-для-монтажа/поверхностный-монтаж/автомат-поверхностного-монтажа" color="textColor" hoverstyle="2">Установщики SMT</Anchor></li>
                                    <li><Anchor path="/оборудование-для-монтажа/поверхностный-монтаж/принтеры-паяльной-пасты/автоматический-принтер-пасты" color="textColor" hoverstyle="2">Принтеры</Anchor></li>
                                    <li><Anchor path="/оборудование-для-монтажа/поверхностный-монтаж/печи-паяльные/конвекционная-пайка" color="textColor" hoverstyle="2">Паяльные печи</Anchor></li>
                                    <li><Anchor path="/оборудование-для-монтажа/поверхностный-монтаж/автоматическая-оптическая-инспекция/системы-автоматической-оптической-инспекции" color="textColor" hoverstyle="2">Инспекция</Anchor></li>
                                    <li><Anchor path="/оборудование-для-монтажа/автоматизированные-системы-хранения" color="textColor" hoverstyle="2">Склады</Anchor></li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget responsive={{ medium: { mb: '27px' } }}>
                                <Heading as="h6" mt="-3px" mb="20px">Производство</Heading>
                                <FooterWidgetList>
                                    <li><Anchor path="/комплексные-решения/линия-поверхностного-монтажа/линия-smt" color="textColor" hoverstyle="2">Прототипирование</Anchor></li>
                                    <li><Anchor path="/комплексные-решения/линия-поверхностного-монтажа/линия-smd-монтажа" color="textColor" hoverstyle="2">Мелкосерийное</Anchor></li>
                                    <li><Anchor path="/комплексные-решения/линия-поверхностного-монтажа/smt-линия-монтажа-плат" color="textColor" hoverstyle="2">Серийное</Anchor></li>
                                    <li><Anchor path="/комплексные-решения/линия-поверхностного-монтажа/линия-smt-industry-40" color="textColor" hoverstyle="2">Industry 4.0</Anchor></li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget>
                                <Heading as="h6" mt="-3px" mb="20px">Поддержка</Heading>
                                <FooterWidgetList>
                                    <li><Anchor path="/техническое-обслуживание/пуско-наладка" color="textColor" hoverstyle="2">Запуск оборудования</Anchor></li>
                                    <li><Anchor path="/техническое-обслуживание/техническое-обучение" color="textColor" hoverstyle="2">Обучение специалистов</Anchor></li>
                                    <li><Anchor path="/" color="textColor" hoverstyle="2">Удаленная поддержка</Anchor></li>
                                    
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget mt='50px' responsive={{ small: { mt: '34px' } }}>
                                <FooterWidgetList>
                                    <li>
                                        <Button path="/" to="/" imgbutton="true" shadow="true"><img src={gplayImage} alt="Google Play" /></Button>
                                    </li>
                                    <li>
                                        <Button path="/" to="/" imgbutton="true" shadow="true"><img src={appImage} alt="App Store" /></Button>
                                    </li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                    </Row>
                </Container>
            </FooterTop>
            <FooterBottom>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-left">
                            {copyright && <Text {...copyrightStyle}>&copy; {new Date().getFullYear()} {parse(copyright)}</Text>}
                        </Col>
                        <Col md={6} className="text-center text-md-right">
                            <Social space="8px" tooltip={true} shape="rounded" varient="outlined">
                                {twitter && (
                                    <SocialLink
                                        path={twitter}
                                        title="Twitter">
                                        <TiSocialTwitter />
                                    </SocialLink>
                                )}
                                {facebook && (
                                    <SocialLink
                                        path={facebook}
                                        title="Facebook">
                                        <TiSocialFacebook />
                                    </SocialLink>
                                )}
                                {instagram && (
                                    <SocialLink
                                        path={instagram}
                                        title="Instagram">
                                        <TiSocialInstagram />
                                    </SocialLink>
                                )}
                                {linkedin && (
                                    <SocialLink
                                        path={linkedin}
                                        title="Linkedin">
                                        <TiSocialLinkedin />
                                    </SocialLink>
                                )}
                            </Social>
                        </Col>
                    </Row>
                </Container>
            </FooterBottom>
        </FooterWrap>
    )
}

Footer.propTypes = {
    bgcolor: PropTypes.string,
    reveal: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

Footer.defaultProps = {
    bgcolor: '#F8F8F8',
    reveal: 'false',
    copyrightStyle: {
        responsive: {
            small: {
                pb: '15px'
            }
        }
    }
};

export default Footer
