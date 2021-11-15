import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxLargeImage from '../../../components/box-large-image/layout-one-ua'
import { SectionWrap } from './section.style'

import image1 from '../../../data/images/bg/machines/wire/cutting.png'
import image2 from '../../../data/images/bg/machines/wire/striping.png'
import image3 from '../../../data/images/bg/machines/wire/crimping.png'


const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: image1,
            title: 'Різання та зачищення проводу і кабелю',
            desc: 'Обладнання для мірного нарізання, чищення проводів і кабелів. Різання, чищення верхнього покриття кабелів і покриття внутрішніх проводів.',
            path: '/ua/обладнання-для-монтажу/обробка-проводу/обладнання-різання-зачищення-проводів'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Зняття ізоляції проводу і кабелю',
            desc: 'Обладнання для чищення проводів. Чищення верхнього покриття кабелів і покриття внутрішніх проводів. Чищення коаксіальних і силових кабелів.',
            path: '/ua/обладнання-для-монтажу/обробка-проводу/машини-зняття-ізоляції'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Обтискання  контактів',
            desc: 'Обладнання для пресування контактів (терміналів). Автоматичне і  напів-автоматичне обладнання для кремпування контактів.',
            path: '/ua/обладнання-для-монтажу/обробка-проводу/обладнання-обжимання-контактів'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Обладнання для оброблення  проводу"
                            title="Автоматизація процесів різання і чищення<br><span>Оброблення проводів і кабелів</span>"
                        />
                    </Col>
                </Row>
                <h6 style={{textAlign: "justify"}}>Виробництво електроніки поки не змогло уникнути проводового монтажу, який важко автоматизувати. Особливо багато часу займають технологічні процеси підготовки проводів та кабелів: різання дроту, зачистка ізоляції, запресування контактів, лудіння. Ці операції не вимагають високої кваліфікації, але займають час і впливають на собівартість виробу. Застосування простих недорогих пристроїв знижує час на обробку проводів та покращує якість заготовок. Обладнання окупає себе за кілька місяців і не потребує спеціального обслуговування та умов експлуатації.</h6>
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