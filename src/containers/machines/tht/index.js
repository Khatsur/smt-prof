import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/tht/insertion.png'
import image2 from '../../../data/images/bg/machines/tht/selective.png'
import image3 from '../../../data/images/bg/machines/tht/wave.png'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Установщики в отверстия плат',
            desc: 'Оборудование для автоматической установки электронных компонентов в отверстия печатных плат. Обрезка и гибка выводов при установке.',
            path: '/оборудование-для-монтажа/монтаж-в-отверстия/установщик-компонентов-в-отверстия'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Машины селективной пайки',
            desc: 'Оборудование для селективной пайки электронных компонентов монтируемых в отверстия печатных плат.',
            path: '/оборудование-для-монтажа/монтаж-в-отверстия/селективная-пайка'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Машины пайки волной припоя',
            desc: 'Оборудование для пайки электронных компонентов монтируемых в отверстия печатных плат волной расплавленного припоя.',
            path: '/machines/smt'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Оборудование для THT"
                            title="Автоматизация сборки плат<br><span>Выводной монтаж</span>"
                        />
                    </Col>
                </Row>
                <h6 style={{textAlign: "justify"}}>Монтаж электронных компонентов в отверстия печатных плат  (THT) - это классическая технология монтажа электронных компонентов, которая активно применятся до сегодняшнего времени. Монтаж в отверстия включает в себя два основных технологических процесса. Установка электронных компонентов в отверстия печатных плат. Для автоматизации процессов установки компонентов применяются специальные автоматические установщики в отверстия. Групповая пайка на машине пайки волной припоя или селективная пайка на автоматической машине для селективной пайки.</h6>
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