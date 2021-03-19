import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import HeroArea from '../../../containers/index-processing/inspection'
import MachinesInspection from '../../../containers/machines/inspection'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'


const language = "ru";
const path = "оборудование-для-монтажа/оптическая-инспекция";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Оптическая инспекция" description="Автоматическая оптическая инспекция нанесения паяльной пасты на контактные площадки плат - SPI и качества монтажа электронных компонентов на платы - AOI" pathname={path} keywords="автоматическая оптическая инспекция, контроль нанесения паяльной пасты, spi, aoi, контроль пайки компонентов, контроль пайки, omron aoi, juki aoi, rv-2, 3d aoi, smt, машина для инспекции, инспекция плат" lang={language}/>
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesInspection />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 