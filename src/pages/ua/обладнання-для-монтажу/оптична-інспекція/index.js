import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../../containers/index-processing/inspection-ua'
import MachinesInspection from '../../../../containers/machines/inspection-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
 

const language = "ua";
const path = "ua/обладнання-для-монтажу/оптична-інспекція";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Оптична інспекція" description="Автоматична оптична інспекція нанесення паяльної пасти на контактні площадки друкованих плат - SPI та якості монтажу електронних компонентів на плати - AOI" pathname={path} keywords="автоматична оптична інспекція, контроль нанесення паяльної пасти, spi, aoi, контроль пайки компонентів, контроль паяння, omron aoi, juki aoi, rv-2, 3d aoi, smt" lang={language}/>
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
 