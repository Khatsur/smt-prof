import React from 'react'
import PropTypes from 'prop-types'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Anchor from '../../../components/ui/anchor'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/smt/smt-printing.png'
import image2 from '../../../data/images/bg/machines/smt/smt-pp.png'
import image3 from '../../../data/images/bg/machines/smt/smt-reflow.png'
import image4 from '../../../data/images/bg/machines/smt/smt-spi.png'
import image5 from '../../../data/images/bg/machines/smt/smt-aoi.png'
import image6 from '../../../data/images/bg/machines/smt/smt-conveyer.png'

const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Принтеры паяльной пасты',
            desc: 'Оборудование для нанесения паяльной пасты через металический трафарет на контактные площадки печатных плат.',
            path: '/оборудование-для-монтажа/поверхностный-монтаж/принтеры-паяльной-пасты'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Установщики компонентов',
            desc: 'Оборудование для автоматической установки электронных компонентов SMD на печатные платы. Установщики для работы в линии.',
            path: '/оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Печи оплавления паяльной пасты',
            desc: 'Паяльные печи для конвекционного плавления паяльной пасты. Отдельно-стоящее оборудование и конвейерные печи.',
            path: '/оборудование-для-монтажа/поверхностный-монтаж/печи-паяльные'
        },
        {
            id: 4,
            imageSrc: image4,
            title: 'Инспекция нанесения пасты - SPI',
            desc: 'Автоматическая оптическая инспекция нанесения паяльной пасты на контактные площадки печатных плат.  Машины для 3D измерения.',
            path: '/оборудование-для-монтажа/поверхностный-монтаж/инспекция-паяльной-пасты'
        },
        {
            id: 5,
            imageSrc: image5,
            title: 'Инспекция после пайки - AOI',
            desc: 'Автоматическая оптическая инспекция качества монтажа электронных компонентов после оплавления паяльной пасты. 3D AOI.',
            path: '/оборудование-для-монтажа/поверхностный-монтаж/автоматическая-оптическая-инспекция'
        },
        {
            id: 6,
            imageSrc: image6,
            title: 'Перемещение печатных плат',
            desc: 'Конвейерные сборки для перемещения плат в производственной линии. Устройства загрузки и выгрузки плат. Конвейеры и буферы.',
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
                            subtitle="Оборудование для SMT"
                            title="Автоматизация сборки плат<br><span>Поверхностный монтаж</span>"
                        />
                    </Col>
                </Row>
                Поверхностный монтаж или технология  поверхностного монтажа (SMT) – это совокупность технологических процессов монтажа электронных компонентов  SMD на поверхность печатных плат. Технология включает в себя три основные процессы. Нанесение паяльной пасты на контактные площадки печатных плат через металлический трафарет или с помощью дозатора. Установка электронных компонентов используя специальные автоматические машины с вакуумным захватом электронных компонентов. Оплавление паяльной пасты в специальной паяльной печи. 
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