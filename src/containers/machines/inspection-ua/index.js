import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ua'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/inspection/aoi-inspection.png'
import image2 from '../../../data/images/bg/machines/inspection/spi-inspection.png'
import image3 from '../../../data/images/bg/machines/inspection/coating-inspection.png'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Інспекція монтажу компонентів – AOI',
            desc: 'Обладнання для автоматичної оптичної інспекції якості монтажу компонентів. Визначення геометрії паянних з`єднань.',
            path: '/machines/smt'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Інспекція нанесення пасти – SPI',
            desc: 'Обладнання для автоматичної оптичної інспекції якості нанесення паяльної пасти на контактні площадки друкованих плат.',
            path: '/machines/smt'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Інспекція нанесення покриттів',
            desc: 'Обладнання для автоматичної оптичної інспекції якості нанесення захисних покриттів на зібрані електронні блоки.',
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
                            subtitle="Обладнання  для оптичної інспекції "
                            title="Автоматизація процесів контролю<br><span>Інспекція нанесення пасти і монтажу</span>"
                        />
                    </Col>
                </Row>
                <h6 style={{textAlign: "justify"}}>Автоматична оптична інспекція - передове рішення для технологічних процесів управління якістю та показник високого рівня організації виробництва. Системи застосовуються для контролю нанесення паяльної пасти на друковані плати (SPI), контролю встановлення та монтажу електронних компонентів (AOI) та якості нанесення захисних покритів. За принципом роботи обладнання AOI ділиться на два основні типи: скануючі на базі сканера – 2D та відео на базі відеокамер – 3D. Системи можуть мати настільне виконання для дрібносерійного виробництва та конвеєрну конструкцію для роботи в лінії. Конвеєрні машини спільно з пристроями завантаження/розвантаження плат можуть становити лінію AOI для автономного обслуговування кількох виробничих ліній. Автоматична оптична інспекція дозволяє повністю виключити людський фактор і суттєво знижує рівень дефектів на ранніх стадіях виробництва виробу.</h6>
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