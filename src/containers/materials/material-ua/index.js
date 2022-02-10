import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/materials/cleaning/cleaning-pcb.png'
import image2 from '../../../data/images/bg/materials/cleaning/cleaning-stencil.png'
import image3 from '../../../data/images/bg/materials/cleaning/cleaning-pallete.png'
import image4 from '../../../data/images/bg/materials/cleaning/analitic/zestron-eye-mobile-300x300.jpg'
import image5 from '../../../data/images/bg/materials/cleaning/analitic/flux-test-300x300.jpg'
import image6 from '../../../data/images/bg/materials/solder/solder-paste.png'
import image7 from '../../../data/images/bg/materials/solder/solder-wire.png'
import image8 from '../../../data/images/bg/materials/solder/solder-bars.png'
import image9 from '../../../data/images/bg/materials/solder/solder-flux.png'
import image10 from '../../../data/images/bg/materials/coating/acrylic-coatings.png'
import image11 from '../../../data/images/bg/materials/coating/urethane-coatings.png'
import image12 from '../../../data/images/bg/materials/coating/UV-Curable-Coatings.png'
import image13 from '../../../data/images/bg/materials/coating/silicone-coatings.png'
import image14 from '../../../data/images/bg/materials/coating/synthetic-rubber-coatings.png'


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
        },
        {
            id: 4,
            imageSrc: image4,
            title: 'Контроль концентрації',
            desc: 'Методи та системи для визначення концентрації миючого розчину. Автоматичні системи регулювання та хімічні набори для визначення концентрації',
            path: '/ua/матеріали-для-smt/рідини-для-чищення/методи-контролю-якості-миття-плат'
        },
        {
            id: 5,
            imageSrc: image5,
            title: 'Аналіз чистоти плат',
            desc: 'Аналіз чистоти поверхні друкованих плат на наявність забруднень. Тестові набори, що дозволяють за допомогою зміни кольору поверхні визначити наявність залишків активаторів',
            path: '/ua/матеріали-для-smt/рідини-для-чищення/аналіз-чистоти-поверхні-плат'
        }
    ];
     description = "Матеріали для очищення застосовуються для трьох основний процесів у виробництві електроніки. Очищення зібраних друкованих плат від залишків паяльних матеріалів та інших забруднень в процесі виробництва. У поверхневому монтажі рідини для миття використовуються для очищення трафаретів в принтері (нижнє очищення) і в окремих машинах для миття трафаретів. Окремий розділ складають миючі рідини, які використовуються для миття технологічного оснащення (палети для паяння хвилею припою і для нанесення захисних покриттів) і частин паяльного обладнання (пастки флюсу та ін.)."; 
     subtitle="Матеріали для чищення"
     title="Миття плат і трафаретів <br><span>Технологічні процеси очищення</span>"
} else if (machine === "soldering") {
     boxContents = [
        {
            id: 6,
            imageSrc: image6,
            title: 'Паяльна паста',
            desc: 'Паяльна паста для нанесення на контактні площадки друкованих плат через металевий трафарет. Безсвинцева і що містить свинець.',
            path: '/ua/матеріали-для-smt/матеріали-для-паяння/паяльна-паста'
        },
        {
            id: 7,
            imageSrc: image7,
            title: 'Припій в дроті',
            desc: 'Припій в дроті з флюсом для ручної і механізованого паяння. Безсвинцеві і що містять свинець сплави.',
            path: '/ua/матеріали-для-smt/матеріали-для-паяння/припій-для-паяння/припій-трубчастий'
        },
        {
            id: 8,
            imageSrc: image8,
            title: 'Припій в брусках',
            desc: 'Припій в брусках для завантаження в паяльні ванни машин для паяння хвилею припою і машин для селективного паяння. Різні розміри брусків.',
            path: '/ua/матеріали-для-smt/матеріали-для-паяння/припій-для-паяння/припій-для-хвильової-пайки'
        },
        {
            id: 9,
            imageSrc: image9,
            title: 'Флюс для паяння',
            desc: 'Флюс для машинного паяння, котрий застосовують в машинах для групового паяння: машини для паяння хвилею припою і селективного паяння.',
            path: '/ua/матеріали-для-smt/матеріали-для-паяння/флюс-для-паяння'
        }
    ];
     description = "Матеріали для паяння діляться на три основних види - паяльна паста, припій і флюс. Паяльна паста складається з маленьких кульок припою, флюсу і допоміжних компонентів. Наноситься на контактні площадки друкованих плат через металевий трафарет або за допомогою дозатора. Припій може бути в дроті з флюсом або без флюсу. Припій в дроті застосуються при ручному паянні або для роботизованого паяння за допомогою паяльних роботів. Припій в брусках застосовують для заповнення паяльних ванн машин для групового паяння - машини паяння хвилею припою і машини селективного паяння.";
    subtitle="Матеріали для монтажу компонентів"
    title="Матеріали для паяння<br><span>Монтаж на поверхню плат і в отвори</span>"
} else if (machine === "coating") {
    boxContents = [
        {
            id: 1,
            imageSrc: image10,
            title: 'Акрилові захисні покриття',
            desc: 'Акрилові покриття найбільш застосовувані лаки для вологозахисту електроніки. Матеріал дуже простий в застосуванні і ремонті.',
            path: '/ua/матеріали-для-smt/захисні-покриття/вологозахисні-акрилові-покриття'
        },
        {
            id: 2,
            imageSrc: image11,
            title: 'Уретанові захисні покриття',
            desc: 'Уретанові покриття застосовуються для забезпечення високої хімічної стійкості і захисту від вологи. Одне і двох компонентні.',
            path: '/ua/матеріали-для-smt/захисні-покриття/вологозахисні-уретанові-покриття'
        },
        {
            id: 3,
            imageSrc: image12,
            title: 'Покриття УФ затвердіння',
            desc: 'Інноваційні захисні покриття які мають високу швидкість затвердіння. Висока хімічна стійкість і захист від вологи.',
            path: '/ua/матеріали-для-smt/захисні-покриття/покриття-ультрафіолетового-затвердіння'
        },
        {
            id: 4,
            imageSrc: image13,
            title: 'Силіконові захисні покриття',
            desc: 'Силіконові захисні покриття використовуються для електронних виробів, які експлуатуються при високих температурах.',
            path: '/ua/матеріали-для-smt/захисні-покриття/вологозахисні-силіконові-покриття'
        },
        {
            id: 5,
            imageSrc: image14,
            title: 'Покриття із синтетичної гуми',
            desc: 'Спеціальні покриття які можуть забезпечити особливий захист у порівнянні з традиційними покриттями. Захист від вологи.',
            path: '/ua/матеріали-для-smt/захисні-покриття/синтетична-гума-для-плат'
        }
    ];
    description = "Захисні покриття для електронних плат залежить від вимог до виробу і умов експлуатації електроніки. Матеріали для захисту класифікуються за речовинами, які лежать в основі захисного покриття. Основні типи захисних покриттів, що застосовуються у виробництві електронних виробів. Акрилові покриття - захист від вологи, зручність у використанні та ремонті. Уретанові захисні покриття - хімічна стійкість, є нюанси в застосуванні і важко ремонтувати. Силіконові покриття - термостійкість, є специфіка в застосуванні. УФ затвердіння - висока швидкість затвердіння і точність товщини шару покриття.";
    subtitle="Матеріали для захисту від вологи"
    title="Нанесення захисних покриттів <br><span>Технологічні процеси нанесення покриттів</span>"
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