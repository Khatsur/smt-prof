import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Timeline from '../../../../components/ui/timeline-ru'
import ImageOne from '../../../../data/images/bg/machines/cutting/separator-laser.jpg'
import ImageTwo from '../../../../data/images/bg/machines/cutting/separator-router.jpg'
import ImageThree from '../../../../data/images/bg/machines/cutting/separator-cuter.jpg'
import { SectionWrap } from './style'


const TimelineArea = (props) => {
    const content = [
        {
            year: "LASER",
            image: ImageOne,
            title: "Разделение плат лазером",
            desc: "Инновационные автоматическое оборудование для разделения групповых заготовок (панелей) печатных плат. Машины незаменимы при производстве современной электроники на базе гибких плат, которые активно применяются в портативной электронике, смартфонах, ультрабуках, умной одежде и др. Машины обеспечивают все необходимые требования к чистоте резки (отсутствие окалины после резки) и безопасности рабочего места (вытяжная система и фильтрация), что позволяет применять оборудование в чистых производствах.",
            path: "/оборудование-для-монтажа/разделение-групповых-заготовок/разделение-групповых-заготовок-лазером",
            lang: "Подробно..."
        },
        {
            year: "ROUTER",
            image: ImageTwo,
            title: "Фрезерное разделение плат",
            desc: "Скоростное автоматическое оборудование для разделения групповых заготовок (панелей) печатных плат. В качестве режущего инструмента используется фреза. Оборудование имеет бюджетное полу-автоматическое исполнение с ручной загрузкой плат для работы вне линии для мелкосерийного производства. Для серийного и крупносерийного производств применяются линейные машины с автоматической загрузкой плат и автоматической выгрузкой плат роботом-манипулятором в тару или сразу в упаковку. Возможны специальные решения под техническое задание заказчика.",
            path: "/оборудование-для-монтажа/разделение-групповых-заготовок/оборудование-разделения-печатных-плат",
            lang: "Подробно..."
        },
        {
            year: "CUTTER",
            image: ImageThree,
            title: "Разделение скрайбированных панелей ",
            desc: "Бюджетное настольное оборудование для разделения предварительно скрайбированных печатных плат. Для разделения в оборудование применяются дисковые и линейные ножи. Самые простые механические устройства разделения плат, где плата руками протягивается между двумя дисковыми ножами. Более продвинутые устройства имеют привод перемещения и позволяют автоматически изменять зазоры между ножами, что обеспечивает разделение плат в несколько этапом. Данный режим сводит к минимуму механические напряжения в материале платы и уменьшает потенциальный уровень дефектов, которые могут проявится в процессе эксплуатации изделия.",
            path: "/оборудование-для-монтажа/разделение-групповых-заготовок/устройства-разделения-печатных-плат",
            lang: "Подробно..."
        }
    ]
    const contentua = [
        {
            year: "LASER",
            image: ImageOne,
            title: "Розділення плат лазером",
            desc: "Інноваційні автоматичне обладнання для розділення групових заготовок (панелей) друкованих плат. Машини незамінні при виробництві сучасної електроніки на базі гнучких плат, які активно застосовуються в портативній електроніці, смартфонах, ультрабуки, в розумному одязі та ін. Машини забезпечують всі необхідні вимоги до чистоти різання (відсутність окалини після різання) і безпеки робочого місця (витяжна система і фільтрація ), що дозволяє застосовувати обладнання в чистих виробництвах.",
            path: "/ua/обладнання-для-монтажу/розділення-групових-панелей/розділення-групових-заготовок-лазером",
            lang: "Докладно..."
        },
        {
            year: "ROUTER",
            image: ImageTwo,
            title: "Фрезерне розділення плат",
            desc: "Швидкісне автоматичне обладнання для розділення групових заготовок (панелей) друкованих плат. Як ріжучий інструмент використовується фреза. Устаткування має бюджетне напів-автоматичне виконання з ручним завантаженням плат для роботи поза лінією для дрібносерійного виробництва. Для серійного і багатосерійного виробництв застосовуються лінійні машини з автоматичним завантаженням плат і автоматичним вивантаженням плат роботом-маніпулятором в тару або відразу в упаковку. Можливі спеціальні рішення під технічне завдання замовника.",
            path: "/ua/обладнання-для-монтажу/розділення-групових-панелей/обладнання-розділення-друкованих-плат",
            lang: "Докладно..."
        },
        {
            year: "CUTTER",
            image: ImageThree,
            title: "Розділення скрайбованих панелей",
            desc: "Бюджетне настільне обладнання для розділення попередньо скрайбованих друкованих плат. Для розділення в обладнання застосовуються дискові і лінійні ножі. Найпростіші механічні пристрої поділу плат, де плата руками протягується між двома дисковими ножами. Більш просунуті пристрої мають привід переміщення ножів і дозволяють автоматично змінювати зазори між ножами, що забезпечує поділ плат в кілька етапів. Даний режим зводить до мінімуму механічне напруження в матеріалі плати і зменшує потенційний рівень дефектів, які можуть проявиться в процесі експлуатації виробу.",
            path: "/ua/обладнання-для-монтажу/розділення-групових-панелей/пристрої-розділення-друкованих-плат",
            lang: "Докладно..."
        }
    ]
    if (props.lang === "ru") {
        return (
            <SectionWrap>
                <Container>
                    <Row>
                    <Col lg={12}>
                           <h6 style={{textAlign: "justify"}}>Оборудование для автоматизации и механизации процессов разделения групповых заготовок (панелей) печатных плат при производстве электронных изделий. Автоматизация процессов разделения печатных плат позволяет не только увеличить эффективность производства. Применение автоматического оборудования для разделения минимально снижает механические напряжения в материале печатной платы, что снижает риски возникновения дефектов в процессе эксплуатации изделия.</h6>
                        </Col>
                        <Col lg={12}>
                            <Timeline items={content} />
                        </Col>
                    </Row>
                </Container>
            </SectionWrap>
        )
    } else if (props.lang === "uk") {
        return (
            <SectionWrap>
                <Container>
                    <Row>
                    <Col lg={12}>
                           <h6 style={{textAlign: "justify"}}>Обладнання для автоматизації та механізації процесів розділення групових заготовок (панелей) друкованих плат при виробництві електронних виробів. Автоматизація процесів поділу друкованих плат дозволяє не тільки збільшити ефективність виробництва. Застосування автоматичного обладнання для розділення мінімально знижує механічні напруги в матеріалі друкованої плати, що знижує ризики виникнення дефектів в процесі експлуатації виробу.</h6>
                        </Col>
                        <Col lg={12}>
                            <Timeline items={contentua} />
                        </Col>
                    </Row>
                </Container>
            </SectionWrap>
        )
    }
}

export default TimelineArea
