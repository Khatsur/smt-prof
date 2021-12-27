import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ua'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/coating/selective-coating.png'
import image2 from '../../../data/images/bg/machines/coating/dip-coating.png'
import image3 from '../../../data/images/bg/machines/coating/spray-coating.png'
import image4 from '../../../data/images/bg/machines/coating/curing.jpg'
import image5 from '../../../data/images/bg/machines/coating/curing-con.jpg'
import image6 from '../../../data/images/bg/machines/coating/coating-aoi.jpg'

const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Селективне нанесення',
            desc: 'Обладнання для селективного нанесення вологозахисних покриттів на друковані плати. Машини для роботи в лінії і настільні',
            path: '/ua/обладнання-для-монтажу/захист-електроніки/селективний-вологозахист'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Нанесення зануренням',
            desc: 'Обладнання для нанесення захисних покриттів методом занурення. Безпечне виконання. Машини з пневматичним приводом.',
            path: '/ua/обладнання-для-монтажу/захист-електроніки/вологозахист-зануренням'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Ручне нанесення покриття',
            desc: 'Бюджетні рішення для нанесення вологозахисних покриттів на електронні блоки. Системи для ручного нанесення розпиленням.',
            path: '/ua/обладнання-для-монтажу/захист-електроніки/нанесення-захисних-покриттів'
        },
        {
            id: 4,
            imageSrc: image4,
            title: 'Полімеризація покриттів',
            desc: 'Устаткування для затвердіння захисних покриттів в УФ та ІЧ печах конвеєрного типу. Машини для роботи у складі лінії',
            path: '/ua/обладнання-для-монтажу/захист-електроніки/обладнання-для-полімеризації'
        },
        {
            id: 5,
            imageSrc: image5,
            title: 'Конвеєри для лінії',
            desc: 'Обладнання для переміщення плат у лінії для нанесення захисного покриття. Конвеєри мають спеціальне виконання для роботи зі шкідливими речовинами.',
            path: '/ua/обладнання-для-монтажу/захист-електроніки/конвеєри-захисних-покриттів'
        },
        {
            id: 6,
            imageSrc: image6,
            title: 'Оптична інспекція',
            desc: 'Обладнання для автоматичної оптичної інспекції нанесення захисних покриттів на плати',
            path: '/ua/обладнання-для-монтажу/захист-електроніки/конвеєри-захисних-покриттів/інспекція-нанесення-захисних-покриттів'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Обладнання для нанесення захисних покриттів"
                            title="Автоматизація процесів нанесення<br><span>Захист електроніки</span>"
                        />
                    </Col>
                </Row>
                <h6 style={{textAlign: "justify"}}>Існує безліч виробів електроніки, які експлуатуються в різних несприятливих умовах. Не обов'язково тропічні країни. Під капотом нашого автомобіля стає все більше електроніки, а умови роботи подібні до польоту в космос. Незалежно від умови виріб має працювати надійно та довго. Для захисту електронних плат застосовують різні покриття в залежності від вимог до експлуатації виробу. Плати можуть покриватися повністю або частково. Можуть покриватись окремі чутливі компоненти. Основний ринок застосування вологозахисних покриттів це: автомобільна електроніка, оборонна промисловість, авіабудування, LED дисплеї та освітлення, альтернативні джерела електроенергії та багато інших виробів.</h6>
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