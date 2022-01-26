import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/materials/cleaning/cleaning-pcb.png'
import image2 from '../../../data/images/bg/materials/cleaning/cleaning-stencil.png'
import image3 from '../../../data/images/bg/materials/cleaning/cleaning-pallete.png'
import image4 from '../../../data/images/bg/materials/cleaning/analitic/zestron-eye-mobile-300x300.jpg'
import image5 from '../../../data/images/bg/materials/cleaning/analitic/flux-test-300x300.jpg'
import image6 from '../../../data/images/bg/materials/solder/solder-paste.png'
import image7 from '../../../data/images/bg/materials/solder/solder-wire.png'
import image8 from '../../../data/images/bg/materials/solder/solder-bars.png'
import image9 from '../../../data/images/bg/materials/solder/solder-flux.png'


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
        },
        {
            id: 4,
            imageSrc: image4,
            title: 'Контроль концентрации',
            desc: 'Методы и системы для определения концентрации моющего раствора. Автоматические системы регулирования и химические наборы для определения концентрации',
            path: '/материалы-для-smt/жидкости-для-мойки/методы-контроля-качества-отмывки-плат'
        },
        {
            id: 5,
            imageSrc: image5,
            title: 'Анализ чистоты плат',
            desc: 'Анализ чистоты поверхности печатных плат на наличие загрязнений. Тестовые наборы, позволяющие посредством изменения окраски поверхности определить наличие остатков активаторов',
            path: '/материалы-для-smt/жидкости-для-мойки/анализ-чистоты-поверхности-плат'
        }
    ];
     description = "Материалы для очистки применяются для трех основный процессов в производстве электроники.  Очистка собранных печатных плат от остатков паяльных материалов и других загрязнений в процессе производства. В поверхностном монтаже жидкости для мойки используются для очистки трафаретов в принтере (нижняя очистка) и в отдельных машинах. Отдельный раздел составляют моющие жидкости, которые используются для мойки технологической оснастки (паллеты для пайки и для нанесения защитных покрытий) и частей паяльного оборудования (ловушки флюса и др.)."; 
     subtitle="Материалы для очистки"
     title="Мойка плат и трафаретов <br><span>Технологические процессы очистки</span>"
} else if (machine === "soldering") {
     boxContents = [
        {
            id: 1,
            imageSrc: image6,
            title: 'Паяльная паста',
            desc: 'Паяльная паста для нанесения на контактные площадки печатных плат через металлический трафарет. Безсвинцовая и содержащая свинец.',
            path: '/материалы-для-smt/паяльная-паста-и-припой/паяльная-паста'
        },
        {
            id: 2,
            imageSrc: image7,
            title: 'Припой в проволоке',
            desc: 'Припой в проволоке с флюсом для ручной и роботизированной пайки. Безсвинцовые и содержащие свинец сплавы.',
            path: '/материалы-для-smt/паяльная-паста-и-припой/припой-для-пайки/припой-трубчатый'
        },
        {
            id: 3,
            imageSrc: image8,
            title: 'Припой в брусках',
            desc: 'Припой в брусках для загрузки в паяльные ванны машин для пайки волной припоя и машин для селективной пайки. Разные размеры брусков.',
            path: '/материалы-для-smt/паяльная-паста-и-припой/припой-для-пайки/припой-для-волновой-пайки'
        },
        {
            id: 4,
            imageSrc: image9,
            title: 'Флюс для пайки',
            desc: 'Флюс для машинной пайки, который применятся в машинах для групповой пайки: машины для пайки волной припоя и селективной пайки.',
            path: '/материалы-для-smt/паяльная-паста-и-припой/флюс-для-пайки'
        }
    ];
     description = "Материалы для пайки делятся на два основных вида – паяльная паста и припой. Паяльная паста состоит из маленьких шариков припоя, флюса и вспомогательных компонентов. Наносится на контактные площадки печатных плат через металлический трафарет или с помощью дозатора. Припой может быть в проволоке с флюсом или без флюса. Припой в проволоке применятся при ручной пайке или для роботизированной пайки с помощью паяльных роботов. Припой в брусках применяют для заполнения паяльных ванн машин для групповой пайки – машины пайки волной припоя и машины селективной пайки.";
    subtitle="Материалы для монтажа компонентов"
    title="Материалы для пайки <br><span>Поверхностный и  выводной монтаж</span>"
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