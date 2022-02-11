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
import image10 from '../../../data/images/bg/materials/coating/acrylic-coatings.png'
import image11 from '../../../data/images/bg/materials/coating/urethane-coatings.png'
import image12 from '../../../data/images/bg/materials/coating/UV-Curable-Coatings.png'
import image13 from '../../../data/images/bg/materials/coating/silicone-coatings.png'
import image14 from '../../../data/images/bg/materials/coating/synthetic-rubber-coatings.png'


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
            imageSrc: image10,
            title: 'Акриловые защитные покрытия',
            desc: 'Акриловые покрытия наиболее широко применяемые лаки для влагозащиты электроники. Материал очень прост в применении и ремонте.',
            path: '/материалы-для-smt/защитные-покрытия/влагозащитные-акриловые-покрытия'
        },
        {
            id: 2,
            imageSrc: image11,
            title: 'Уретановые покрытия',
            desc: 'Уретановые покрытия применяются для обеспечения высокой химической стойкости и защиты от влаги. Одно и двух компонентные.',
            path: '/материалы-для-smt/защитные-покрытия/влагозащитные-уретановые-покрытия'
        },
        {
            id: 3,
            imageSrc: image12,
            title: 'Покрытия УФ отверждения',
            desc: 'Инновационные защитные покрытия которые имеют высокую скорость отверждения. Высокая химическая стойкость и защита от влаги.',
            path: '/материалы-для-smt/защитные-покрытия/покрытия-ультрафиолетового-отверждения'
        },
        {
            id: 4,
            imageSrc: image13,
            title: 'Силиконовые защитные покрытия',
            desc: 'Силиконовые защитные покрытия используются для электронных изделий, которые эксплуатируются при высоких температурах.',
            path: '/материалы-для-smt/защитные-покрытия/влагозащитные-силиконовые-покрытия'
        },
        {
            id: 5,
            imageSrc: image14,
            title: 'Синтетическая резина',
            desc: 'Специальные покрытия которые могут обеспечить особенную защиту по сравнении с традиционными покрытиями. Защита от влаги.',
            path: '/материалы-для-smt/защитные-покрытия/синтетическая-резина-для-плат'
        }
    ];
    description = "Защитные покрытия для электронных сборок зависит от требований к изделия и условий эксплуатации электроники. Материалы для защиты классифицируются по материалам, которые лежат в основе защитного покрытия. Основные типы защитных покрытий применяемые в производстве электронных изделий. Акриловые покрытия – защита от влаги, удобство в применении и ремонте. Уретановые защитные покрытия – химическая стойкость, есть нюансы в применении и тяжело ремонтировать. Силиконовые покрытия – термостойкость, есть специфика в применении. УФ отверждения – высокая скорость отвердения и точность толщины слоя покрытия.";
    subtitle="Материалы для влагозащиты"
    title="Нанесение защитных покрытий <br><span>Технологические процессы нанесения покрытий</span>"
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