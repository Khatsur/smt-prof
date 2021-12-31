import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/materials/coating/acrylic-coatings.png'
import image2 from '../../../data/images/bg/materials/coating/urethane -coatings.png'
import image3 from '../../../data/images/bg/materials/coating/UV-Curable-Coatings.png'
import image4 from '../../../data/images/bg/materials/coating/silicone-coatings.png'
import image5 from '../../../data/images/bg/materials/coating/synthetic-rubber-coatings.png'
import image6 from '../../../data/images/bg/materials/coating/water-based-coatings.png'



const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Акриловые защитные покрытия',
            desc: 'Акриловые покрытия наиболее широко применяемые лаки для влагозащиты электроники. Материал очень прост в применении и ремонте.',
            path: '/материалы-для-smt/защитные-покрытия/влагозащитные-акриловые-покрытия'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Уретановые покрытия',
            desc: 'Уретановые покрытия применяются для обеспечения высокой химической стойкости и защиты от влаги. Одно и двух компонентные.',
            path: '/материалы-для-smt/защитные-покрытия/влагозащитные-уретановые-покрытия'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Покрытия УФ отверждения',
            desc: 'Инновационные защитные покрытия которые имеют высокую скорость отверждения. Высокая химическая стойкость и защита от влаги.',
            path: '/материалы-для-smt/защитные-покрытия/покрытия-ультрафиолетового-отверждения'
        },
        {
            id: 4,
            imageSrc: image4,
            title: 'Силиконовые защитные покрытия',
            desc: 'Силиконовые защитные покрытия используются для электронных изделий, которые эксплуатируются при высоких температурах.',
            path: '/материалы-для-smt/защитные-покрытия/влагозащитные-силиконовые-покрытия'
        },
        {
            id: 5,
            imageSrc: image5,
            title: 'Синтетическая резина',
            desc: 'Специальные покрытия которые могут обеспечить особенную защиту по сравнении с традиционными покрытиями. Защита от влаги.',
            path: '/синтетическая-резина-для-плат'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Материалы для влагозащиты"
                            title="Нанесение защитных покрытий <br><span>Технологические процессы нанесения покрытий</span>"
                        />
                    </Col>
                </Row>
                Защитные покрытия для электронных сборок зависит от требований к изделия и условий эксплуатации электроники. Материалы для защиты классифицируются по материалам, которые лежат в основе защитного покрытия. Основные типы защитных покрытий применяемые в производстве электронных изделий. Акриловые покрытия – защита от влаги, удобство в применении и ремонте. Уретановые защитные покрытия – химическая стойкость, есть нюансы в применении и тяжело ремонтировать. Силиконовые покрытия – термостойкость, есть специфика в применении. УФ отверждения – высокая скорость отвердения и точность толщины слоя покрытия. 
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