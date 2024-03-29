import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Timeline from '../../../../components/ui/timeline-ru'
import ImageOne from '../../../../data/images/bg/machines/tht/line-wave.jpg'
import ImageTwo from '../../../../data/images/bg/machines/tht/mid-wave.jpg'
import ImageThree from '../../../../data/images/bg/machines/tht/entry-wave.jpg'
import { SectionWrap } from './style'


const TimelineArea = (props) => {
    const content = [
        {
            year: "ДЛЯ ЛИНИИ",
            image: ImageOne,
            title: "Машины пайки волной припоя",
            desc: "Установки пайки волной для серийного производства спроектированы для получения максимального эффекта от замены ручной пайки на автоматизированною. Оборудование имеет высокую производительность и широкое окно процесса, за счет применения: дополнительных опций для предварительного нагрева, интеллектуальной системы нанесения флюса, конструктивных особенностей паяльной ванны, позволяющей создать оптимальную форму волны припоя. Установки пайки волной данного класса позволяют создать оптимальную конфигурацию оборудования под конкретное изделие и произвести быструю переналадку при переходе на новую плату.",
            path: "/оборудование-для-монтажа/монтаж-в-отверстия",
            lang: "Подробно..."
        },
        {
            year: "СРЕДНИЕ",
            image: ImageTwo,
            title: "Машины пайки волной среднего уровня",
            desc: "Установки пайки волной среднего уровня применяются для автоматизации монтажа компонентов в отверстия печатных плат и смешанного монтажа в условиях серийного производства. Оборудование имеет паллетную конструкцию и применяется, как отдельностоящее оборудование для работы вне линии. Большой объем припойной ванны обеспечивает высокую чистоту припоя для пайки больших серий печатных плат, сохраняя высокое качество монтажа и повторяемость результата.",
            path: "/оборудование-для-монтажа/монтаж-в-отверстия",
            lang: "Подробно..."
        },
        {
            year: "НАЧАЛЬНЫЕ",
            image: ImageThree,
            title: "Установки пайки волной начального уровня",
            desc: "Установки пайки волной начального уровня применяются для автоматизации монтажа компонентов в отверстия печатных плат и смешанного монтажа в условиях мелкосерийного и серийного производств. Оборудование применятся как отдельностоящее, вне линии, для небольших серий. Может использоваться в составе небольших линий с ручной установкой компонентов в отверстия в условиях серийного производства. Характеризуется оборудование небольшим объемом ванны (до 200кг) и не большим энергопотреблением.",
            path: "/оборудование-для-монтажа/монтаж-в-отверстия/установки-пайки-волной",
            lang: "Подробно..."
        }
    ]
    const contentua = [
        {
            year: "ДЛЯ ЛІНІЇ",
            image: ImageOne,
            title: "Машини пайки хвилею припою",
            desc: "Машини пайки хвилею припою для серійного виробництва спроектовані для отримання максимального ефекту від заміни ручного паяння на автоматизоване. Устаткування має високу продуктивність і широке вікно процесу, за рахунок застосування: додаткових опцій для попереднього нагріву, інтелектуальної системи нанесення флюсу, конструктивних особливостей паяльної ванни, що дозволяє створити оптимальну форму хвилі припою. Установки пайки хвилею даного класу дозволяють створити оптимальну конфігурацію обладнання під конкретний виріб і зробити швидке переналагодження при переході на нову плату.",
            path: "/ua/обладнання-для-монтажу/монтаж-в-отвори",
            lang: "Докладно..."
        },
        {
            year: "СЕРЕДНІ",
            image: ImageTwo,
            title: "Машини паяння хвилею середнього рівня",
            desc: "Установки пайки хвилею середнього рівня застосовуються для автоматизації монтажу компонентів в отвори друкованих плат і змішаного монтажу в умовах серійного виробництва. Устаткування має паллетную або конвеєрну конструкцію і застосовується, як окремостояче обладнання для роботи поза лінією. Великий обсяг паяльної ванни забезпечує високу чистоту припою для пайки великих серій друкованих плат, зберігаючи високу якість монтажу і повторюваність результату.",
            path: "/ua/обладнання-для-монтажу/монтаж-в-отвори",
            lang: "Докладно..."
        },
        {
            year: "ПОЧАТКОВІ",
            image: ImageThree,
            title: "Установки пайки хвилею початкового рівня",
            desc: "Установки пайки хвилею початкового рівня застосовуються для автоматизації монтажу компонентів в отвори друкованих плат і змішаного монтажу в умовах дрібносерійного і серійного виробництв. Устаткування застосуються як окремостояче обладнання, поза лінією, для невеликих серій. Може використовуватися в складі невеликих ліній з ручним встановлення компонентів в отвори плат в умовах серійного виробництва. Характеризується обладнання невеликим об'ємом ванни (до 200кг) і не великим енергоспоживанням.",
            path: "/ua/обладнання-для-монтажу/монтаж-в-отвори/установки-паяння-хвилею",
            lang: "Докладно..."
        }
    ]

    if (props.lang === "ru") {
        return (
            <SectionWrap>
                <Container>
                    <Row>
                    <Col lg={12}>
                           <h6 style={{textAlign: "justify"}}>Установки пайки волной припоя применяются для автоматизации процессов монтажа электронных компонентов в отверстия печатных плат (THT) и смешанного монтажа (пайка SMD и выводных компонентов за один проход). Оборудование для пайки волной припоя может заменять оборудование для селективной пайки для изделий с повышенными требованиями в эксплуатации. Применение технологии пайки волной припоя, на порядки улучшает качество выпускаемых изделий и увеличивает производительность производства, по сравнению с ручной пайкой. Для получения максимального эффекта от применения установок пайки волной припоя, конструкторам необходимо проектировать платы с учетом стандартов и требований для проектирования печатных плат под групповую пайку.</h6>
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
                           <h6 style={{textAlign: "justify"}}>Селективна пайка застосовується для автоматизації монтажу електронних компонентів в отвори друкованих плат. Устаткування для селективної пайки дозволяє повністю замінити ручні операції пайки. Застосовують процес для виробів з підвищеними вимоги до експлуатації, що б максимально виключити людський фактор і гарантувати високу якість і надійність виробу в експлуатації. Основна перевага селективної пайки - висока гнучкість і швидкість переналагодження, мала витрата матеріалів, мінімальні витрати при переході на новий виріб. Основний недолік устаткування - низька продуктивність в порівнянні з установками пайки хвилею припою. Основна сфера застосування селективної пайки - серійне багатономенклатурними виробництво  з вимогами відсутності ручного монтажу. Під таку категорію потрапляють вироби: автомобільної електроніки, системи життєзабезпечення, промавтоматика, вироби для оборонної промисловості та ін.</h6>
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
