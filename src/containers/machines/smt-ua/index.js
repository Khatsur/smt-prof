import React from 'react'
import PropTypes from 'prop-types'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Anchor from '../../../components/ui/anchor'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ua'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/smt/smt-printing.png'
import image2 from '../../../data/images/bg/machines/smt/smt-pp.png'
import image3 from '../../../data/images/bg/machines/smt/smt-reflow.png'
import image4 from '../../../data/images/bg/machines/smt/smt-spi.png'
import image5 from '../../../data/images/bg/machines/smt/smt-aoi.png'
import image6 from '../../../data/images/bg/machines/smt/smt-conveyer.png'

const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Принтери паяльної пасти',
            desc: 'Устаткування для нанесення паяльної пасти через металевий трафарет на контактні площадки друкованих плат.',
            path: '/ua/обладнання-для-монтажу/поверхневий-монтаж/принтери-паяльної-пасти'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Машини для встановлення SMD',
            desc: 'Обладнання для автоматичного встановлення електронних компонентів SMD на друковані плати. Машини для роботи в лінії і окремо.',
            path: '/ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Печі оплавлення паяльної пасти',
            desc: 'Паяльні печі для конвекційного плавлення паяльної пасти. Окреме обладнання та конвеєрні печі для роботи в лінії.',
            path: '/ua/обладнання-для-монтажу/поверхневий-монтаж/печі-паяльні'
        },
        {
            id: 4,
            imageSrc: image4,
            title: 'Інспекція нанесення пасти - SPI',
            desc: 'Автоматична оптична інспекція нанесення паяльної пасти на контактні площадки друкованих плат. Машини для 3D вимірювання.',
            path: '/ua/обладнання-для-монтажу/поверхневий-монтаж/інспекція-паяльної-пасти'
        },
        {
            id: 5,
            imageSrc: image5,
            title: 'Інспекція після пайки - AOI',
            desc: 'Автоматична оптична інспекція якості монтажу електронних компонентів після оплавлення паяльної пасти. 3D AOI.',
            path: '/ua/обладнання-для-монтажу/поверхневий-монтаж/автоматична-оптична-інспекція'
        },
        {
            id: 6,
            imageSrc: image6,
            title: 'Переміщення друкованих плат',
            desc: 'Конвеєри для переміщення плат у виробничій лінії. Пристрої завантаження і вивантаження плат. Конвеєри та буфери.',
            path: '/ua/обладнання-для-монтажу/поверхневий-монтаж/переміщення-друкованих-плат'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Устаткування для SMT"
                            title="Автоматизація складання плат<br><span>Поверхневий монтаж</span>"
                        />
                    </Col>
                </Row>
                <h6 style={{textAlign: "justify"}}>Поверхневий монтаж або технологія поверхневого монтажу (SMT) - це сукупність технологічних процесів монтажу електронних компонентів SMD на поверхню друкованих плат. Технологія включає в себе три основні процеси. Нанесення паяльної пасти на контактні площадки друкованих плат через металевий трафарет або за допомогою дозатора. Встановлення електронних компонентів використовуючи спеціальні автоматичні машини з вакуумним захопленням електронних компонентів. Оплавлення паяльної пасти з встановленими компонентами SMD в спеціальній паяльний печі.</h6>
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