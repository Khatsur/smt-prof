import React, {Fragment, useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { MdPlayArrow } from "react-icons/md";
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import ModalVideo from '../../../components/ui/modal-video'
import {HeroWrapper, HeroContent, HeroBtnGroup, HeroSeparator} from './hero-area.style'
import Carousel from 'react-bootstrap/Carousel'

const HeroArea = (props) => {
    const heroData = useStaticQuery(graphql `
        query MaterialsQuery {
            indexResolutionsJson(id: {eq: "materials-content"}) {
                title
                title_tht
                title_clean
                title_coating
                title_aoi
                subtitle
                text
                link
                video_link
                bg_image {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 890, quality: 100, srcSetBreakpoints: 6) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
                bg_image2 {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 890, quality: 100, srcSetBreakpoints: 6) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
                bg_image3 {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 890, quality: 100, srcSetBreakpoints: 6) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
                bg_image4 {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 890, quality: 100, srcSetBreakpoints: 6) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
                bg_image5 {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 890, quality: 100, srcSetBreakpoints: 6) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }      
    `);
    const {title, title_tht, title_clean, title_coating, title_aoi, subtitle, text, bg_image, bg_image2, bg_image3, bg_image4, bg_image5, link, video_link} = heroData.indexResolutionsJson;
    const {subtitleStyle, titleStyle, textStyle, btnStyle, consult_btn, work_btn} = props;
    let video_arr, video_id, video_channel;
    if(video_link){
        video_arr = video_link.split('=', -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    const [videoOpen, setVideoOpen] = useState(false);
    const modalVideoOpen = () => {
        setVideoOpen(true)
    }
    const modalVideoClose = () => {
        setVideoOpen(false)
    }
    return (
        <Carousel indicators={false}>
            <Carousel.Item>
        <Fragment>
            <HeroWrapper fluid={bg_image.childImageSharp.fluid}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <HeroContent>
                                {subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
                                {title && <Heading {...titleStyle}>{title}</Heading>}
                                {text && <Text {...textStyle}>{text}</Text>}
                                <HeroBtnGroup>
                                    {link && <Button {...btnStyle} {...consult_btn}>Подробно...</Button>}
                                    
                                </HeroBtnGroup>
                            </HeroContent>
                        </Col>
                    </Row>
                </Container>
                <HeroSeparator>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
                    </svg>
                </HeroSeparator>
            </HeroWrapper>
            <ModalVideo
                channel={video_channel}
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
        </ Carousel.Item>
        
        <Carousel.Item>
        <Fragment>
            <HeroWrapper fluid={bg_image2.childImageSharp.fluid}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <HeroContent>
                                {subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
                                {title && <Heading {...titleStyle}>{title_tht}</Heading>}
                                {text && <Text {...textStyle}>{text}</Text>}
                                <HeroBtnGroup>
                                    {link && <Button {...btnStyle} {...consult_btn}>Подробно...</Button>}
                                    
                                </HeroBtnGroup>
                            </HeroContent>
                        </Col>
                    </Row>
                </Container>
                <HeroSeparator>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
                    </svg>
                </HeroSeparator>
            </HeroWrapper>
            <ModalVideo
                channel={video_channel}
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
        </Carousel.Item>
        
        <Carousel.Item>
        <Fragment>
            <HeroWrapper fluid={bg_image3.childImageSharp.fluid}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <HeroContent>
                                {subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
                                {title && <Heading {...titleStyle}>{title_clean}</Heading>}
                                {text && <Text {...textStyle}>{text}</Text>}
                                <HeroBtnGroup>
                                    {link && <Button {...btnStyle} {...consult_btn}>Подробно...</Button>}
                                    
                                </HeroBtnGroup>
                            </HeroContent>
                        </Col>
                    </Row>
                </Container>
                <HeroSeparator>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
                    </svg>
                </HeroSeparator>
            </HeroWrapper>
            <ModalVideo
                channel={video_channel}
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
        </Carousel.Item>

        <Carousel.Item>
        <Fragment>
            <HeroWrapper fluid={bg_image4.childImageSharp.fluid}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <HeroContent>
                                {subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
                                {title && <Heading {...titleStyle}>{title_coating}</Heading>}
                                {text && <Text {...textStyle}>{text}</Text>}
                                <HeroBtnGroup>
                                    {link && <Button {...btnStyle} {...consult_btn}>Подробно...</Button>}
                                    
                                </HeroBtnGroup>
                            </HeroContent>
                        </Col>
                    </Row>
                </Container>
                <HeroSeparator>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
                    </svg>
                </HeroSeparator>
            </HeroWrapper>
            <ModalVideo
                channel={video_channel}
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
        </ Carousel.Item>

        <Carousel.Item>
        <Fragment>
            <HeroWrapper fluid={bg_image5.childImageSharp.fluid}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <HeroContent>
                                {subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
                                {title && <Heading {...titleStyle}>{title_aoi}</Heading>}
                                {text && <Text {...textStyle}>{text}</Text>}
                                <HeroBtnGroup>
                                    {link && <Button {...btnStyle} {...consult_btn}>Подробно...</Button>}
                                    
                                </HeroBtnGroup>
                            </HeroContent>
                        </Col>
                    </Row>
                </Container>
                <HeroSeparator>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
                    </svg>
                </HeroSeparator>
            </HeroWrapper>
            <ModalVideo
                channel={video_channel}
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
        </ Carousel.Item>

        </Carousel>
    )
}

HeroArea.defaultProps = {
    subtitleStyle: {
        as: 'h3',
        color: '#fff',
        mb: '20px',        
        responsive: {
            large: {
                fontSize: '30px'
            },
            small: {
                fontSize: '22px'
            }
        }
    },
    titleStyle: {
        as: 'h1',
        fontSize: '120px',
        color: '#F5F5F5',
        lineHeight: 1.09,
        mb: '30px',
        responsive: {
            xlarge: {
                fontSize: '100px'
            },
            large: {
                fontSize: '80px'
            },
            medium: {
                fontSize: '60px'
            },
            small: {
                fontSize: '50px'
            },
            xsmall: {
                fontSize: '40px',
                mb: '20px'
            }
        }
    },
    textStyle: {
        color: '#fff',
        fontWeight: 500
    },
    btnStyle: {
        m: '10px',
        fontSize: '14px'
    },
    consult_btn: {
        hover: "2"
    },
    work_btn: {
        skin: "light",
        color: "primary",
        iconposition: "left",
        display: "inline-flex",
        alignitems: "center",
        icondistance: "4px"
    }
}

export default HeroArea
