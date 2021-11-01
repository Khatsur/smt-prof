import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/filtration/filtration-small.jpg'
import image2 from '../../../data/images/bg/machines/filtration/filtration-big.jpg'
import image3 from '../../../data/images/bg/machines/filtration/filtration-laser.jpg'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Бюджетные автономные системы',
            desc: 'Локальные вытяжные системы для оснащения до 1-3 рабочих мест.',
            path: '/оборудование-для-монтажа/дымоулавливающие-системы/дымоуловители-для-пайки'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Многоместные дымоулавливающие системы',
            desc: 'Многоместные дымоулавливающие системы для оснащения производственного участка',
            path: '/оборудование-для-монтажа/дымоулавливающие-системы/вытяжки-для-пайки'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Дымоулавливающие системы для лазерного оборудования',
            desc: 'Интеллектуальные очистные системы для улавливания вредных веществ при лазерной обработке',
            path: '/оборудование-для-монтажа/дымоулавливающие-системы/вытяжки-для-лазерных-станков'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle = "Дымоулавливающие системы"
                            title = "Безопастное производство<br><span>Охрана труда</span>"
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