import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ua'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/cleaning/pcb-cleaning.png'
import image2 from '../../../data/images/bg/machines/cleaning/stencil-cleaning.png'
import image3 from '../../../data/images/bg/machines/cleaning/pallete-cleaning.png'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Обладнання для миття плат',
            desc: 'Обладнання для автоматичного миття плат, електронних блоків. Машини для струменевого і ультразвукового очищення друкованих плат.',
            path: '/machines/smt'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Обладнання для миття трафаретів',
            desc: 'Обладнання для автоматичної мийки трафаретів для нанесення паяльної пасти. Струменеві повністю автоматичні машини.',
            path: '/machines/smt'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Обладнання для миття устаткування',
            desc: 'Обладнання для миття технологічного устаткування: палети для хвилі, палети для нанесення покриттів і частин машин.',
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
                            subtitle="Обладнання для миття плат і трафаретів"
                            title="Автоматизація процесів чищення<br><span>Плати, трафарети, палети</span>"
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