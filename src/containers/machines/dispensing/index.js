import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/dispensing/dispensing-automatic.jpg'
import image2 from '../../../data/images/bg/machines/dispensing/dispensing-semi-automatic.jpg'
import image3 from '../../../data/images/bg/machines/dispensing/dispensing-manual.jpg'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Автоматические дозаторы',
            desc: 'Автоматические дозаторы для нанесения паяльной пасты и клея, других материалов. Для работы в линии и отдельно.',
            path: '/оборудование-для-монтажа/дозаторы-паяльной-пасты/автоматический-дозатор'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Полу автоматические дозаторы',
            desc: 'Полу автоматические дозаторы для нанесения паяльной пасты и клея на печатные платы. Настольное исполнение',
            path: '/оборудование-для-монтажа/дозаторы-паяльной-пасты/автомат-дозирования'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Ручные дозаторы пасты и клея',
            desc: 'Ручные устройства для нанесения паяльной пасты и клея на контактные площадки печатных плат. Простая эксплуатация',
            path: '/оборудование-для-монтажа/дозаторы-паяльной-пасты/ручные-дозаторы'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle = "Нанесение материалов"
                            title = "Автоматическое дозирование<br><span>Автоматизация процессов</span>"
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