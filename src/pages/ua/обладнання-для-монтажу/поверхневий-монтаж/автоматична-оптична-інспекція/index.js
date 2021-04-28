import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one-ua'
import AoiPageHeaderUa from '../../../../../components/page-header/aoi'
import Aoi from '../../../../../containers/machines/smt/aoi'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../../containers/machines/whats-new-area-ua'
import MachinesSmt from '../../../../../containers/machines/smt-ua'





const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/автоматична-оптична-інспекція";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Автоматична оптична інспекція" description="Автоматична оптична інспекція якості монтажу електронних компонентів на друковані плати. Вимірювання геометрії паяних з'єднань.  Аналіз даних і підказки" pathname={path} keywords="автоматична оптична інспекція, оптична інспекція, інспекція нанесення паяльної пасти, RV-2, Juki, RV2-3DH, системи автоматичної оптичної інспекції, SPI, smt, omron spi" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <AoiPageHeaderUa  lang={language}/>
      <Aoi lang={language} />
      <ContactArea />
      <MachinesSmt/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 