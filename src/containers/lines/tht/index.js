import React from 'react'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Timeline from '../../../components/ui/timeline-ru'
import ImageOne from '../../../data/images/bg/machines/tht/inline-selective.jpg'
import ImageTwo from '../../../data/images/bg/machines/tht/tht-auto.jpg'
import { SectionWrap } from './style'


const TimelineArea = (props) => {
    const content = [
        {
            year: "РУЧНОЙ МОНТАЖ",
            image: ImageOne,
            title: "Ручная установка компонентов в отверстия",
            desc: "В условия серийного и мелкосерийного производства монтаж электронных компонентов в отверстия плат может выполнятся монтажниками. Для этого организуются специальные рабочие места. Рабочие места для установки компонентов в отверстия могут быть отдельностоящими или организованы в конвейер. Конвейер состоит из отдельных сегментов, где размещается рабочее место монтажника. Далее по конвейеру плата с компонентами поступает на оборудование для пайки (машина для селективной пайки или машина для пайки волной припоя.",
            path: "/комплексные-решения/линия-выводного-монтажа/ручной-монтаж-компонентов",
            lang: "Подробно..."
        },
        {
            year: "МАШИННЫЙ МОНТАЖ",
            image: ImageTwo,
            title: "Автоматическая установка компонентов в отверстия",
            desc: "Для полной автоматизации установки электронных компонентов применяются специальные установщики компонентов в отверстия плат. Если раньше это были большие громоздкие машины, то сейчас это компактное оборудование которое может интегрироваться в обычную линии поверхностного монтажа. Многозадачные машину устанавливаю компоненты в отверстия плат и на поверхность плат в одном конструктиве.  Далее плата с установленными компонентами поступает на оборудование для пайки",
            path: "/комплексные-решения/линия-выводного-монтажа/автоматический-монтаж-компонентов",
            lang: "Подробно..."
        }
    ]
    const contentua = [
        {
            year: "РУЧНИЙ МОНТАЖ",
            image: ImageOne,
            title: "Ручне встановлення компонентів в отвори",
            desc: "В умовах серійного та дрібносерійного виробництва монтаж електронних компонентів в отворах плат може виконуватись монтажниками. І тому організуються спеціальні робочі місця. Робочі місця для встановлення компонентів в отвори можуть бути окремими або організовані в конвеєр. Конвеєр складається з окремих сегментів, де розміщується робоче місце монтажника. Далі по конвеєру плата з компонентами надходить на обладнання для паяння (машина для селективного паяння або машина для паяння хвилею припою).",
            path: "/ua/комплексні-рішення/лінія-монтажу-в-отвори/ручний-монтаж-компонентів",
            lang: "Докладно..."
        },
        {
            year: "АВТОМАТИЧНИЙ МОНТАЖ",
            image: ImageTwo,
            title: "Автоматичне встановлення компонентів в отвори",
            desc: "Для повної автоматизації встановлення електронних компонентів  застосовуються спеціальні установники компонентів в отвори плат. Якщо раніше це були великі громіздкі машини, то зараз це компактне обладнання, яке може інтегруватися в звичайну лінію поверхневого монтажу. Багатозадачні машини встановлюють компоненти в отвори плат та на поверхню плат в одному конструктиві. Далі плата із встановленими компонентами надходить на обладнання для паяння",
            path: "/ua/комплексні-рішення/лінія-монтажу-в-отвори/автоматичний-монтаж-компонентів",
            lang: "Докладно..."
        }
    ]
    if (props.lang === "ru") {
        return (
            <SectionWrap>
                <Container>
                    <Row>
                    <Col lg={12}>
                           <h6 style={{textAlign: "justify"}}>Несмотря на стремительное развитие технологии поверхностного монтажа SMT монтаж электронных компонентов в отверстия печатных плат не умер. Благодаря развитию автомобильной электроники, электромобилей увеличилось количество силовых блоков у наших автомобилях которые требуют крупносерийного производства и высококачественного выводного монтажа. Линии выводного монтажа могут организовываться в условиях серийного производства с машинной или ручной установкой компонентов в отверстия и в условиях мелкосерийного производства  монтажа плат с отдельными машинами</h6>
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
                           <h6 style={{textAlign: "justify"}}>Незважаючи на стрімкий розвиток технології поверхневого монтажу SMT, монтаж електронних компонентів в отвори друкованих плат не помер. Завдяки розвитку автомобільної електроніки, електромобілів збільшилася кількість силових блоків у наших автомобілях, які вимагають великосерійного виробництва та високоякісного вивідного монтажу. Лінії монтажу в отвори можуть організовуватися в умовах серійного виробництва з автоматичною і ручною установкою компонентів в отвори та в умовах дрібносерійного виробництва монтажу плат з окремими машинами</h6>
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
