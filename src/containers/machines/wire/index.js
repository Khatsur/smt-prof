import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ru'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/wire/cutting.png'
import image2 from '../../../data/images/bg/machines/wire/striping.png'
import image3 from '../../../data/images/bg/machines/wire/crimping.png'



const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Резка и зачистка провода и кабеля',
            desc: 'Оборудование для мерной резки и зачистки проводом и кабелей. Резка, снятие верхнего покрытия кабелей и покрытия внутренних проводов за один проход.',
            path: '/оборудование-для-монтажа/обработка-провода/оборудование-резки-зачистки-проводов'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Зачистка провода и кабеля',
            desc: 'Оборудование для зачистки проводов. Зачистка внешнего покрытия кабелей и покрытия внутренних проводов. Зачистка коаксиальных и силовых кабелей.',
            path: '/оборудование-для-монтажа/обработка-провода/машины-зачистки-проводов'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Опрессовка контактов',
            desc: 'Оборудование для обжимки терминалов. Автоматическое и полу-автоматическое оборудование для кремповки контактов. Опрессовка контактов в россыпи.',
            path: '/оборудование-для-монтажа/обработка-провода/оборудование-опрессовки-контактов'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Оборудование для обработки провода"
                            title="Автоматизация процессов резки и зачистки<br><span>Обработка проводов и кабелей</span>"
                        />
                    </Col>
                </Row>
                <h6 style={{textAlign: "justify"}}>Производство электроники пока не смогло уйти от проводного монтажа, который трудно автоматизировать. Особенно много времени занимают технологические процессы подготовки проводов и кабелей: резка провода, зачистка изоляции, запрессовка контактов, лужение выводов. Эти операции не требую высокой квалификации, но занимают существенно время и влияют на себестоимость изделия. Применение простых недорогих устройств снижает время подготовки проводов и улучшаю качество заготовок.  Оборудование окупает себя за несколько месяцев и не требует специального обслуживания и условий эксплуатации.</h6>
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