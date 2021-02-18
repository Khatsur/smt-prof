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
            title: 'Встановлення в отвори плат',
            desc: 'Обладнання для автоматичного встановлення електронних компонентів в отвори друкованих плат. Обрізка і загинання виводів.',
            path: '/machines/smt'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Машини для селективного паяння',
            desc: 'Обладнання для селективного паяння електронних компонентів монтованих в отвори друкованих плат. Машини для лінії і окремі.',
            path: '/machines/smt'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Машини для паяння хвилею припою',
            desc: 'Обладнання для паяння електронних компонентів монтованих в отвори друкованих плат хвилею розплавленого припою.',
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
                            subtitle="Обладнання для THT"
                            title="Автоматизація складання  плат<br><span>Монтаж в отвори плат</span>"
                        />
                    </Col>
                </Row>
                Монтаж електронних компонентів в отвори друкованих плат (THT) - це класична технологія монтажу електронних компонентів, яка активно застосовується до сьогоднішнього часу. Монтаж в отвори має два основних технологічних процесів. Встановлення електронних компонентів в отвори друкованих плат. Для автоматизації процесів встановлення компонентів застосовуються спеціальні автоматичні машини. Групова пайка на машині пайки хвилею припою або селективна пайка на автоматичній машині для селективного паяння.
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