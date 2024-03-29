import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import { SectionWrap } from './style'

const IntroArea = ({ headingStyle, descStyle }) => {
    const getHistoryIntro = useStaticQuery(graphql`
        query GET_HISTORY_INTRO_EN {
            ourHistoryJson(id: {eq: "history-page-intro-en"}) {
                title
                desc
            }
        }
    `)
    const { ourHistoryJson: { title, desc } } = getHistoryIntro
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        {title && <Heading {...headingStyle}>{parse(title)}</Heading>}
                        {desc && <Text {...descStyle}>{desc}</Text>}
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

IntroArea.defaultProps = {
    headingStyle: {
        as: 'h3',
        mb: '20px',
        child: {
            color: 'primary'
        }
    },
    descStyle: {
        maxwidth: '760px',
        m: 'auto'
    }
}

export default IntroArea
