import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one-ua'
import SpiPageHeaderUa from '../../../../../components/page-header/spi'
import Spi from '../../../../../containers/machines/smt/spi'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../../containers/machines/whats-new-area-ua'
import MachinesSmt from '../../../../../containers/machines/smt-ua'





const language = "ua";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/інспекція-паяльної-пасти";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Інспекція паяльної пасти" description="Інспекція паяльної пасти на контактних площадках друкованих плат в автоматичному режимі після автоматичного принтера для нанесення паяльної пасти на плати" pathname={path} keywords="автоматична оптична інспекція, оптична інспекція, інспекція нанесення паяльної пасти, RV-2, Juki, RV2-3DH, системи автоматичної оптичної інспекції, SPI, smt, omron spi" lang={language} />
    <Header/>
    <main className="site-wrapper-reveal">
      <SpiPageHeaderUa lang={language}/>
      <Spi lang={language} />
      <ContactArea />
      <MachinesSmt/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 