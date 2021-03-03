import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ua'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/materials/coating/acrylic-coatings.png'
import image2 from '../../../data/images/bg/materials/coating/urethane -coatings.png'
import image3 from '../../../data/images/bg/materials/coating/UV-Curable-Coatings.png'
import image4 from '../../../data/images/bg/materials/coating/silicone-coatings.png'
import image5 from '../../../data/images/bg/materials/coating/synthetic-rubber-coatings.png'
import image6 from '../../../data/images/bg/materials/coating/water-based-coatings.png'



const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Акрилові захисні покриття',
            desc: 'Акрилові покриття найбільш застосовувані лаки для вологозахисту електроніки. Матеріал дуже простий в застосуванні і ремонті.',
            path: '/machines/smt'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Уретанові захисні покриття',
            desc: 'Уретанові покриття застосовуються для забезпечення високої хімічної стійкості і захисту від вологи. Одне і двох компонентні.',
            path: '/machines/smt'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Покриття УФ затвердіння',
            desc: 'Інноваційні захисні покриття які мають високу швидкість затвердіння. Висока хімічна стійкість і захист від вологи.',
            path: '/machines/smt'
        },
        {
            id: 4,
            imageSrc: image4,
            title: 'Силіконові захисні покриття',
            desc: 'Силіконові захисні покриття використовуються для електронних виробів, які експлуатуються при високих температурах.',
            path: '/machines/smt'
        },
        {
            id: 5,
            imageSrc: image5,
            title: 'Покриття із синтетичної гуми',
            desc: 'Спеціальні покриття які можуть забезпечити особливий захист у порівнянні з традиційними покриттями. Захист від вологи.',
            path: '/machines/smt'
        },
        {
            id: 6,
            imageSrc: image6,
            title: 'Покриття на водяній основі',
            desc: 'Покриття на водній основі спеціально розроблені для замовників, де високі вимоги до чистоти навколишнього середовища.',
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
                            subtitle="Матеріали для захисту від вологи"
                            title="Нанесення захисних покриттів <br><span>Технологічні процеси нанесення покриттів</span>"
                        />
                    </Col>
                </Row>
                Захисні покриття для електронних плат залежить від вимог до виробу і умов експлуатації електроніки. Матеріали для захисту класифікуються за речовинами, які лежать в основі захисного покриття. Основні типи захисних покриттів, що застосовуються у виробництві електронних виробів. Акрилові покриття - захист від вологи, зручність у використанні та ремонті. Уретанові захисні покриття - хімічна стійкість, є нюанси в застосуванні і важко ремонтувати. Силіконові покриття - термостійкість, є специфіка в застосуванні. УФ затвердіння - висока швидкість затвердіння і точність товщини шару покриття.
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