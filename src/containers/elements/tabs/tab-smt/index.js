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
                                <NavItem eventKey="our-awards-tab">Опции</NavItem>
                            </TabHeader>
                            <TabContent pt="50px">
                                <TabPane eventKey="our-mission-tab">
                                    <Heading as="h4" mb="20px">Краткое описание</Heading>
                                    <p>{props.techover}</p>
                                    
                                </TabPane>
                                <TabPane eventKey="our-services-tab">
                                    <Heading as="h4" mb="20px">Особенности оборудования</Heading>
                                    <p></p>
                                    <p>
                                     {props.techfeat.map((des) => 
                                     <li key={des.id} >{des.feat}</li>
                                     )}
                                    </p>
                                    
                                </TabPane>
                                <TabPane eventKey="partners-tab">
                                    <Heading as="h4" mb="20px">Технические характеристики</Heading>
                                    <p></p>
                                    <p>
                                     {props.techspec.map((des) => 
                                     <li key={des.id} >{des.spec}</li>
                                     )}
                                    </p>
                                    
                                </TabPane>
                                <TabPane eventKey="our-awards-tab">
                                    <Heading as="h4" mb="20px">Дополнительное оборудование</Heading>
                                    <p></p>
                                    <p>
                                     {props.techoption.map((des) => 
                                     <li key={des.id} >{des.option}</li>
                                     )}
                                    </p>
                                    
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
                            <NavItem eventKey="our-mission-tab">Огляд</NavItem>
                            <NavItem eventKey="our-services-tab">Особливості</NavItem>
                            <NavItem eventKey="partners-tab">Характеристики</NavItem>
                            <NavItem eventKey="our-awards-tab">Опції</NavItem>
                        </TabHeader>
                        <TabContent pt="50px">
                            <TabPane eventKey="our-mission-tab">
                                <Heading as="h4" mb="20px">Короткий опис</Heading>
                                <p>{props.techover}</p>
                                
                            </TabPane>
                            <TabPane eventKey="our-services-tab">
                                <Heading as="h4" mb="20px">Особливості обладнання</Heading>
                                <p></p>
                                    <p>
                                     {props.techfeat.map((des) => 
                                     <li key={des.id} >{des.feat}</li>
                                     )}
                                    </p>
                               
                            </TabPane>
                            <TabPane eventKey="partners-tab">
                                <Heading as="h4" mb="20px">Технічні характеристики</Heading>
                                <p></p>
                                    <p>
                                     {props.techspec.map((des) => 
                                     <li key={des.id} >{des.spec}</li>
                                     )}
                                    </p>
                               
                            </TabPane>
                            <TabPane eventKey="our-awards-tab">
                                <Heading as="h4" mb="20px">Додаткове обладнання</Heading>
                                <p></p>
                                    <p>
                                     {props.techoption.map((des) => 
                                     <li key={des.id} >{des.option}</li>
                                     )}
                                    </p>
                                
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
