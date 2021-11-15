import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/inspection/aoi-inspection.png'
import image2 from '../../../data/images/bg/machines/inspection/spi-inspection.png'
import image3 from '../../../data/images/bg/machines/inspection/coating-inspection.png'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Инспекция монтажа компонентов – AOI',
            desc: 'Оборудование для автоматической оптической инспекции качества монтажа компонентов. Определение геометрии паянных соединений.',
            path: '/machines/smt'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Инспекция нанесения пасты – SPI',
            desc: 'Оборудование для автоматической оптической инспекции качества нанесения паяльной пасты на контактные площадки печатных плат.',
            path: '/machines/smt'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Инспекция нанесения покрытий',
            desc: 'Оборудование для автоматической оптической инспекции качества нанесения защитных покрытий на собранные электронные блоки.',
            path: '/machines/smt'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Оборудование для оптической инспекции "
                            title="Автоматизация процессов контроля<br><span>Инспекция нанесения пасты и монтажа</span>"
                        />
                    </Col>
                </Row>
                <h6 style={{textAlign: "justify"}}>Автоматическая оптическая инспекция – передовое решение для технологических процессов управления качеством и показатель высокого уровня организации производства. Системы применяются для контроля нанесения паяльной пасты на печатные плати (SPI) и для контроля установки и монтажа электронных компонентов (AOI). По принципу работы оборудование AOI делится на два основных типа: сканирующие на базе сканера – 2D и видео на базе видеокамер – 3D. Системы могут иметь настольное исполнение для мелкосерийного производства и конвейерную конструкцию для работы в линии. Конвейерные машины совместно с устройствами загрузки / выгрузки плат могут составлять линиию AOI для автономного обслуживания несколько производственных линий. Автоматическая оптическая инспекция позволяет полность исключить человеческий фактор и  существенно снижает уровень брака на ранних стадия производства изделия.</h6>
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