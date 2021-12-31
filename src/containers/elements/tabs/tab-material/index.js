import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Tabs, { TabHeader, NavItem, TabContent, TabPane } from '../../../../components/ui/tabs/layout-one'
import { SectionWrap } from './style'

const text = {
    size: 'fontSize: 17'
};
const TabsSection = (props) => {
    if (props.lang == "ru") 
    {return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Heading mb="40px" textalign="center">Спецификация материала</Heading>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Tabs defaultActiveKey="our-mission-tab">
                            <TabHeader>
                                <NavItem eventKey="our-mission-tab">Обзор</NavItem>
                                <NavItem eventKey="our-services-tab">Особенности</NavItem>
                                <NavItem eventKey="partners-tab">Характеристики</NavItem>
                                <NavItem eventKey="our-awards-tab">Технология</NavItem>
                            </TabHeader>
                            <TabContent pt="50px">
                                <TabPane eventKey="our-mission-tab">
                                    <Heading as="h4" mb="20px">Краткое описание</Heading>
                                    <p style={{fontWeight: "bold", fontSize: 17}}>{props.techover_title}</p>
                                    <p style={{fontSize: 17}}>{props.techover}</p>
                                    
                                </TabPane>
                                <TabPane eventKey="our-services-tab">
                                    <Heading as="h4" mb="20px">Особенности материала</Heading>
                                    <p style={{fontWeight: "bold", fontSize: 17}}>{props.techfeat_title}</p>
                                    <p style={{fontSize: 17}}>
                                     {props.techfeat.map((des) => 
                                     <li key={des.id} >{des.feat}</li>
                                     )}
                                    </p>
                                    
                                </TabPane>
                                <TabPane eventKey="partners-tab">
                                    <Heading as="h4" mb="20px">Технические характеристики</Heading>
                                    <p></p>
                                    <p style={{fontSize: 17}}>
                                     {props.techspec.map((des) => 
                                     <li key={des.id} >{des.spec}</li>
                                     )}
                                    </p>
                                    
                                </TabPane>
                                <TabPane eventKey="our-awards-tab">
                                    <Heading as="h4" mb="20px">Технология применения </Heading>
                                    <p></p>
                                    <p style={{fontSize: 17}}>
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
} else if (props.lang == "uk") 
{return (
    <SectionWrap>
        <Container>
            <Row>
                <Col lg={12}>
                    <Heading mb="40px" textalign="center">Специфікація матеріалу</Heading>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Tabs defaultActiveKey="our-mission-tab">
                        <TabHeader>
                            <NavItem eventKey="our-mission-tab">Огляд</NavItem>
                            <NavItem eventKey="our-services-tab">Особливості</NavItem>
                            <NavItem eventKey="partners-tab">Характеристики</NavItem>
                            <NavItem eventKey="our-awards-tab">Технологія</NavItem>
                        </TabHeader>
                        <TabContent pt="50px">
                            <TabPane eventKey="our-mission-tab">
                                <Heading as="h4" mb="20px">Короткий опис</Heading>
                                <p style={{fontWeight: "bold", fontSize: 17}}>{props.techover_title}</p>
                                <p style={{fontSize: 17}}>{props.techover}</p>
                                
                            </TabPane>
                            <TabPane eventKey="our-services-tab">
                                <Heading as="h4" mb="20px">Особливості матеріалу</Heading>
                                <p style={{fontWeight: "bold", fontSize: 17}}>{props.techfeat_title}</p>
                                    <p style={{fontSize: 17}}>
                                     {props.techfeat.map((des) => 
                                     <li key={des.id} >{des.feat}</li>
                                     )}
                                    </p>
                               
                            </TabPane>
                            <TabPane eventKey="partners-tab">
                                <Heading as="h4" mb="20px">Технічні характеристики</Heading>
                                <p></p>
                                    <p style={{fontSize: 17}}>
                                     {props.techspec.map((des) => 
                                     <li key={des.id} >{des.spec}</li>
                                     )}
                                    </p>
                               
                            </TabPane>
                            <TabPane eventKey="our-awards-tab">
                                <Heading as="h4" mb="20px">Технологія застосування</Heading>
                                <p></p>
                                    <p style={{fontSize: 17}}>
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
