import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/cutting/blade-cutting.jpg'
import image2 from '../../../data/images/bg/machines/cutting/router-cutting.jpg'
import image3 from '../../../data/images/bg/machines/cutting/laser-cutting.jpg'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Настольные установки для разделения групповых панелей',
            desc: 'Настольное оборудование для разделения предварительно скрайбованих групповых панелей печатных плат. Для работы вне линии',
            path: '/оборудование-для-монтажа/разделение-групповых-заготовок/устройства-разделения-печатных-плат'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Фрезерное оборудование для разделения печатных плат',
            desc: 'Автоматическое и полу-автоматическое оборудование для разделения групповых заготовок печатных плат. Машины для работы в линии и отдельно.',
            path: '/оборудование-для-монтажа/разделение-групповых-заготовок/оборудование-разделения-печатных-плат'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Системы разделения групповых заготовок лазером',
            desc: 'Автоматическое оборудование для разделения печатных плат сложной формы, гибких печатных плат и других сложных задач.',
            path: '/оборудование-для-монтажа/разделение-групповых-заготовок/разделение-групповых-заготовок-лазером'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Оборудование для разделения групповых заготовок"
                            title="Автоматизация процессов разделения<br><span>Увеличение производительности</span>"
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