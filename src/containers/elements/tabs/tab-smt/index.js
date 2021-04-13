import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Tabs, { TabHeader, NavItem, TabContent, TabPane } from '../../../../components/ui/tabs/layout-one'
import { SectionWrap } from './style'

const TabsSection = (props) => {
    if (props.lang == "ru") 
    {return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Heading mb="40px" textalign="center">Спецификация оборудования</Heading>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Tabs defaultActiveKey="our-mission-tab">
                            <TabHeader>
                                <NavItem eventKey="our-mission-tab">Обзор</NavItem>
                                <NavItem eventKey="our-services-tab">Особенности</NavItem>
                                <NavItem eventKey="partners-tab">Характеристики</NavItem>
                                <NavItem eventKey="our-awards-tab">Документация</NavItem>
                            </TabHeader>
                            <TabContent pt="50px">
                                <TabPane eventKey="our-mission-tab">
                                    <Heading as="h4" mb="20px">Краткое описание</Heading>
                                    <p>{props.techover}</p>
                                    <p>The studio was keen to create an identity that would not interfere with any of the existing brands, settling on a helicoid system that can be easily adapted to “work with any colour system”. The studio consulted with the various brands throughout the process. (Source: designweek.co.uk)</p>
                                </TabPane>
                                <TabPane eventKey="our-services-tab">
                                    <Heading as="h4" mb="20px">Особенности оборудования</Heading>
                                    <p>{props.techspec}</p>
                                    <p>Advancements in technology – including machine-to-machine communications between smart sensors, referred to as ‘The Internet of Things’. For example, appliances in the home that can be monitored and controlled wirelessly by the homeowner wherever they are.</p>
                                </TabPane>
                                <TabPane eventKey="partners-tab">
                                    <Heading as="h4" mb="20px">Технические характеристики</Heading>
                                    <p>Market development – increasing market share in new markets such as servers and networking equipment. ARM’s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet.</p>
                                    <p>Market development – increasing market share in new markets such as servers and networking equipment. ARM’s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet.</p>
                                </TabPane>
                                <TabPane eventKey="our-awards-tab">
                                    <Heading as="h4" mb="20px">Информация для загрузки</Heading>
                                    <p>This case study will demonstrate how ARM’s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners.</p>
                                    <p>This case study will demonstrate how ARM’s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners.</p>
                                </TabPane>
                            </TabContent>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
} else if (props.lang == "ua") 
{return (
    <SectionWrap>
        <Container>
            <Row>
                <Col lg={12}>
                    <Heading mb="40px" textalign="center">Специфікація обладнання</Heading>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Tabs defaultActiveKey="our-mission-tab">
                        <TabHeader>
                            <NavItem eventKey="our-mission-tab">Обзор</NavItem>
                            <NavItem eventKey="our-services-tab">Особенности</NavItem>
                            <NavItem eventKey="partners-tab">Характеристики</NavItem>
                            <NavItem eventKey="our-awards-tab">Документация</NavItem>
                        </TabHeader>
                        <TabContent pt="50px">
                            <TabPane eventKey="our-mission-tab">
                                <Heading as="h4" mb="20px">Краткое описание</Heading>
                                <p>{props.techover}</p>
                                <p>The studio was keen to create an identity that would not interfere with any of the existing brands, settling on a helicoid system that can be easily adapted to “work with any colour system”. The studio consulted with the various brands throughout the process. (Source: designweek.co.uk)</p>
                            </TabPane>
                            <TabPane eventKey="our-services-tab">
                                <Heading as="h4" mb="20px">Особенности оборудования</Heading>
                                <p>{props.techspec}</p>
                                <p>Advancements in technology – including machine-to-machine communications between smart sensors, referred to as ‘The Internet of Things’. For example, appliances in the home that can be monitored and controlled wirelessly by the homeowner wherever they are.</p>
                            </TabPane>
                            <TabPane eventKey="partners-tab">
                                <Heading as="h4" mb="20px">Технические характеристики</Heading>
                                <p>Market development – increasing market share in new markets such as servers and networking equipment. ARM’s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet.</p>
                                <p>Market development – increasing market share in new markets such as servers and networking equipment. ARM’s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet.</p>
                            </TabPane>
                            <TabPane eventKey="our-awards-tab">
                                <Heading as="h4" mb="20px">Информация для загрузки</Heading>
                                <p>This case study will demonstrate how ARM’s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners.</p>
                                <p>This case study will demonstrate how ARM’s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners.</p>
                            </TabPane>
                        </TabContent>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    </SectionWrap>
)
}
}

export default TabsSection
