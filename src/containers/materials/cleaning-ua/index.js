import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ua'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/materials/cleaning/cleaning-pcb.png'
import image2 from '../../../data/images/bg/materials/cleaning/cleaning-stencil.png'
import image3 from '../../../data/images/bg/materials/cleaning/cleaning-pallete.png'



const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Миття плат',
            desc: 'Миючі рідини для очищення друкованих плат після паяння. Багаторазові водні розчини з можливістю регенерації активних властивостей.',
            path: '/ua/матеріали-для-smt/рідини-для-чищення/рідини-для-відмивання-друкованих-плат'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Миття трафаретів',
            desc: 'Миючі рідини для очищення трафаретів для нанесення пасти. Матеріали для використання в принтера паяльної пасти і окремо.',
            path: '/ua/матеріали-для-smt/рідини-для-чищення/рідина-для-очищення-трафаретів'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Миття устаткування',
            desc: 'Миючі рідини для очищення технологічної оснастки для пайки (палети) і для нанесення захисних покриттів. Матеріали для проведення ТО.',
            path: '/ua/матеріали-для-smt/рідини-для-чищення/рідина-для-очищення-обладнання'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Матеріали для чищення"
                            title="Миття плат і трафаретів <br><span>Технологічні процеси очищення</span>"
                        />
                    </Col>
                </Row>
                Матеріали для очищення застосовуються для трьох основний процесів у виробництві електроніки. Очищення зібраних друкованих плат від залишків паяльних матеріалів та інших забруднень в процесі виробництва. У поверхневому монтажі рідини для миття використовуються для очищення трафаретів в принтері (нижнє очищення) і в окремих машинах для миття трафаретів. Окремий розділ складають миючі рідини, які використовуються для миття технологічного оснащення (палети для паяння хвилею припою і для нанесення захисних покриттів) і частин паяльного обладнання (пастки флюсу та ін.).
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