import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/coating/selective-coating.png'
import image2 from '../../../data/images/bg/machines/coating/dip-coating.png'
import image3 from '../../../data/images/bg/machines/coating/spray-coating.png'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Селективное нанесение',
            desc: 'Оборудование для селективного нанесения влагозащитных покрытий на печатные платы. Машины для работы в линии и настольные',
            path: '/machines/smt'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Нанесение погружением',
            desc: 'Оборудование для нанесения защитных покрытий методом погружения. Безопасное исполнение. Машины с пневматическим приводом.',
            path: '/machines/smt'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Ручное нанесения покрытий',
            desc: 'Бюджетные решения для нанесения влагозащитных покрытий на электронные блоки. Системы для ручного нанесения распылением.',
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
                            subtitle="Оборудование для нанесения защитных покрытий"
                            title="Автоматизация процессов нанесения<br><span>Влагозащита электроники</span>"
                        />
                    </Col>
                </Row>
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