import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/smt/smt-printing.png'
import image2 from '../../../data/images/bg/machines/smt/smt-pp.png'
import image3 from '../../../data/images/bg/machines/smt/smt-reflow.png'
import image4 from '../../../data/images/bg/machines/smt/smt-spi.png'
import image5 from '../../../data/images/bg/machines/smt/smt-aoi.png'
import image6 from '../../../data/images/bg/machines/smt/smt-conveyer.png'
import image7 from '../../../data/images/bg/machines/cleaning/pcb-cleaning.png'
import image8 from '../../../data/images/bg/machines/cleaning/stencil-cleaning.png'
import image9 from '../../../data/images/bg/machines/cleaning/pallete-cleaning.png'
import image10 from '../../../data/images/bg/machines/tht/insertion.png'
import image11 from '../../../data/images/bg/machines/tht/selective.png'
import image12 from '../../../data/images/bg/machines/tht/wave.png'
import image13 from '../../../data/images/bg/machines/coating/selective-coating.png'
import image14 from '../../../data/images/bg/machines/coating/dip-coating.png'
import image15 from '../../../data/images/bg/machines/coating/spray-coating.png'
import image16 from '../../../data/images/bg/machines/wire/cutting.png'
import image17 from '../../../data/images/bg/machines/wire/striping.png'
import image18 from '../../../data/images/bg/machines/wire/crimping.png'
import image19 from '../../../data/images/bg/machines/cutting/blade-cutting.jpg'
import image20 from '../../../data/images/bg/machines/cutting/router-cutting.jpg'
import image21 from '../../../data/images/bg/machines/cutting/laser-cutting.jpg'

