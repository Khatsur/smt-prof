import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/storage/stock-storage.jpg'
import image2 from '../../../data/images/bg/machines/storage/components-storage.jpg'
import image3 from '../../../data/images/bg/machines/storage/paste-storage.jpg'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Автоматизированные склады компонентов',
            desc: 'Автоматизированные системы для управления комплектацией электронных компонентов и другими частями',
            path: '/оборудование-для-монтажа/автоматизированные-системы-хранения/автоматизированные-склады-компонентов'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Шкафы сухого хранения',
            desc: 'Оборудование для сухого хранения и сушки электронных компонентов и печатных плат',
            path: '/оборудование-для-монтажа/автоматизированные-системы-хранения/шкафы-сухого-хранения'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Хранение паяльной пасты',
            desc: 'Оборудование для хранения паяльной пасты с поддержанием необходимой температуры и влажности',
            path: '/оборудование-для-монтажа/автоматизированные-системы-хранения/хранение-паяльной-пасты'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Автоматизированные системы хранения компонентов и материалов"
                            title="Автоматизация управлением комплектацией<br><span>Увеличение эффективности производства</span>"
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