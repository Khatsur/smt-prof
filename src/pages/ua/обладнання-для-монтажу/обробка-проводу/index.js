import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../../containers/index-processing/wire-ua'
import MachinesWire from '../../../../containers/machines/wire-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'

const language = "ua";
const path = "ua/обладнання-для-монтажу/обробка-проводу";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Обробка проводу" description="Обробка проводу. Мірне різання та чищення проводу і кабелю. Обтискування терміналів. Обробка коаксіальних та силових кабелів. Маркування проводів" pathname={path} keywords="обробка проводу, різка проводу, різка кабелю, чищення проводу, чищення кабелю, обтискання контактів, пресування, кремпування терміналів, коаксіальний кабель" lang={language}/>
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesWire />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 