const BoxSection = ({ sectionTitleStyle, machine, linkStyle, sectionBottomStyle }) => {
    let boxContents = [];
    let description = "";
    let subtitle = "";
    let title = "";
    if (machine === "smt") {
    boxContents = [
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
            path: '/оборудование-для-монтажа/поверхностный-монтаж/перемещение-печатных-плат'
        }
    ];
     description = "Поверхностный монтаж или технология  поверхностного монтажа (SMT) – это совокупность технологических процессов монтажа электронных компонентов  SMD на поверхность печатных плат. Технология включает в себя три основные процессы. Нанесение паяльной пасты на контактные площадки печатных плат через металлический трафарет или с помощью дозатора. Установка электронных компонентов используя специальные автоматические машины с вакуумным захватом электронных компонентов. Оплавление паяльной пасты в специальной паяльной печи."; 
     subtitle = "Оборудование для SMT";
     title = "Автоматизация сборки плат<br><span>Поверхностный монтаж</span>";
} else if (machine === "cleaning") {
     boxContents = [
        {
            id: 1,
            imageSrc: image7,
            title: 'Оборудование для мойки плат',
            desc: 'Оборудование для автоматической мойки плат, электронных сборок. Машины для струйной и ультразвуковой очистки печатных плат.',
            path: '/оборудование-для-монтажа/оборудование-для-мойки/отмывка-печатных-плат'
        },
        {
            id: 2,
            imageSrc: image8,
            title: 'Оборудование для мойки трафаретов',
            desc: 'Оборудование для автоматической мойки трафаретов для нанесения паяльной пасты. Струйные полностью автоматические машины.',
            path: '/оборудование-для-монтажа/оборудование-для-мойки/отмывка-трафаретов'
        },
        {
            id: 3,
            imageSrc: image9,
            title: 'Оборудование для мойки оснастки',
            desc: 'Оборудование для мойки технологической оснастки: паллеты для волны, паллет для нанесения покрытий и частей машин.',
            path: '/оборудование-для-монтажа/оборудование-для-мойки/мойка-паллет-кареток'
        }
    ];
     description = "Оборудование для отмывки печатных плат и трафаретов применяют для отмывки после пайки остатков флюсов и других загрязнений с печатных плат и остатков паяльной пасты с апертур трафаретов. Как правило, оборудование для отмывки печатных плат используется для изделий требующих повышенной надежности в эксплуатации и работающих в неблагоприятных климатических условиях: автомобильная электроника, системы жизнеобеспечения, военная техника, медицинская техника, промышленная автоматика и д.р. По принципу работы оборудование для отмывки печатных плат делится на ультразвуковое и струйное.";
     subtitle = "Оборудование для мойки плат и трафаретов";
     title = "Автоматизация процессов очистки<br><span>Платы, трафареты, паллеты</span>";
} else if (machine === "tht") {
    boxContents = [
        {
            id: 1,
            imageSrc: image10,
            title: 'Установщики в отверстия плат',
            desc: 'Оборудование для автоматической установки электронных компонентов в отверстия печатных плат. Обрезка и гибка выводов при установке.',
            path: '/оборудование-для-монтажа/монтаж-в-отверстия/установщик-компонентов-в-отверстия'
        },
        {
            id: 2,
            imageSrc: image11,
            title: 'Машины селективной пайки',
            desc: 'Оборудование для селективной пайки электронных компонентов монтируемых в отверстия печатных плат.',
            path: '/оборудование-для-монтажа/монтаж-в-отверстия/селективная-пайка'
        },
        {
            id: 3,
            imageSrc: image12,
            title: 'Машины пайки волной припоя',
            desc: 'Оборудование для пайки электронных компонентов монтируемых в отверстия печатных плат волной расплавленного припоя.',
            path: '/оборудование-для-монтажа/монтаж-в-отверстия/пайка-волной-припоя'
        }
    ];
    description = "Монтаж электронных компонентов в отверстия печатных плат  (THT) - это классическая технология монтажа электронных компонентов, которая активно применятся до сегодняшнего времени. Монтаж в отверстия включает в себя два основных технологических процесса. Установка электронных компонентов в отверстия печатных плат. Для автоматизации процессов установки компонентов применяются специальные автоматические установщики в отверстия. Групповая пайка на машине пайки волной припоя или селективная пайка на автоматической машине для селективной пайки.";
     subtitle = "Оборудование для монтажа в отверстия";
     title = "Автоматизация сборки плат<br><span>Выводной монтаж</span>";
} else if (machine === "coating") {
    boxContents = [
        {
            id: 1,
            imageSrc: image13,
            title: 'Селективное нанесение',
            desc: 'Оборудование для селективного нанесения влагозащитных покрытий на печатные платы. Машины для работы в линии и настольные',
            path: '/оборудование-для-монтажа/влагозащита-электроники/селективная-влагозащита'
        },
        {
            id: 2,
            imageSrc: image14,
            title: 'Нанесение погружением',
            desc: 'Оборудование для нанесения защитных покрытий методом погружения. Безопасное исполнение. Машины с пневматическим приводом.',
            path: '/оборудование-для-монтажа/влагозащита-электроники/влагозащита-погружением'
        },
        {
            id: 3,
            imageSrc: image15,
            title: 'Ручное нанесения покрытий',
            desc: 'Бюджетные решения для нанесения влагозащитных покрытий на электронные блоки. Системы для ручного нанесения распылением.',
            path: '/оборудование-для-монтажа/влагозащита-электроники/нанесение-защитных-покрытий'
        }
    ];
    description = "Существует множество изделий электроники, которые эксплуатируются в различных неблагоприятных условия. Это не обязательно тропические страны. Под капотом нашего автомобиля становится все больше электроники, а условия работы сходны с полетом в космос. Не зависимо от условия изделия должно работать надежно и долго. Для защиты электронных сборок применяют различные покрытия в зависимости от требований к эксплуатации изделия. Платы могут покрываться целиком или частично. Могут покрываться отдельные чувствительные компоненты. Основной рынок применения влагозащитных покрытий это: автомобильная электроника, оборонная промышленность, авиастроение, LED дисплеи и освещение, альтернативные источники электроэнергии.";
     subtitle = "Оборудование для нанесения защитных покрытий";
     title = "Автоматизация процессов нанесения<br><span>Влагозащита электроники</span>";
} else if (machine === "wire") {
    boxContents = [
        {
            id: 1,
            imageSrc: image16,
            title: 'Резка провода и кабеля',
            desc: 'Оборудование для мерной резки и зачистки проводом и кабелей. Резка, снятие верхнего покрытия кабелей и покрытия внутренних проводов за один проход.',
            path: '/machines/smt'
        },
        {
            id: 2,
            imageSrc: image17,
            title: 'Зачистка провода и кабеля',
            desc: 'Оборудование для зачистки проводов. Зачистка внешнего покрытия кабелей и покрытия внутренних проводов. Зачистка коаксиальных и силовых кабелей.',
            path: '/machines/smt'
        },
        {
            id: 3,
            imageSrc: image18, 
            title: 'Опрессовка контактов',
            desc: 'Оборудование для обжимки терминалов. Автоматическое и полу-автоматическое оборудование для кремповки контактов. Опрессовка контактов в россыпи.',
            path: '/machines/smt'
        }
    ];
    description = "Производство электроники пока не смогло уйти от проводного монтажа, который трудно автоматизировать. Особенно много времени занимают технологические процессы подготовки проводов и кабелей: резка провода, зачистка изоляции, запрессовка контактов, лужение выводов. Эти операции не требую высокой квалификации, но занимают существенно время и влияют на себестоимость изделия. Применение простых недорогих устройств снижает время подготовки проводов и улучшаю качество заготовок.  Оборудование окупает себя за несколько месяцев и не требует специального обслуживания и условий эксплуатации.";
     subtitle = "Оборудование для обработки провода";
     title = "Автоматизация процессов резки и зачистки<br><span>Обработка проводов и кабелей</span>";
}else if (machine === "cutting") {
    boxContents = [
        {
            id: 1,
            imageSrc: image19,
            title: 'Настольные установки для разделения групповых панелей',
            desc: 'Настольное оборудование для разделения предварительно скрайбованих групповых панелей печатных плат. Для работы вне линии',
            path: '/оборудование-для-монтажа/разделение-групповых-заготовок/устройства-разделения-печатных-плат'
        },
        {
            id: 2,
            imageSrc: image20,
            title: 'Фрезерное оборудование для разделения печатных плат',
            desc: 'Автоматическое и полу-автоматическое оборудование для разделения групповых заготовок печатных плат. Машины для работы в линии и отдельно.',
            path: '/оборудование-для-монтажа/разделение-групповых-заготовок/оборудование-разделения-печатных-плат'
        },
        {
            id: 3,
            imageSrc: image21,
            title: 'Системы разделения групповых заготовок лазером',
            desc: 'Автоматическое оборудование для разделения печатных плат сложной формы, гибких печатных плат и других сложных задач.',
            path: '/оборудование-для-монтажа/разделение-групповых-заготовок/разделение-групповых-заготовок-лазером'
        }
    ];
    description = "Для обеспечения максимальной производительности оборудования для монтажа применяют групповые заготовки (мультиплицированные платы). Сами платы в групповой заготовке могут разграничиваться различными способами: скрайбирование, перемычки, перфорация или другим способом, который не уменьшает жесткости платы. Применение групповых заготовок требует дополнительного технологического процесса и создания рабочего места. Разделение групповых заготовок печатных плат – это серьезный и ответственный процесс. Правильный подбор оборудование позволяет снизить уровень брака и уменьшить в целом расходы на производство изделия.";
     subtitle = "Оборудование для разделения групповых заготовок";
     title = "Автоматизация процессов разделения<br><span>Увеличение производительности</span>";
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