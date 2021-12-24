import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import SectionTitle from '../../../../components/ui/section-title'
import BoxLargeImage from '../../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../../data/images/bg/lines/janets-300x300.jpg'
import image2 from '../../../../data/images/bg/lines/tracemonitor-300x300.jpg'
import image3 from '../../../../data/images/bg/lines/ifs-nx-300x300.jpg'



const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Программные решения для SMT',
            desc: 'Подготовка и оптимизация программ для установки компонентов. Управление производственными линиями. Визуализация производственных показателей',
            path: '/комплексные-решения/программное-обеспечение/janets'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Программное обеспечение для анализа',
            desc: 'Выявление и устранение производственных отклонений. Ранний анализ данных по надежности процессов. Визуализация состояния линии',
            path: '/комплексные-решения/программное-обеспечение/trace-monitor'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Система подготовки питателей',
            desc: 'Отслеживание компонентов (traceability). Программная интеграция всех систем участвующих в подготовке (склад, тележки с питателями, отдельные питатели)',
            path: '/комплексные-решения/программное-обеспечение/ifs-nx'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Программные решения"
                            title="Автоматизация производства<br><span>Поддержка Industry 4.0</span>"
                        />
                    </Col>
                </Row>
                <h6 style={{textAlign: "justify"}}>Комплексные программные решения для обеспечения всего цикла производства электронных изделий – от поступления комплектации и материалов до отгрузки готовой продукции заказчику. Автоматический учет и хранение электронных компонентов, подготовка программ и управление производственными линиями, полное отслеживание комплектации и материалов, управление качеством и много других полезных функций.</h6>
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