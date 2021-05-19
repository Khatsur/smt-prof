import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Timeline from '../../../../components/ui/timeline-ru'
import ImageOne from '../../../../data/images/bg/machines/smt/placers/juki-placer.png'
import ImageTwo from '../../../../data/images/bg/machines/smt/placers/fritsch-placer.png'
import ImageThree from '../../../../data/images/bg/machines/smt/placers/small-placer.png'
import ImageFore from '../../../../data/images/bg/machines/smt/placers/manipulator-placer.png'
import { SectionWrap } from './style'


const TimelineArea = (props) => {
    const content = [
        {
            year: "SMART",
            image: ImageOne,
            title: "Автоматы установки компонентов",
            desc: "Оборудование для поверхностного монтажа, для установки электронных компонентов SMD на контактные площадки печатных плат по технологии поверхностного монтажа SMT – автоматы установки компонентов SMD. Машины для установки электронных компонентов применяются для автоматизации технологии поверхностного монтажа SMT в условиях серийного производства монтажа печатных плат в составе линии SMT и как отдельностоящее оборудование в условиях мелкосерийного производства для изделий с повышеными требованиями в эксплуатации.",
            path: "автоматы-установки-компонентов/juki",
            lang: "Подробно..."
        },
        {
            year: "АВТОМАТ",
            image: ImageTwo,
            title: "Автоматы установки компонентов SMD среднего уровня",
            desc: "Автоматы установки компонентов среднего уровня (mid range) успешно используются, как в мелкосерийном так и серийном производствах. Машины имеют модульную конструкцию и большое количество дополнительного оборудования, что позволяют оптимально сконфигурировать машину под поставленные задачи. Автоматы работают в составе производственной линии и как отдельностоящее оборудование с расширенной базой питателей.",
            path: "/оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов/автоматические-установщики-smd",
            lang: "Подробно..."
        },
        {
            year: "НАСТОЛЬНЫЙ",
            image: ImageThree,
            title: "Установщики SMD начального уровня",
            desc: "Оборудование для поверхностного монтажа для установки электронных компонентов SMD на контактные площадки печатных плат по технологии поверхностного монтажа SMT – автоматы установки компонентов. Даное оборудование для установки электронных компонентов применяется для автоматизации технологии поверхностного монтажа SMT в условиях мелкосерийного производства монтажа печатных плат и для производства прототипов в лабораторных условия или дома. Эксплуатация оборудования не требует особых условий и квалификации и позволяет собирать электронные изделия в гараже или в квартире:).",
            path: "/оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов/расстановщик-smd",
            lang: "Подробно..."
        },
        {
            year: "РУЧНЫЕ",
            image: ImageFore,
            title: "Ручные манипуляторы установки компонентов SMD",
            desc: "Оборудование для поверхностного монтажа для ручной установки электронных компонентов SMD на контактные площадки печатных плат по технологии поверхностного монтажа SMT. Манипулятор может иметь встроенный дозатор паяльной пасты , что позволяет делать нанесение паяльной пасты и установку SMD на одном рабочем месте. Оборудование имеет модульную конструкцию для составления оптимального решения под условия заказчика. Применяется  для установки электронных компонентов по технологии поверхностного монтажа SMT в условиях мелкосерийного производства монтажа печатных плат и производства прототипов.",
            path: "/оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов/манипулятор-установки-компонентов-smd",
            lang: "Подробно..."
        }
    ]
    const contentua = [
        {
            year: "SMART",
            image: ImageOne,
            title: "Автомати встановлення компонентів",
            desc: "Обладнання для поверхневого монтажу, для встановлення електронних компонентів SMD на контактні площадки друкованих плат за технологією поверхневого монтажу SMT - автомати встановлення компонентів SMD. Машини для встановлення електронних компонентів застосовуються для автоматизації технології поверхневого монтажу SMT в умовах серійного виробництва монтажу друкованих плат в складі лінії SMT і як окреме обладнання в умовах дрібносерійного виробництва для виробів з підвищеними вимогами в експлуатації.",
            path: "автоматы-установки-компонентов/juki",
            lang: "Докладно..."
        },
        {
            year: "АВТОМАТИ",
            image: ImageTwo,
            title: "Автомати встановлення компонентів SMD середнього рівня",
            desc: "Автомати встановлення компонентів середнього рівня (mid range) успішно використовуються, як в дрібносерійному так і серійному виробництвах. Машини мають модульну конструкцію і велику кількість додаткового обладнання, що дозволяють оптимально настроїти машину під поставлені завдання. Автомати працюють в складі виробничої лінії і як окреме обладнання з розширеною базою податчиків компонентів.",
            path: "/ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів/автоматичні-установники-smd",
            lang: "Докладно..."
        },
        {
            year: "НАСТІЛЬНІ",
            image: ImageThree,
            title: "Автомати SMD початкового рівня",
            desc: "Обладнання для поверхневого монтажу для встановлення електронних компонентів SMD на контактні площадки друкованих плат за технологією поверхневого монтажу SMT - автомати встановлення компонентів. Дане обладнання для встановлення електронних компонентів застосовується для автоматизації технології поверхневого монтажу SMT в умовах дрібносерійного виробництва монтажу друкованих плат і для виробництва прототипів в лабораторних умови. Експлуатація обладнання не потребує особливих умов і кваліфікації і дозволяє збирати електронні вироби в гаражі або в квартирі :).",
            path: "/ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів/розстановник-smd",
            lang: "Докладно..."
        },
        {
            year: "РУЧНІ",
            image: ImageFore,
            title: "Ручні маніпулятори для компонентів SMD",
            desc: "Обладнання для поверхневого монтажу для ручного встановлення електронних компонентів SMD на контактні площадки друкованих плат за технологією поверхневого монтажу SMT. Маніпулятор може мати вбудований дозатор паяльної пасти, що дозволяє робити нанесення паяльної пасти і встановлення SMD на одному робочому місці. Устаткування має модульну конструкцію для складання оптимального рішення під умови замовника. Застосовується для встановлення електронних компонентів за технологією поверхневого монтажу SMT в умовах дрібносерійного виробництва монтажу друкованих плат і виробництва прототипів.",
            path: "/ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів/маніпулятор-встановлення-компонентів-smd",
            lang: "Докладно..."
        }
    ]
    if (props.lang === "ru") {
        return (
            <SectionWrap>
                <Container>
                    <Row>
                    <Col lg={12}>
                           <h6 style={{textAlign: "justify"}}>Оборудование для поверхностного монтажа для установки электронных компонентов SMD на печатные платы. Ручные и полуавтоматические манипуляторы для установки компонентов применяются в условиях мелкосерийного производства, в производстве прототипов, для лабораторий и учебных заведений. Автоматы установки компонентов начального уровня применяют в словиях мелкосерийного производства, для автоматизации процесов поверхностного монтажа SMT. Автомати установки компонентов для работы в линии, применяют в условиях серийного и крупносерийного производства.</h6>
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
                           <h6 style={{textAlign: "justify"}}>Обладнання для поверхневого монтажу для встановлення електронних компонентів SMD на друковані плати. Ручні і напів-автоматичні маніпулятори для встановлення компонентів застосовуються в умовах дрібносерійного виробництва, у виробництві прототипів, для лабораторій і навчальних закладів. Автомати встановлення компонентів початкового рівня застосовують в умовах дрібносерійного виробництва, для автоматизації процесів поверхневого монтажу SMT. Автомати встановлення компонентів для роботи в лінії, застосовують в умовах серійного і багато серійного виробництва.</h6>
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
