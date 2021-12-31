import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/materials/solder/solder-paste.png'
import image2 from '../../../data/images/bg/materials/solder/solder-wire.png'
import image3 from '../../../data/images/bg/materials/solder/solder-bars.png'
import image4 from '../../../data/images/bg/materials/solder/solder-flux.png'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Паяльная паста',
            desc: 'Паяльная паста для нанесения на контактные площадки печатных плат через металлический трафарет. Безсвинцовая и содержащая свинец.',
            path: '/материалы-для-smt/паяльная-паста-и-припой/паяльная-паста'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Припой в проволоке',
            desc: 'Припой в проволоке с флюсом для ручной и роботизированной пайки. Безсвинцовые и содержащие свинец сплавы.',
            path: '/материалы-для-smt/паяльная-паста-и-припой/припой-для-пайки/припой-трубчатый'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Припой в брусках',
            desc: 'Припой в брусках для загрузки в паяльные ванны машин для пайки волной припоя и машин для селективной пайки. Разные размеры брусков.',
            path: '/материалы-для-smt/паяльная-паста-и-припой/припой-для-пайки/припой-для-волновой-пайки'
        },
        {
            id: 4,
            imageSrc: image4,
            title: 'Флюс для пайки',
            desc: 'Флюс для машинной пайки, который применятся в машинах для групповой пайки: машины для пайки волной припоя и селективной пайки.',
            path: '/материалы-для-smt/паяльная-паста-и-припой/флюс-для-пайки'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Материалы для монтажа компонентов"
                            title="Материалы для пайки <br><span>Поверхностный и  выводной монтаж</span>"
                        />
                    </Col>
                </Row>
                Материалы для пайки делятся на два основных вида – паяльная паста и припой. Паяльная паста состоит из маленьких шариков припоя, флюса и вспомогательных компонентов. Наносится на контактные площадки печатных плат через металлический трафарет или с помощью дозатора. Припой может быть в проволоке с флюсом или без флюса. Припой в проволоке применятся при ручной пайке или для роботизированной пайки с помощью паяльных роботов. Припой в брусках применяют для заполнения паяльных ванн машин для групповой пайки – машины пайки волной припоя и машины селективной пайки.
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