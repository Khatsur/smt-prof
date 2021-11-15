import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-three'
import Footer from '../../containers/layout/footer/footer-one'
import { Container, Box, Row, Col } from '../../components/ui/wrapper'
import Heading from '../../components/ui/heading'
import Text from '../../components/ui/text'
import Image from '../../components/image'
import VideoButton from '../../components/ui/video-button'
import ModalVideo from '../../components/ui/modal-video'
import ContactArea from '../../containers/global/contact-area/contact-three-ru'
import Machines from '../../containers/machines/machine'
import PostNav from '../../components/post-nav/layout-one'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import AccordionWrap from '../../components/ui/accordion'
import {
    BannerArea,
    BannerTextWrap,
    OverviewArea,
    ResultArea,
    FaqArea,
    VideoBoxWrap,
    VideoBtnWrap,
    NavigationArea,
    Navigtion
} from './case-study-template.style'
import Tab from '../../containers/elements/tabs/tab-smt'
import ButtonSection from '../../containers/elements/button/button-smt'
import {PagePath} from '../../components/pagepath'



const CaseStudyTemplate = ({ data, pageContext: { next, previous }, location, ...restProps }) => {
    const pageData = data.machineJson;
    let bannerImg;
    if (pageData.banner_image) {
        bannerImg = pageData.banner_image.childImageSharp.fluid;
    }
    const { results, faq, video } = pageData;
    const {
        taglineStyle,
        overviewStyles: { overviewHeading, clientName, metaHeading },
        social,
        problemSolStyles: { problemHeading, problemIcon },
        resultStyles: { resultText } } = restProps;

    const [videoOpen, setVideoOpen] = useState(false);

    if (pageData.video) {
        var { video_link } = pageData.video;
        var video_arr = video_link.split('=', -1);
        var video_id = video_arr[1];
    }
    const modalVideoOpen = () => {
        setVideoOpen(true)
    }

    const modalVideoClose = () => {
        setVideoOpen(false)
    }

    let titlepathprevious;
    let uaprevious;
    if (previous) {
    const regexprevious = new RegExp(`/${previous.fields.slug}`);
    
    for (let i = 0; i < PagePath.length; i++) {
        if (regexprevious.test(`${PagePath[i].ru}`)) {
            uaprevious = `${PagePath[i].ru}`;
            titlepathprevious = uaprevious.replace(regexprevious, ``);
            i = PagePath.length;
        } 
    };
}
    
    let titlepathnext;
    let uanext;
    if(next) {
    const regexnext = new RegExp(`/${next.fields.slug}`);
    for (let i = 0; i < PagePath.length; i++) {
        if (regexnext.test(`${PagePath[i].ru}`)) {
            uanext = `${PagePath[i].ru}`;
            titlepathnext = uanext.replace(regexnext, ``);
            i = PagePath.length;
        } 
    };
}

const lang = "ru";

let machine;
const machines = ["smt", "tht", "cleaning", "coating", "wire", "cutting", "storage", "filtration"];
for (let i = 0; i < machines.length; i++) {
    const regmachine = new RegExp(`${machines[i]}`);
    if (regmachine.test(`${pageData.id}`)) {
        machine = machines[i];
        i = machines.length;
    } 
}
    
    return (
        <Layout location={location}>
            
            <Header path={`${pageData.ru}/${pageData.title}`}/>
            <SEO title={pageData.title.toUpperCase()} pathname={`${pageData.ru}/${pageData.title}`} description={`${pageData.title.toUpperCase()} ${pageData.excerpt}`} keywords={pageData.keywords} lang={lang} image={pageData.image.publicURL} />
            <main className="site-wrapper-reveal">
                {(pageData.title || pageData.tagline) && (
                    <BannerArea fluid={bannerImg}>
                        <Container>
                            <Row justify="center">
                                <Col lg={10}>
                                    <BannerTextWrap>
                                        
                                        {pageData.tagline && <Heading {...taglineStyle}>{pageData.tagline}</Heading>}
                                    </BannerTextWrap>
                                </Col>
                            </Row>
                        </Container>
                    </BannerArea>
                )}
                
                {(
                    <OverviewArea>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <Heading as="h3" mb="30px">{pageData.bigtitle}</Heading>
                                   
                                </Col>
                               
                            </Row>
                           
                            <Row>
                            
                                <Col lg={5} >
                                    { 
                                    <Image  fluid={pageData.image.childImageSharp.fluid} alt={pageData.title} />
                                    }
                                </Col>
                                
                                <Col lg={7}>
                                    {<Text style={{fontSize: 20}}>{pageData.short_desc}</Text>}
                                    
                    
                                </Col>
                            </Row>
                        </Container>
                    </OverviewArea>
                )}
                <Tab techover={pageData.techover} techspec={pageData.techspec} techfeat={pageData.techfeat} techoption={pageData.techoption} techfeat_title={pageData.techfeat_title} techover_title={pageData.techover_title}  lang={lang}/>

               <ButtonSection path={pageData.brochure} lang={lang}/>
                
                {results && (
                    <ResultArea>
                        <Container>
                            <Row>
                                <Col lg={3}>
                                    <Heading>Вопросы:</Heading>
                                </Col>
                                <Col lg={9}>
                                    <Text {...resultText}>{results}</Text>
                                </Col>
                            </Row>
                        </Container>
                    </ResultArea>
                )}
                {(faq || video) && (
                    <FaqArea>
                        <Container>
                            <Row>
                                {faq && (
                                    <Col lg={6} pr="3rem">
                                        <AccordionWrap layout="two">
                                            <Accordion allowZeroExpanded preExpanded={[faq[0].id]}>
                                                {
                                                    faq.map((el, index) => {
                                                        return (
                                                            <AccordionItem id={el.id} key={el.id}>
                                                                <AccordionItemHeading>
                                                                    <AccordionItemButton>
                                                                        {el.title}
                                                                    </AccordionItemButton>
                                                                </AccordionItemHeading>
                                                                <AccordionItemPanel>
                                                                    <p>{`${pageData.bigtitle} ${el.desc}`}</p>
                                                                </AccordionItemPanel>
                                                            </AccordionItem>
                                                        )
                                                    })
                                                }
                                            </Accordion>
                                        </AccordionWrap>
                                    </Col>
                                )}
                                {video && (
                                    <Col lg={6}>
                                        <VideoBoxWrap>
                                            {video.preview_image && <Image fluid={video.preview_image.childImageSharp.fluid} alt="Video preview" align="left" />}
                                            <VideoBtnWrap>
                                                <VideoButton skin="primary" onClick={modalVideoOpen} />
                                            </VideoBtnWrap>
                                        </VideoBoxWrap>
                                    </Col>
                                )}
                            </Row>
                        </Container>
                    </FaqArea>
                )}
                
                <NavigationArea>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <Navigtion>
                                    {previous && (
                                        <PostNav
                                            rel="prev"
                                            slug={`../${titlepathprevious}/${previous.fields.slug}`}
                                            title={previous.title.toUpperCase()}
                                            image={previous.image.childImageSharp.fixed}
                                        />
                                    )}
                                    {next && (
                                        <PostNav
                                            rel="next"
                                            slug={`../${titlepathnext}/${next.fields.slug}`}
                                            title={next.title.toUpperCase()}
                                            image={next.image.childImageSharp.fixed}
                                        />
                                    )}
                                </Navigtion>
                            </Col>
                        </Row>
                    </Container>
                </NavigationArea>
                <ContactArea />
                <Machines machine={machine} />
            </main>
            <ModalVideo
                channel='youtube'
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
            <Footer />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!){
        machineJson(fields: {slug: {eq: $slug}}){
            id
            title
            bigtitle
            ru
            ua
            excerpt
            keywords
            short_desc
            tagline
            techover
            techfeat_title
            techover_title
            techfeat {
                id
                feat
            }
            techspec {
                id
                spec
            }
            techoption {
                id
                option
            }
            banner_image{
                childImageSharp{
                  fluid(maxWidth: 1420, maxHeight: 470, quality: 100){
                    ...GatsbyImageSharpFluid_withWebp
                    presentationWidth
                    presentationHeight
                  }
                }
            }
            image {
                childImageSharp {
                    fluid(maxHeight: 300, quality: 100){
                        ...GatsbyImageSharpFluid_withWebp
                        presentationWidth
                        presentationHeight
                    }
                }
                relativePath
                publicURL
            }
            brochure
            seoimage {
                relativePath
              }
            results
            faq {
                id
                title
                desc
            }
            video {
                video_link
                preview_image{
                    childImageSharp {
                        fluid(quality: 100,  maxHeight: 300) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                            aspectRatio
                        }
                    }
                }
            }
        }
    }
