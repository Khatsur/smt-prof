import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Timeline from '../../../../components/ui/timeline-ru'
import ImageOne from '../../../../data/images/bg/materials/solder/flux-500x350.jpg'
import ImageTwo from '../../../../data/images/bg/materials/solder/flux-gel-500x350.jpg'
import { SectionWrap } from './style'


const TimelineArea = (props) => {
    const content = [
        {
            year: "ДЛЯ ВОЛНЫ",
            image: ImageOne,
            title: "Флюс для пайки машинной",
            desc: "Жидкий флюс для пайки машинной используются для флюсования печатной платы непосредственно перед пайкой в машинах для пайки волной припоя и в машинах селективной пайки. Флюс для пайки очищает, подготавливает и защищает металлические поверхности перед процессом пайки, снижают поверхностное папряжение расплавленное припоя для лучшей смачиваемости. Возможно применять для ручной пайки и ремонта.",
            path: "/материалы-для-smt/паяльная-паста-и-припой/флюс-для-пайки/флюс-для-пайки-волной",
            lang: "Подробно..."
        },
        {
            year: "ФЛЮС-ГЕЛЬ",
            image: ImageTwo,
            title: "Флюс-гель для ремонта",
            desc: "Флюс для пайки ручной и ремонта поставляются в жидком виде или в виде аппликатора-карандаша для удобства нанесения. Флюс для пайки ручной имеет те же свойства что и флюс для пайки машинной. Для ремонта и восстановления компонентов типа BGA применяются флюс для пайки в виде флюс-геля.",
            path: "/материалы-для-smt/паяльная-паста-и-припой/флюс-для-пайки/флюс-гель",
            lang: "Подробно..."
        }
    ]
    const contentua = [
        {
            year: "ДЛЯ ХВИЛІ",
            image: ImageOne,
            title: "Флюс для паяння машинного",
            desc: "Рідкий флюс для машинного паяння використовуються для флюсування друкованої плати безпосередньо перед пайкою в машинах для паяння хвилею припою та в машинах селективного паяння. Флюс для паяння очищає, підготовлює та захищає від окислення металеві поверхні перед процесом паяння. Знижує поверхневий натяг розплавлене припою для кращої змочуваності. Можливо застосовувати для ручного паяння та ремонту.",
            path: "/ua/матеріали-для-smt/матеріали-для-паяння/флюс-для-паяння/флюс-для-паяння-хвилею",
            lang: "Докладно..."
        },
        {
            year: "ФЛЮС-ГЕЛЬ",
            image: ImageTwo,
            title: "Флюс-гель для ремонту",
            desc: "Флюс для паяння ручного та ремонту поставляються в рідкому вигляді або у вигляді аплікатора-олівця для зручності нанесення. Флюс для паяння ручної має ті ж властивості, що і флюс для паяння машинної. Для ремонту та відновлення компонентів типу BGA застосовуються флюси для паяння у вигляді флюс-геля.",
            path: "/ua/матеріали-для-smt/матеріали-для-паяння/флюс-для-паяння/флюс-гель",
            lang: "Докладно..."
        }
    ]
    if (props.lang === "ru") {
        return (
            <SectionWrap>
                <Container>
                    <Row>
                    <Col lg={12}>
                           <h6 style={{textAlign: "justify"}}>Флюс для пайки применяется для очистки и подготовки металлических поверхностей перед пайкой. Флюс для пайки улучшает смачиваемость поверхностей расплавленным припоем и защищает поверхности от окисления при высоких температурах. Флюс для пайки в основном применяются для машинной пайки на установках пайки волной расплавленного припоя и на машинах селективной пайки для монтажа компонентов в отверстия плат или для смешанного монтажа. Поставляются в больших емкостях для машинной пайки и в виде аппликаторов-карандашей для ручной пайки и ремонта.</h6>
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
                           <h6 style={{textAlign: "justify"}}>Флюс для паяння застосовується для очищення та підготовки металевих поверхонь перед паянням. Флюс для паяння покращує змочуваність поверхонь розплавленим припоєм та захищає поверхні від окиснення за високих температур. Флюс для паяння в основному застосовуються для машинного паяння на установках пайки хвилею розплавленого припою та на машинах селективного паяння для монтажу компонентів в отвори плат або змішаного монтажу. Поставляються у великих ємностях для машинного паяння та у вигляді аплікаторів-олівців для ручного паяння та ремонту.</h6>
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
