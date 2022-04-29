import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Timeline from '../../../../components/ui/timeline-ru'
import ImageOne from '../../../../data/images/bg/machines/smt/spi/spi.jpg'
import { SectionWrap } from './style'


const TimelineArea = (props) => {
    const content = [
        {
            year: "SPI",
            image: ImageOne,
            title: "Система 3D инспекции",
            desc: "Высокоточная система скоростной автоматической инспекции 3D нанесения паяльной пасты на печатные платы как для работы в  линии SMT, так и для работы вне линии в конфигурации “SPI Island”. Оборудование может завязываться с автоматом для нанесения паяльной пасты. Система инспекции паяльной пасты определяет дефекты нанесения и передает данные погрешности на автоматический принтер для внесения корректировок в технологические параметры нанесения паяльной пасты.  Инновационное программное обеспечение и система обработки статистических данных.",
            path: "/оборудование-для-монтажа/поверхностный-монтаж/инспекция-паяльной-пасты/инспекция-нанесения-пасты",
            lang: "Подробно..."
        }
    ]
    const contentua = [
        {
            year: "SPI",
            image: ImageOne,
            title: "Система 3D інспекції",
            desc: "Високоточна система швидкісної автоматичною інспекції 3D нанесення паяльної пасти на друковані плати, як для роботи в лінії SMT, так і для роботи поза лінією в конфігурації SPI Island. Устаткування може зав'язуватися з автоматом для нанесення паяльної пасти. Система інспекції паяльної пасти визначає дефекти нанесення і передає дані похибки на автоматичний принтер для внесення коригувань в технологічні параметри нанесення паяльної пасти. Інноваційний програмне забезпечення і система обробки статистичних даних.",
            path: "/ua/обладнання-для-монтажу/поверхневий-монтаж/інспекція-паяльної-пасти/інспекція-нанесення-паяльної-пасти",
            lang: "Докладно..."
        }
    ]
    if (props.lang === "ru") {
        return (
            <SectionWrap>
                <Container>
                    <Row>
                    <Col lg={12}>
                           <h6 style={{textAlign: "justify"}}>Автоматическая оптическая инспекция  паяльной пасты (SPI) применяется для определение дефектов печати паяльной пасты, оптимизации процесса нанесения паяльной пасты на контактные площадки и корректировки работы оборудования для нанесения паяльной пасты. Оборудование устанавливается в линии поверхностного монтажа (SMT) после устройства нанесения паяльной пасты. Машина может эксплуатироваться, как отдельностоящее оборудование. Системы автоматической инспекции нанесения паяльной пасты RV-2 от JUKI применяют инновационную технологию  3D  инспекции нанесения паяльной пасты.  Оборудование и учитывают все потребности Заказчиков, от мелкосерийного до крупносерийного производств для любого типа изделия.</h6>
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
                           <h6 style={{textAlign: "justify"}}>Автоматична оптична інспекція паяльної пасти (SPI) застосовується для визначення дефектів друку паяльної пасти, оптимізації процесу нанесення паяльної пасти на контактні площадки і коригування роботи обладнання для нанесення паяльної пасти. Обладнання встановлюється в лінії поверхневого монтажу (SMT) після принтера нанесення паяльної пасти. Машина може експлуатуватися, як окреме обладнання. Системи автоматичного інспекції нанесення паяльної пасти RV-2 від JUKI застосовують інноваційну технологію 3D інспекції нанесення паяльної пасти. Обладнання і враховує всі потреби Замовників, від дрібносерійного до багато серійного виробництв для будь-якого типу вироби.</h6>
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
