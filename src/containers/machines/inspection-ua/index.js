import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
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