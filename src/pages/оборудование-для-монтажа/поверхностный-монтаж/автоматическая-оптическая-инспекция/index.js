import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import AoiPageHeader from '../../../../components/page-header/aoi'
import Aoi from '../../../../containers/machines/smt/aoi'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../../containers/machines/whats-new-area'
import MachinesSmt from '../../../../containers/machines/smt'





 const language = "ru";
 const path = "оборудование-для-монтажа/поверхностный-монтаж/автоматическая-оптическая-инспекция";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Автоматическая оптическая инспекция" description="Автоматическая оптическая инспекция качества монтажа электронных компонентов на печатные платы. Измерение геометрии паянных соединений. Анализ данных" pathname={path} keywords="автоматическая оптическая инспекция, оптическая инспекция, инспекция нанесения паяльной пасты,RV-2,Juki, RV2-3DH, системы автоматической оптической инспекции, SPI,smt, omron spi" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <AoiPageHeader lang={language}/>
      
      <Aoi lang={language}/>
      <ContactArea />
      <MachinesSmt/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 