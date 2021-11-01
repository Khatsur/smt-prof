import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ua'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/filtration/filtration-small.jpg'
import image2 from '../../../data/images/bg/machines/filtration/filtration-big.jpg'
import image3 from '../../../data/images/bg/machines/filtration/filtration-laser.jpg'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Бюджетні автономні системи',
            desc: 'Локальні витяжні системи для оснащення до 1-3 робочих місць.',
            path: '/ua/обладнання-для-монтажу/системи-уловлювання-диму/уловлювання-диму-для-паяння'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Багатомісні димоуловлювальні системи',
            desc: 'Багатомісні димоуловлювальні системи для оснащення виробничої ділянки',
            path: '/ua/обладнання-для-монтажу/системи-уловлювання-диму/витяжки-для-паяння'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Димоуловлювальні системи для лазерного обладнання',
            desc: 'Інтелектуальні очисні системи для уловлювання шкідливих речовин при лазерній обробці',
            path: '/ua/обладнання-для-монтажу/системи-уловлювання-диму/витяжки-для-лазерних-верстатів"'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle = "Системи уловлювання диму"
                            title = "Безпечне виробництво<br><span>Охорона праці</span>"
                        />
                    </Col>
                </Row>
                <Row className="gutter-xl-70">
                    {
                        boxContents.map(boxContent => {
                            return (
                                <Col lg={4} md={6} className="box-item" key={`box-image-${boxContent.id}`}>
                                    <BoxLargeImage 
                                        title={boxContent.title}
                                        desc={boxContent.desc}
                                        imageSrc={boxContent.imageSrc}
                                        path={boxContent.path}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </SectionWrap>
    )
}


BoxSection.propTypes = {
    sectionTitleStyle: PropTypes.object,
    linkStyle: PropTypes.object,
    sectionBottomStyle: PropTypes.object
}

BoxSection.defaultProps = {
    sectionTitleStyle: {
        mb: '30px',
        responsive: {
            medium: {
                mb: '17px'
            }
        }
    },
    linkStyle: {
        fontSize: '18px',
        fontWeight: 500,
        lineheight: 1.40,
        color: 'primary',
        layout: 'underline',
        hover: {
            layout: 2
        }
    },
    sectionBottomStyle: {
        mt: '40px',
        align: 'center'
    }
}

export default BoxSection;