import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import ContactForm from '../../../components/forms/contact-form-ua'
import {ContactFormWrapper, LeftBox} from './contact-form-area.style'

const ContactFormArea = ({headingStyle, textStyle}) => {
    return (
        <ContactFormWrapper>
            <Container>
                <Row alignitems="center">
                    <Col lg={6}>
                        <LeftBox>
                            <Heading {...headingStyle}>Для додаткової <br/> інформації зв'яжіться <br/> з нашими фахівцями</Heading>
                            <Text {...textStyle}>Нам потрібно лише кілька годин на обробку вашого запиту!</Text>
                        </LeftBox>
                    </Col>
                    <Col lg={6}>
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>
        </ContactFormWrapper>
    )
}

ContactFormArea.propTypes = {
    headingStyle: PropTypes.object,
    textStyle: PropTypes.object
}

ContactFormArea.defaultProps = {
    headingStyle: {
        as: "h3",
        position: "relative",
        pl: '34px',
        lineheight: 1.67,
        fontweight: 600,
        child: {
            color: 'primary'
        },
        layout: 'quote'
    },
    textStyle: {
        mt: '15px',
        fontSize: '18px',
        ml: '34px',
        color: '#696969'
    }
}

export default ContactFormArea;