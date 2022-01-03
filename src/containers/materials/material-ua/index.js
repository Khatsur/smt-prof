import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/materials/cleaning/cleaning-pcb.png'
import image2 from '../../../data/images/bg/materials/cleaning/cleaning-stencil.png'
import image3 from '../../../data/images/bg/materials/cleaning/cleaning-pallete.png'
import image4 from '../../../data/images/bg/machines/smt/smt-spi.png'
import image5 from '../../../data/images/bg/machines/smt/smt-aoi.png'
import image6 from '../../../data/images/bg/machines/smt/smt-conveyer.png'
import image7 from '../../../data/images/bg/machines/cleaning/pcb-cleaning.png'
import image8 from '../../../data/images/bg/machines/cleaning/stencil-cleaning.png'
import image9 from '../../../data/images/bg/machines/cleaning/pallete-cleaning.png'


const BoxSection = ({ sectionTitleStyle, machine, linkStyle, sectionBottomStyle }) => {
    let boxContents = [];
    let description = "";
    let subtitle = "";
    let title = "";
    if (machine === "cleaning") {
    boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Миття плат',
            desc: 'Миючі рідини для очищення друкованих плат після паяння. Багаторазові водні розчини з можливістю регенерації активних властивостей.',
            path: '/ua/матеріали-для-smt/рідини-для-чищення/рідини-для-відмивання-друкованих-плат'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Миття трафаретів',
            desc: 'Миючі рідини для очищення трафаретів для нанесення пасти. Матеріали для використання в принтера паяльної пасти і окремо.',
            path: '/ua/матеріали-для-smt/рідини-для-чищення/рідина-для-очищення-трафаретів'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Миття устаткування',
            desc: 'Миючі рідини для очищення технологічної оснастки для пайки (палети) і для нанесення захисних покриттів. Матеріали для проведення ТО.',
            path: '/ua/матеріали-для-smt/рідини-для-чищення/рідина-для-очищення-обладнання'
        }
    ];
     description = "Матеріали для очищення застосовуються для трьох основний процесів у виробництві електроніки. Очищення зібраних друкованих плат від залишків паяльних матеріалів та інших забруднень в процесі виробництва. У поверхневому монтажі рідини для миття використовуються для очищення трафаретів в принтері (нижнє очищення) і в окремих машинах для миття трафаретів. Окремий розділ складають миючі рідини, які використовуються для миття технологічного оснащення (палети для паяння хвилею припою і для нанесення захисних покриттів) і частин паяльного обладнання (пастки флюсу та ін.)."; 
     subtitle="Матеріали для чищення"
     title="Миття плат і трафаретів <br><span>Технологічні процеси очищення</span>"
} else if (machine === "soldering") {
     boxContents = [
        {
            id: 1,
            imageSrc: image4,
            title: 'Оборудование для мойки плат',
            desc: 'Оборудование для автоматической мойки плат, электронных сборок. Машины для струйной и ультразвуковой очистки печатных плат.',
            path: '/оборудование-для-монтажа/оборудование-для-мойки/отмывка-печатных-плат'
        },
        {
            id: 2,
            imageSrc: image5,
            title: 'Оборудование для мойки трафаретов',
            desc: 'Оборудование для автоматической мойки трафаретов для нанесения паяльной пасты. Струйные полностью автоматические машины.',
            path: '/оборудование-для-монтажа/оборудование-для-мойки/отмывка-трафаретов'
        },
        {
            id: 3,
            imageSrc: image6,
            title: 'Оборудование для мойки оснастки',
            desc: 'Оборудование для мойки технологической оснастки: паллеты для волны, паллет для нанесения покрытий и частей машин.',
            path: '/оборудование-для-монтажа/оборудование-для-мойки/мойка-паллет-кареток'
        }
    ];
     description = "Оборудование для отмывки печатных плат и трафаретов применяют для отмывки после пайки остатков флюсов и других загрязнений с печатных плат и остатков паяльной пасты с апертур трафаретов. Как правило, оборудование для отмывки печатных плат используется для изделий требующих повышенной надежности в эксплуатации и работающих в неблагоприятных климатических условиях: автомобильная электроника, системы жизнеобеспечения, военная техника, медицинская техника, промышленная автоматика и д.р. По принципу работы оборудование для отмывки печатных плат делится на ультразвуковое и струйное.";
     subtitle = "Оборудование для мойки плат и трафаретов";
     title = "Автоматизация процессов очистки<br><span>Платы, трафареты, паллеты</span>";
} else if (machine === "coating") {
    boxContents = [
        {
            id: 1,
            imageSrc: image7,
            title: 'Установщики в отверстия плат',
            desc: 'Оборудование для автоматической установки электронных компонентов в отверстия печатных плат. Обрезка и гибка выводов при установке.',
            path: '/оборудование-для-монтажа/монтаж-в-отверстия/установщик-компонентов-в-отверстия'
        },
        {
            id: 2,
            imageSrc: image8,
            title: 'Машины селективной пайки',
            desc: 'Оборудование для селективной пайки электронных компонентов монтируемых в отверстия печатных плат.',
            path: '/оборудование-для-монтажа/монтаж-в-отверстия/селективная-пайка'
        },
        {
            id: 3,
            imageSrc: image9,
            title: 'Машины пайки волной припоя',
            desc: 'Оборудование для пайки электронных компонентов монтируемых в отверстия печатных плат волной расплавленного припоя.',
            path: '/оборудование-для-монтажа/монтаж-в-отверстия/пайка-волной-припоя'
        }
    ];
    description = "Монтаж электронных компонентов в отверстия печатных плат  (THT) - это классическая технология монтажа электронных компонентов, которая активно применятся до сегодняшнего времени. Монтаж в отверстия включает в себя два основных технологических процесса. Установка электронных компонентов в отверстия печатных плат. Для автоматизации процессов установки компонентов применяются специальные автоматические установщики в отверстия. Групповая пайка на машине пайки волной припоя или селективная пайка на автоматической машине для селективной пайки.";
     subtitle = "Оборудование для монтажа в отверстия";
     title = "Автоматизация сборки плат<br><span>Выводной монтаж</span>";
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