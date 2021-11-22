import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ua'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/dispensing/dispensing-automatic.jpg'
import image2 from '../../../data/images/bg/machines/dispensing/dispensing-semi-automatic.jpg'
import image3 from '../../../data/images/bg/machines/dispensing/dispensing-manual.jpg'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Автоматичні дозатори',
            desc: 'Автоматичні дозатори для нанесення паяльної пасти та клею та інших матеріалів. Для роботи в лінії та окремо.',
            path: '/ua/обладнання-для-монтажу/дозатори-паяльної-пасти/автоматичний-дозатор'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Напів автоматичні дозатори',
            desc: 'Напів автоматичні дозатори для нанесення паяльної пасти та клею на друковані плати. Настільне виконання',
            path: '/ua/обладнання-для-монтажу/дозатори-паяльної-пасти/автомат-дозування'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Ручні дозатори пасти та клею',
            desc: 'Ручні пристрої для нанесення паяльної пасти та клею на контактні площадки друкованих плат. Проста експлуатація',
            path: '/ua/обладнання-для-монтажу/дозатори-паяльної-пасти/ручні-дозатори'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle = "Нанесення матеріалів"
                            title = "Автоматичне дозування <span>Автоматизація процесів</span>"
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