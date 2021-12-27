import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/coating/selective-coating.png'
import image2 from '../../../data/images/bg/machines/coating/dip-coating.png'
import image3 from '../../../data/images/bg/machines/coating/spray-coating.png'
import image4 from '../../../data/images/bg/machines/coating/curing.jpg'
import image5 from '../../../data/images/bg/machines/coating/curing-con.jpg'
import image6 from '../../../data/images/bg/machines/coating/coating-aoi.jpg'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Селективное нанесение',
            desc: 'Оборудование для селективного нанесения влагозащитных покрытий на печатные платы. Машины для работы в линии и настольные',
            path: '/оборудование-для-монтажа/влагозащита-электроники/селективная-влагозащита'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Нанесение погружением',
            desc: 'Оборудование для нанесения защитных покрытий методом погружения. Безопасное исполнение. Машины с пневматическим приводом.',
            path: '/оборудование-для-монтажа/влагозащита-электроники/влагозащита-погружением'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Ручное нанесения покрытий',
            desc: 'Бюджетные решения для нанесения влагозащитных покрытий на электронные блоки. Системы для ручного нанесения распылением.',
            path: '/оборудование-для-монтажа/влагозащита-электроники/нанесение-защитных-покрытий'
        },
        {
            id: 4,
            imageSrc: image4,
            title: 'Отверждения покрытий',
            desc: 'Оборудование для отверждения защитных покрытий в УФ и ИК печах конвейерного типа. Машины для работы в составе линии',
            path: '/оборудование-для-монтажа/влагозащита-электроники/оборудование-для-отверждения'
        },
        {
            id: 5,
            imageSrc: image5,
            title: 'Конвейры для линии нанесения',
            desc: 'Оборудование для перемещения плат в линии для нанесения защитных покрытий. Конвейеры имеют специальное исполнение.',
            path: '/оборудование-для-монтажа/влагозащита-электроники/конвейеры-защитных-покрытий'
        },
        {
            id: 6,
            imageSrc: image6,
            title: 'Оптическая инспекция',
            desc: 'Оборудование для автоматической оптической инспекции нанесения защитных покрытий на платы',
            path: '/оборудование-для-монтажа/влагозащита-электроники/инспекция-нанесения-защитных-покрытий'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Оборудование для нанесения защитных покрытий"
                            title="Автоматизация процессов нанесения<br><span>Влагозащита электроники</span>"
                        />
                    </Col>
                </Row>
                <h6 style={{textAlign: "justify"}}>Существует множество изделий электроники, которые эксплуатируются в различных неблагоприятных условия. Это не обязательно тропические страны. Под капотом нашего автомобиля становится все больше электроники, а условия работы сходны с полетом в космос. Не зависимо от условия изделия должно работать надежно и долго. Для защиты электронных сборок применяют различные покрытия в зависимости от требований к эксплуатации изделия. Платы могут покрываться целиком или частично. Могут покрываться отдельные чувствительные компоненты. Основной рынок применения влагозащитных покрытий это: автомобильная электроника, оборонная промышленность, авиастроение, LED дисплеи и освещение, альтернативные источники электроэнергии.</h6>
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