`;

CaseStudyTemplate.propTypes = {
    bannerStyle: PropTypes.object,
    taglineStyle: PropTypes.object,
    overviewStyles: PropTypes.object,
    social: PropTypes.object,
    problemSolStyles: PropTypes.object,
    resultStyles: PropTypes.object,
    faqStyles: PropTypes.object,
    navigation: PropTypes.object
}

CaseStudyTemplate.defaultProps = {
    taglineStyle: {
        as: 'h1',
        mt: '20px',
        mb: '15px',
        color: '#fff'
    },
    overviewStyles: {
        overviewHeading: {
            as: 'h5',
            fontSize: '28px',
            lineHeight: 1.43,
            fontweight: 400,
            color: '#002fa6',
        },
        clientName: {
            as: 'h6',
            fontweight: '500',
            mb: '.25rem'
        },
        metaHeading: {
            texttransform: 'uppercase',
            fontweight: 500,
            fontSize: '14px',
            letterspacing: '1px',
            color: '#333'
        }
    },
    social: {
        color: '#ababab',
        fontSize: '15px',
        tooltip: true,
        tooltip_position: 'bottom-left'
    },
    problemSolStyles: {
        problemHeading: {
            as: 'h6',
            position: 'relative',
            fontSize: '15px',
            fontweight: 500,
            lineHeight: 1.74,
            mb: '20px'
        },
        problemIcon: {
            fontSize: '18px',
            fontweight: 400,
            pr: '15px',
            mt: '5px'
        }
    },
    resultStyles: {
        resultText: {
            fontSize: '24px'
        }
    }
}

export default CaseStudyTemplate;