import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Timeline from '../../../../components/ui/timeline-ru'
import ImageOne from '../../../../data/images/bg/materials/solder/indium-8-9hf-500x350.jpg'
import ImageTwo from '../../../../data/images/bg/materials/solder/indium6-3-500x350.jpg'
import ImageThree from '../../../../data/images/bg/materials/solder/indium6-3-500x350.jpg'
import { SectionWrap } from './style'


const TimelineArea = (props) => {
    const content = [
        {
            year: "БЕЗСВИНЕЦ",
            image: ImageOne,
            title: "Бессвинцовые паяльные пасты",
            desc: "Паяльные пасты разработанные специально для обеспечения качественной пайки при повышенной температуре такими припоями, как Sn/Ag/Cu, Sn/Ag и другими сплавами совместимыми с безсвинцовой технологией. Паста обеспечивает высокое качество трафаретной печати для большинства существующих процессов. Отличается высокой пригодностью для электрического контроля щупами, что минимизирует количество неверно определенных ошибок во время теста. В большинстве случаев остатки  флюса после оплавления не требуют отмывки.",
            path: "/материалы-для-smt/паяльная-паста-и-припой/паяльная-паста/бессвинцовая-паста",
            lang: "Подробно..."
        },
        {
            year: "СВИНЦОВЫЕ",
            image: ImageTwo,
            title: "Свинцовые паяльные пасты",
            desc: "Паяльные пасты содержащая в своем составе припой со сплавами свинеца. Паста хорошо подходит, как для нанесения на высокоскоростных автоматах для нанесения паяльной пасты, так и для ручной печати. Паяльная паста долго сохраняет клеящие свойства после нанесения на плату и обеспечивает хорошую пайку и смачивание  различных типов металлизации,  по покрытиям свинцовых и бессвинцовых компонентов.",
            path: "/материалы-для-smt/паяльная-паста-и-припой/паяльная-паста/безотмывочная-паяльная-паста",
            lang: "Подробно..."
        },
        {
            year: "ВОДНЫЕ",
            image: ImageThree,
            title: "Водосмываемые паяльные пасты",
            desc: "Водосмываемые паяльные паста на основе активных водосмываемых флюсов. Обеспечивает качественную пайку на различных типах металлизации и на окисленных поверхностях. В пасте используются свинцовые припои  SnPb/SnPbAg. Паста обеспечивает высокое качество трафаретной печати для машинного и ручного нанесения через металлический трафарет. Остатки флюса после пайки требуют обязательной отмывки в течении 72 часов. Предпочтительно машинная струйная или ультразвуковая отмывка печатных плат после пайки, в моющей жидкости с черновым и чистовым полосканием в деионизированной воде.",
            path: "/материалы-для-smt/паяльная-паста-и-припой/паяльная-паста/водосмываемая-паяльная-паста",
            lang: "Подробно..."
        }
    ]
    const contentua = [
        {
            year: "БЕЗСВИНЦЕВІ",
            image: ImageOne,
            title: "Безсвинцеві паяльні пасти",
            desc: "Паяльні пасти розроблені спеціально для забезпечення якісного паяння за підвищеної температури такими припоями, як Sn/Ag/Cu, Sn/Ag та іншими сплавами сумісними з безсвинцевою технологією. Паста забезпечує високу якість трафаретного друку для більшості існуючих процесів. Відрізняється високою придатністю для електричного контролю щупами, що мінімізує кількість помилок під час тесту. Найчастіше залишки флюсу після оплавлення не вимагають відмивання.",
            path: "/ua/матеріали-для-smt/матеріали-для-паяння/паяльна-паста/безсвинцева-паста",
            lang: "Докладно..."
        },
        {
            year: "СВИНЦЕВІ",
            image: ImageTwo,
            title: "Свинцеві паяльні пасти",
            desc: "Паяльні пасти, що містять у своєму складі припій зі сплавами свинцю. Паста добре підходить як для нанесення на високошвидкісних автоматах для нанесення паяльної пасти, так і для ручного друку. Паяльна паста довго зберігає клеючі властивості після нанесення на плату і забезпечує хороше паяння та змочування різних типів металізації, по покриттям свинцевих та безсвинцевих компонентів.",
            path: "/ua/матеріали-для-smt/матеріали-для-паяння/паяльна-паста/безвідмивна-паяльна-паста",
            lang: "Докладно..."
        },
        {
            year: "ВОДОЗМИВНІ",
            image: ImageThree,
            title: "Водозмивані паяльні пасти",
            desc: "Водозмивні паяльні паста на основі активних флюсів. Забезпечують якісну пайку на різних типах металізації та на окислених поверхнях. У пасті використовуються свинцеві припої SnPb/SnPbAg. Паста забезпечує високу якість трафаретного друку для машинного та ручного нанесення через металевий трафарет. Залишки флюсу після паяння вимагають обов'язкового відмивання протягом 72 годин. Переважно машинне. Струменеве або ультразвукове відмивання друкованих плат після паяння, в миючій рідині з чорновим і чистовим полосканням в деіонізованій воді.",
            path: "/ua/матеріали-для-smt/матеріали-для-паяння/паяльна-паста/водозмивана-паяльна-паста",
            lang: "Докладно..."
        }
    ]
    if (props.lang === "ru") {
        return (
            <SectionWrap>
                <Container>
                    <Row>
                    <Col lg={12}>
                           <h6 style={{textAlign: "justify"}}>Паяльные пасты - это основной материал для поверхностного монтажа электронных компонентов на платы (SMT). Современные паяльные пасты в основном разработаны для скоростного нанесения на автоматических принтерах паяльной пасты через металлический трафарет. Есть специальное исполнение для нанесения в автоматическом дозаторе. При соблюдении рекомендуемого температурного профиля после оплавления паяльной пасты, на поверхности печатной платы остаются минимальные остатки не требующие отмывки. Остатки не препятствуют проведению тестов с помощью щупов.</h6>
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
                           <h6 style={{textAlign: "justify"}}>Паяльні пасти – це основний матеріал для поверхневого монтажу електронних компонентів на плати (SMT). Сучасні паяльні пасти переважно розроблені для швидкісного нанесення на автоматичних принтерах паяльної пасти через металевий трафарет. Існує спеціальне виконання для нанесення в автоматичному дозаторі. При дотриманні рекомендованого температурного профілю після оплавлення паяльної пасти, на поверхні друкованої плати залишаються мінімальні залишки, що не потребують відмивання. Залишки не перешкоджають проведенню тестів за допомогою щупів.</h6>
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
