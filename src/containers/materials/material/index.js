import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/materials/cleaning/cleaning-pcb.png'
import image2 from '../../../data/images/bg/materials/cleaning/cleaning-stencil.png'
import image3 from '../../../data/images/bg/materials/cleaning/cleaning-pallete.png'
import image4 from '../../../data/images/bg/machines/smt/smt-spi.png'
import image5 from '../../../data/images/bg/machines/smt/smt-aoi.png'
import image6 from '../../../data/images/bg/machines/smt/smt-conveyer.png'
import image7 from '../../../data/images/bg/machines/cleaning/pcb-cleaning.png'
import image8 from '../../../data/images/bg/machines/cleaning/stencil-cleaning.png'
import image9 from '../../../data/images/bg/machines/cleaning/pallete-cleaning.png'


const BoxSection = ({ sectionTitleStyle, machine, linkStyle, sectionBottomStyle }) => {
    let boxContents = [];
    let description = "";
    let subtitle = "";
    let title = "";
    if (machine === "cleaning") {
    boxContents = [
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
    ];
     description = "Материалы для очистки применяются для трех основный процессов в производстве электроники.  Очистка собранных печатных плат от остатков паяльных материалов и других загрязнений в процессе производства. В поверхностном монтаже жидкости для мойки используются для очистки трафаретов в принтере (нижняя очистка) и в отдельных машинах. Отдельный раздел составляют моющие жидкости, которые используются для мойки технологической оснастки (паллеты для пайки и для нанесения защитных покрытий) и частей паяльного оборудования (ловушки флюса и др.)."; 
     subtitle="Материалы для очистки"
     title="Мойка плат и трафаретов <br><span>Технологические процессы очистки</span>"
} else if (machine === "soldering") {
     boxContents = [
        {
            id: 1,
            imageSrc: image4,
            title: 'Оборудование для мойки плат',
            desc: 'Оборудование для автоматической мойки плат, электронных сборок. Машины для струйной и ультразвуковой очистки печатных плат.',
            path: '/оборудование-для-монтажа/оборудование-для-мойки/отмывка-печатных-плат'
        },
        {
            id: 2,
            imageSrc: image5,
            title: 'Оборудование для мойки трафаретов',
            desc: 'Оборудование для автоматической мойки трафаретов для нанесения паяльной пасты. Струйные полностью автоматические машины.',
            path: '/оборудование-для-монтажа/оборудование-для-мойки/отмывка-трафаретов'
        },
        {
            id: 3,
            imageSrc: image6,
            title: 'Оборудование для мойки оснастки',
            desc: 'Оборудование для мойки технологической оснастки: паллеты для волны, паллет для нанесения покрытий и частей машин.',
            path: '/оборудование-для-монтажа/оборудование-для-мойки/мойка-паллет-кареток'
        }
    ];
     description = "Оборудование для отмывки печатных плат и трафаретов применяют для отмывки после пайки остатков флюсов и других загрязнений с печатных плат и остатков паяльной пасты с апертур трафаретов. Как правило, оборудование для отмывки печатных плат используется для изделий требующих повышенной надежности в эксплуатации и работающих в неблагоприятных климатических условиях: автомобильная электроника, системы жизнеобеспечения, военная техника, медицинская техника, промышленная автоматика и д.р. По принципу работы оборудование для отмывки печатных плат делится на ультразвуковое и струйное.";
     subtitle = "Оборудование для мойки плат и трафаретов";
     title = "Автоматизация процессов очистки<br><span>Платы, трафареты, паллеты</span>";
} else if (machine === "coating") {
    boxContents = [
        {
            id: 1,
            imageSrc: image7,
            title: 'Установщики в отверстия плат',
            desc: 'Оборудование для автоматической установки электронных компонентов в отверстия печатных плат. Обрезка и гибка выводов при установке.',
            path: '/оборудование-для-монтажа/монтаж-в-отверстия/установщик-компонентов-в-отверстия'
        },
        {
            id: 2,
            imageSrc: image8,
            title: 'Машины селективной пайки',
            desc: 'Оборудование для селективной пайки электронных компонентов монтируемых в отверстия печатных плат.',
            path: '/оборудование-для-монтажа/монтаж-в-отверстия/селективная-пайка'
        },
        {
            id: 3,
            imageSrc: image9,
            title: 'Машины пайки волной припоя',
            desc: 'Оборудование для пайки электронных компонентов монтируемых в отверстия печатных плат волной расплавленного припоя.',
            path: '/оборудование-для-монтажа/монтаж-в-отверстия/пайка-волной-припоя'
        }
    ];
    description = "Монтаж электронных компонентов в отверстия печатных плат  (THT) - это классическая технология монтажа электронных компонентов, которая активно применятся до сегодняшнего времени. Монтаж в отверстия включает в себя два основных технологических процесса. Установка электронных компонентов в отверстия печатных плат. Для автоматизации процессов установки компонентов применяются специальные автоматические установщики в отверстия. Групповая пайка на машине пайки волной припоя или селективная пайка на автоматической машине для селективной пайки.";
     subtitle = "Оборудование для монтажа в отверстия";
     title = "Автоматизация сборки плат<br><span>Выводной монтаж</span>";
} 

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle={subtitle}
                            title={title}
                        />
                    </Col>
                </Row>
                <h6 style={{textAlign: "justify"}}>{description}</h6>
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