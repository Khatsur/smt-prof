import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import HeroArea from '../../../containers/index-processing/wire'
import MachinesWire from '../../../containers/machines/wire'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'

const language = "ru";
const path = "оборудование-для-монтажа/обработка-провода";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Обработка провода" description="Обработка провода и кабелей. Мерная резка и зачистка проводов. Резка и зачистка кабелей. Опрессовка контактов.  Обработка коаксиальных и силовых кабелей." pathname={path} keywords="обработка провода, резка провода, зачистка провода, зачистка кабеля, опрессовка контактов, кремповка контактов, обжимка провдов, обжимка терминалов" lang={language}/>
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
 