import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Timeline from '../../../../components/ui/timeline-ru'
import ImageOne from '../../../../data/images/bg/machines/smt/printer/juki-printer.png'
import ImageTwo from '../../../../data/images/bg/machines/smt/printer/pbt-printer.png'
import ImageThree from '../../../../data/images/bg/machines/smt/printer/manual-printer.png'
import { SectionWrap } from './style'


const TimelineArea = (props) => {
    const content = [
        {
            year: "ДЛЯ ЛИНИИ",
            image: ImageOne,
            title: "SMART Системы селективной пайки",
            desc: "Универсальное гибкое оборудование для полной автоматизации ручных операций пайки в условиях серийного многономенклатурного и крупносерийного производств.  Автоматические установки селективной пайки применяются для работы в линии и как отдельностоящее оборудование. Для крупносерийного производства установки дополнительно оснащаются модулем групповой пайки.  Оборудование имеет модульную конструкцию и оптимально комплектуется согласно требованиям заказчика под конкретное изделие. Быстрая переналадка и возможность широкой регулировки процесса  делает автоматическое оборудование для селективной пайки идеальным решением для контрактных производителей и производителей изделий повышенной надежности.",
            path: "/оборудование-для-монтажа/монтаж-в-отверстия/система-селективной-пайки",
            lang: "Подробно..."
        },
        {
            year: "ПОЛУ АВТ",
            image: ImageTwo,
            title: "Системы для работы вне линии",
            desc: "Полуавтоматическое оборудование для селективной пайки применяется в условиях серийного многономенклатурного производства, как отдельностоящее оборудование. Системы имеют ручную загрузку плат и автоматическое перемещение для осуществления пайки в указанных местах. Оптимальное решение для серийного контрактного производства с частой сменой изделий.",
            path: "/оборудование-для-монтажа/монтаж-в-отверстия/установки-селективной-пайки",
            lang: "Подробно..."
        },
        {
            year: "РУЧНЫЕ",
            image: ImageThree,
            title: "Селективная пайка начального уровня",
            desc: "Оборудование для монтажа в отверстия плат в условиях мелкосерийного производства. Применяется для небольших  производств  монтажа плат THT  и в условия мелкосерийного производства, как отдельностоящее оборудование.  Оборудование может применятся для проведения ремонтных работ и прототипирования. Не требуют особых условий эксплуатации и квалификации персонала.",
            path: "/",
            lang: "Подробно..."
        }
    ]
    const contentua = [
        {
            year: "ДЛЯ ЛІНІЇ",
            image: ImageOne,
            title: "SMART Системи селективного паяння",
            desc: "Універсальне гнучке обладнання для повної автоматизації ручних операцій паяння в умовах серійного багатономенклатурного і багатосерійного виробництв. Автоматичні установки селективного паяння застосовуються для роботи в лінії, як окреме обладнання. Для багатосерійного виробництва машини додатково оснащуються модулем групового паяння. Устаткування має модульну конструкцію і оптимально комплектується відповідно до вимог замовника під конкретний виріб. Швидка переналагодження і можливість регулювання процесу робить автоматичне обладнання для селективного паяння ідеальним рішенням для контрактних виробників і виробників виробів підвищеної надійності.",
            path: "/ua/обладнання-для-монтажу/монтаж-в-отвори/система-селективного-паяння",
            lang: "Докладно..."
        },
        {
            year: "НАПІВ АВТ",
            image: ImageTwo,
            title: "Системи для роботи поза лінією",
            desc: "Напівавтоматичне обладнання для селективного паяння застосовується в умовах серійного багатономенклатурного виробництва, як окремостояче обладнання. Системи мають ручне завантаження плат і автоматичне переміщення для здійснення паяння в зазначених місцях. Оптимальне рішення для серійного контрактного виробництва з частою зміною виробів.",
            path: "/ua/обладнання-для-монтажу/монтаж-в-отвори/установки-селективного-паяння",
            lang: "Докладно..."
        },
        {
            year: "РУЧНІ",
            image: ImageThree,
            title: "Селективна пайка початкового рівня",
            desc: "Обладнання для монтажу в отвори плат в умовах дрібносерійного виробництва. Застосовується для невеликих виробництв монтажу плат THT і в умови дрібносерійного виробництва, як окремостояча машина. Устаткування може застосовуватися для проведення ремонтних робіт і прототипування. Не вимагають особливих умов експлуатації та кваліфікації персоналу.",
            path: "/",
            lang: "Докладно..."
        }
    ]

    if (props.lang === "ru") {
        return (
            <SectionWrap>
                <Container>
                    <Row>
                    <Col lg={12}>
                           <h6 style={{textAlign: "justify"}}>Селективная пайка применяется для автоматизации монтажа электронных компонентов в отверстия печатных плат. Оборудование для селективной пайки позволяет полностью заменить ручные операции пайки. Применяют процесс для изделий с повышенными требования к эксплуатации, что бы максимально исключить человеческий фактор и гарантировать высокое качество и надежность изделия в эксплуатации. Основное преимущество селективной пайки – высокая гибкость и скорость переналадки, малый расход материалов, минимальные затраты при переходе на новое изделие. Основной недостаток оборудования – низкая производительность по сравнению с установками пайки волной припоя. Основная сфера применения селективной пайки – серийное многономенклатурное производство с малым количество ручной пайки, с требованиями отсутствия ручного монтажа. Под такую категорию попадают изделия: автомобильной электроники, системы жизнеобеспечения, промавтоматика, изделия для оборонной промышленности и др.</h6>
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
                           <h6 style={{textAlign: "justify"}}>Принтери для нанесення пасти через трафарет застосовуються для групового нанесення паяльної пасти на контактні площадки друкованих плат. Для дрібносерійного виробництва використовують принтери ручні універсальні (без натягу в рамці) і з натягом в рамці. Для серійного виробництва підходять напівавтоматичні машини з електричним або пневматичним приводом, окремі автомати для роботи поза лінією і принтери-автомати в складі лінії SMT.</h6>
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
