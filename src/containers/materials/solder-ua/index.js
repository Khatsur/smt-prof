import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ua'
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
            title: 'Паяльна паста',
            desc: 'Паяльна паста для нанесення на контактні площадки друкованих плат через металевий трафарет. Безсвинцева і що містить свинець.',
            path: '/ua/матеріали-для-smt/матеріали-для-паяння/паяльна-паста'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Припій в дроті',
            desc: 'Припій в дроті з флюсом для ручної і механізованого паяння. Безсвинцеві і що містять свинець сплави.',
            path: '/ua/матеріали-для-smt/матеріали-для-паяння/припій-для-паяння/припій-трубчастий'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Припій в брусках',
            desc: 'Припій в брусках для завантаження в паяльні ванни машин для паяння хвилею припою і машин для селективного паяння. Різні розміри брусків.',
            path: '/ua/матеріали-для-smt/матеріали-для-паяння/припій-для-паяння/припій-для-хвильової-пайки'
        },
        {
            id: 4,
            imageSrc: image4,
            title: 'Флюс для паяння',
            desc: 'Флюс для машинного паяння, котрий застосовують в машинах для групового паяння: машини для паяння хвилею припою і селективного паяння.',
            path: '/ua/матеріали-для-smt/матеріали-для-паяння/флюс-для-паяння'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Матеріали для монтажу компонентів"
                            title="Матеріали для паяння<br><span>Монтаж на поверхню плат і в отвори</span>"
                        />
                    </Col>
                </Row>
                Матеріали для паяння діляться на три основних види - паяльна паста, припій і флюс. Паяльна паста складається з маленьких кульок припою, флюсу і допоміжних компонентів. Наноситься на контактні площадки друкованих плат через металевий трафарет або за допомогою дозатора. Припій може бути в дроті з флюсом або без флюсу. Припій в дроті застосуються при ручному паянні або для роботизованого паяння за допомогою паяльних роботів. Припій в брусках застосовують для заповнення паяльних ванн машин для групового паяння - машини паяння хвилею припою і машини селективного паяння.
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