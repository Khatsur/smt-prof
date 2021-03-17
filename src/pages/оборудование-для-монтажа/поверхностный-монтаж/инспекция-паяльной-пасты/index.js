import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import SpiPageHeader from '../../../../components/page-header/spi'
import Spi from '../../../../containers/machines/smt/spi'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../../containers/machines/whats-new-area'
import MachinesSmt from '../../../../containers/machines/smt'




 const language = "ru";
 const path = "оборудование-для-монтажа/поверхностный-монтаж/инспекция-паяльной-пасты";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Инспекция паяльной пасты" description="Инспекция паяльной пасты на контактных площадках печатных плат в автоматическом режиме после автоматического принтера для нанесения паяльной пасты на платы" pathname={path} keywords="автоматическая оптическая инспекция, оптическая инспекция, инспекция нанесения паяльной пасты,RV-2,Juki, RV2-3DH, системы автоматической оптической инспекции, SPI,smt, omron spi" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <SpiPageHeader lang={language}/>
      
      <Spi lang={language}/>
      <ContactArea />
      <MachinesSmt/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 