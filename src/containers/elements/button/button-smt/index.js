import React from 'react';
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'
import Heading from '../../../../components/ui/heading'
import Button from '../../../../components/ui/button'
import gplayImg from '../../../../data/images/icons/google-play-btn.jpg'
import {SectionWrapper, SectionOne, ButtonGroupWrap, ButtonWrap} from './button-section.style'
 
const ButtonSection = ({headingStyle, buttonDefault, ...props}) => {
    if (props.lang == "ru") {
    return (
        
            <Container>
                <Row>
                    <Col xs={12}>    
                                <ButtonWrap>
                                    <Button {...buttonDefault} fullwidth to ={props.path}>Брошюра для загрузки</Button>
                                </ButtonWrap> 
                    </Col>
                </Row>
            </Container>
        
    )
} else if (props.lang == "uk") {
    return (
        
            <Container>
                <Row>
                    <Col xs={12}>    
                                <ButtonWrap>
                                    <Button {...buttonDefault} fullwidth to ={props.path}>Брошура для завантаження</Button>
                                </ButtonWrap> 
                    </Col>
                </Row>
            </Container>
        
    )
}
}

ButtonSection.propTypes = {
    headingStyle: PropTypes.object,
    buttonDefault: PropTypes.object
}

ButtonSection.defaultProps = {
    headingStyle: {
        as: 'h5',
        mb: '10px'
    },
    buttonDefault: {
        hover: "false",
        m: '10px'
    }
}


export default ButtonSection;