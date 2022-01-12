import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/materials/cleaning/cleaning-pcb.png'
import image2 from '../../../data/images/bg/materials/cleaning/cleaning-stencil.png'
import image3 from '../../../data/images/bg/materials/cleaning/cleaning-pallete.png'



const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Мойка плат',
            desc: 'Моющие жидкости для очистки печатных плат после пайки. Многоразовые водные растворы с возможностью регенерации активных свойств.',
            path: '/материалы-для-smt/жидкости-для-мойки/жидкости-для-отмывки-печатных-плат'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Мойка трафаретов',
            desc: 'Моющие жидкости для очистки трафаретов для нанесения пасты. Материалы для заливки в принтер паяльной пасты и для отдельных машин.',
            path: '/материалы-для-smt/жидкости-для-мойки/жидкость-для-очистки-трафаретов'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Мойка оснастки',
            desc: 'Моющие жидкости для очистки технологической оснастки для пайки (паллеты) и для нанесения защитных покрытий. Материалы для проведения ТО.',
            path: '/материалы-для-smt/жидкости-для-мойки/жидкость-для-очистки-оборудования'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Материалы для очистки"
                            title="Мойка плат и трафаретов <br><span>Технологические процессы очистки</span>"
                        />
                    </Col>
                </Row>
                Материалы для очистки применяются для трех основный процессов в производстве электроники.  Очистка собранных печатных плат от остатков паяльных материалов и других загрязнений в процессе производства. В поверхностном монтаже жидкости для мойки используются для очистки трафаретов в принтере (нижняя очистка) и в отдельных машинах. Отдельный раздел составляют моющие жидкости, которые используются для мойки технологической оснастки (паллеты для пайки и для нанесения защитных покрытий) и частей паяльного оборудования (ловушки флюса и др.).
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