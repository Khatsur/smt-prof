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
            title: 'Програмні рішення для SMT',
            desc: 'Підготовка та оптимізація програм для встановлення компонентів. Управління виробничими лініями. Візуалізація виробничих показників',
            path: '/ua/комплексні-рішення/програмне-забезпечення/janets'
        },
        {
            id: 2,
            imageSrc: image2,
            title: 'Програмне забезпечення для аналізу',
            desc: 'Виявлення та усунення виробничих відхилень. Ранній аналіз даних щодо надійності процесів. Візуалізація стану лінії',
            path: '/ua/комплексні-рішення/програмне-забезпечення/trace-monitor'
        },
        {
            id: 3,
            imageSrc: image3,
            title: 'Система підготовки живильників',
            desc: 'Відстеження компонентів (traceability). Програмна інтеграція всіх систем, що беруть участь у підготовці (склад, візки з живильниками, окремі живильники)',
            path: '/ua/комплексні-рішення/програмне-забезпечення/ifs-nx'
        }
    ]

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Програмні рішення"
                            title="Автоматизація виробництва<br><span>Підтримка Industry 4.0</span>"
                        />
                    </Col>
                </Row>
                <h6 style={{textAlign: "justify"}}>Комплексні програмні рішення для забезпечення всього циклу виробництва електронних виробів – від надходження комплектації та матеріалів до відвантаження готової продукції до замовника. Автоматичний облік та зберігання електронних компонентів, підготовка програм та управління виробничими лініями, повне відстеження комплектації та матеріалів, управління якістю та багато інших корисних функцій.</h6>
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