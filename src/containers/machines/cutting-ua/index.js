import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ua'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/cutting/blade-cutting.jpg'
import image2 from '../../../data/images/bg/machines/cutting/router-cutting.jpg'
import image3 from '../../../data/images/bg/machines/cutting/laser-cutting.jpg'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Настільні установки для розділення групових панелей',
            desc: 'Настільне обладнання для поділу попередньо скрайбованих групових панелей друкованих плат. Для роботи поза лінією',
            path: '/ua/обладнання-для-монтажу/розділення-групових-панелей/пристрої-розділення-друкованих-плат'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Фрезерне обладнання для розділення плат',
            desc: 'Автоматичне і напів-автоматичне обладнання для розділення групових заготовок друкованих плат. Машини для роботи в лінії і окремо.',
            path: '/ua/обладнання-для-монтажу/розділення-групових-панелей/обладнання-розділення-друкованих-плат'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Системи розділення групових заготовок лазером',
            desc: 'Автоматичне обладнання для розділення друкованих плат складної форми, гнучких друкованих плат та інших складних завдань.',
            path: '/ua/обладнання-для-монтажу/розділення-групових-панелей/розділення-групових-заготовок-лазером'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Обладнання для розділення групових заготовок"
                            title="Автоматизація процесів розділення<br><span>Збільшення продуктивності</span>"
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