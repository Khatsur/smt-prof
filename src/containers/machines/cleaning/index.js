import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/cleaning/pcb-cleaning.png'
import image2 from '../../../data/images/bg/machines/cleaning/stencil-cleaning.png'
import image3 from '../../../data/images/bg/machines/cleaning/pallete-cleaning.png'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Оборудование для мойки плат',
            desc: 'Оборудование для автоматической мойки плат, электронных сборок. Машины для струйной и ультразвуковой очистки печатных плат.',
            path: '/оборудование-для-монтажа/оборудование-для-мойки/отмывка-печатных-плат'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Оборудование для мойки трафаретов',
            desc: 'Оборудование для автоматической мойки трафаретов для нанесения паяльной пасты. Струйные полностью автоматические машины.',
            path: '/оборудование-для-монтажа/оборудование-для-мойки/отмывка-трафаретов'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Оборудование для мойки оснастки',
            desc: 'Оборудование для мойки технологической оснастки: паллеты для волны, паллет для нанесения покрытий и частей машин.',
            path: '/оборудование-для-монтажа/оборудование-для-мойки/мойка-паллет-кареток'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Оборудование для мойки плат и трафаретов"
                            title="Автоматизация процессов очистки<br><span>Платы, трафареты, паллеты</span>"
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