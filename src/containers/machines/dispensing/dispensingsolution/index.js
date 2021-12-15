import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Timeline from '../../../../components/ui/timeline-ru'
import ImageOne from '../../../../data/images/bg/machines/dispensing/dispensing-automatic-big.jpg'
import ImageTwo from '../../../../data/images/bg/machines/dispensing/dispensing-semi-automatic-big.jpg'
import ImageThree from '../../../../data/images/bg/machines/dispensing/dispensing-manual-big.jpg'
import { SectionWrap } from './style'


const TimelineArea = (props) => {
    const content = [
        {
            year: "АВТОМАТЫ ДОЗИРОВАНИЯ",
            image: ImageOne,
            title: "Автоматические дозаторы PVA",
            desc: "Оборудование для нанесения паяльной пасты и клея на контактные площадки печатных плат по технологии поверхностного монтажа SMT. Данное оборудование для нанесения паяльной пасты и клея, применяется для автоматизации технологии поверхностного монтажа SMT, герметизации выводов BGA (underfilling), корпусирования компонентов, нанесения компаундов. Применяется в условиях серийного и крупносерийного производства монтажа печатных плат и для других сборочных операций (заливка, герметизация, нанесения термопаст и др.). В мелкосерийном производстве оборудование может применятся, как отдельностоящая машина для изделий имеющих высокие требования к эксплуатации (автомобильная электроника, системы жизнеобеспечения, электроника для оборонной отрасли и др.). Эксплуатация оборудования требует специальных условий и квалифицированного  персонала.",
            path: "/оборудование-для-монтажа/дозаторы-паяльной-пасты/автоматический-дозатор",
            lang: "Подробно..."
        },
        {
            year: "ПОЛУАВТОМАТ ДОЗАТОРЫ",
            image: ImageTwo,
            title: "Дозаторы паяльной пасты и клея",
            desc: "Полу автоматические дозаторы модульной конструкции в настольном исполнении. Машины идеально подходят для нанесения паяльной пасты и клея на печатные платы для технологии поверхностного монтажа (SMT) в условиях мелкосерийного производства и производства прототипов. Оборудование работает с разными типами дозаторов которые подбираются под техническое задание Заказчика. Машина может выполнять прецизионное нанесение доз материала",
            path: "/оборудование-для-монтажа/дозаторы-паяльной-пасты/автомат-дозирования",
            lang: "Подробно..."
        },
        {
            year: "РУЧНЫЕ ДОЗАТОРЫ",
            image: ImageThree,
            title: "Дозаторы паяльной пасты и клея",
            desc: "Оборудование для поверхностного монтажа для нанесения паяльной пасты и клея, для монтажа электронных компонентов SMD на контактные площадки печатных плат по технологии поверхностного монтажа SMT – дозаторы паяльной пасты и клея. Данное оборудование для нанесения паяльной пасты и клея, применяется для автоматизации технологии поверхностного монтажа SMT в условиях мелкосерийного производства монтажа печатных плат и для производства прототипов в лабораторных условия или дома. Эксплуатация оборудования не требует особых условий и квалификации персонала.",
            path: "/оборудование-для-монтажа/дозаторы-паяльной-пасты/ручные-дозаторы",
            lang: "Подробно..."
        }
    ]
    const contentua = [
        {
            year: "АВТОМАТИ ДОЗУВАННЯ",
            image: ImageOne,
            title: "Автоматичні дозатори PVA",
            desc: "Обладнання для нанесення паяльної пасти та клею на контактні площадки друкованих плат за технологією поверхневого монтажу SMT. Дане обладнання для нанесення паяльної пасти та клею застосовується для автоматизації технології поверхневого монтажу SMT, герметизації виводів BGA (underfilling), корпусування компонентів, нанесення компаундів. Застосовується в умовах серійного та багатосерійного виробництва монтажу друкованих плат та інших складальних операцій (заливка, герметизація, нанесення термопаст та ін.). У дрібносерійному виробництві обладнання може застосовуватися як окремо стояча машина для виробів, що мають високі вимоги до експлуатації (автомобільна електроніка, системи життєзабезпечення, електроніка для оборонної галузі та ін.). Експлуатація обладнання потребує спеціальних умов та кваліфікованого персоналу.",
            path: "/ua/обладнання-для-монтажу/дозатори-паяльної-пасти/автоматичний-дозатор",
            lang: "Докладно..."
        },
        {
            year: "НАПІВАВТОМАТ ДОЗАТОРИ",
            image: ImageTwo,
            title: "Дозатори паяльної пасти та клею",
            desc: "Напів автоматичні дозатори модульної конструкції в настільному виконанні. Машини ідеально підходять для нанесення паяльної пасти та клею на друковані плати для технології поверхневого монтажу (SMT) в умовах дрібносерійного виробництва та виробництва прототипів. Устаткування працює з різними типами дозаторів, які підбираються під технічне завдання Замовника. Машина може виконувати прецизійне нанесення доз матеріалу",
            path: "/ua/обладнання-для-монтажу/дозатори-паяльної-пасти/автомат-дозування",
            lang: "Докладно..."
        },
        {
            year: "РУЧНІ ДОЗАТОРИ",
            image: ImageThree,
            title: "Дозатори паяльної пасти та клею",
            desc: "Обладнання для поверхневого монтажу для нанесення паяльної пасти та клею, для монтажу електронних компонентів SMD на контактні площадки друкованих плат за технологією поверхневого монтажу SMT – дозатори паяльної пасти та клею. Дане обладнання для нанесення паяльної пасти та клею, застосовується для автоматизації технології поверхневого монтажу SMT в умовах дрібносерійного виробництва монтажу друкованих плат та для виробництва прототипів у лабораторних умовах або вдома. Експлуатація обладнання не потребує особливих умов та кваліфікації персоналу.",
            path: "/ua/ua/обладнання-для-монтажу/дозатори-паяльної-пасти/ручні-дозатори",
            lang: "Докладно..."
        }
    ]
    if (props.lang === "ru") {
        return (
            <SectionWrap>
                <Container>
                    <Row>
                    <Col lg={12}>
                           <h6 style={{textAlign: "justify"}}>Дозаторы паяльной пасты и клея применяются, как оборудование для поверхностного монтажа SMT. В условиях мелкосерийного многономенклатурного производства монтажа печатных плат используют дозаторы паяльной пасты, как  отдельностоящую машину для экономии средств и времени на изготовление трафаретов. Дозаторы клея применяют в условиях серийного и крупносерийного производств для технологии смешанного монтажа для фиксации SMD во время пайки волной припоя, как отдельностоящую машину, так и для работы в производственной линии. Дозаторы паяльной пасты и клея на порядок повышаю гибкость производства и рекомендуются для контрактных производителей электроники. Применение автоматических дозаторов не ограничивается только  SMT. Машини используют для процессов герметизации механических частей, заливки, нанесения термопаст и др..</h6>
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
                           <h6 style={{textAlign: "justify"}}>Дозатори паяльної пасти та клею застосовуються як обладнання для поверхневого монтажу SMT. В умовах дрібносерійного багатономенклатурного виробництва монтажу друкованих плат використовують дозатори паяльної пасти, як окрему машину для економії коштів і часу на виготовлення трафаретів. Дозатори клею застосовують в умовах серійного і багатосерійного виробництв для технології змішаного монтажу для фіксації SMD під час паяння хвилею припою. Дозатори паяльної пасти та клею на порядок підвищують гнучкість виробництва та рекомендуються для контрактних виробників електроніки. Застосування автоматичних дозаторів не обмежується лише SMT. Машини використовують для процесів герметизації механічних частин, заповнювання, нанесення термопаст та ін.</h6>
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
