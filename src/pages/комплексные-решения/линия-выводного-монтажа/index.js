import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import LineThtPageHeader from '../../../components/page-header/line-tht'
import LineTht from '../../../containers/machines/dispensing/dispensingsolution'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import LineSolutions from '../../../containers/lines/solutions'



const language = "ru";
const path = "оборудование-для-монтажа/дозаторы-паяльной-пасты/ручные-дозаторы";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Дозаторы паяльной пасты" description="Дозаторы паяльной пасты для нанесения на контактные площадки печатных плат. Автоматическое оборудование для работы линии и отельностоящие настольные машины" pathname={path} keywords="дозаторы паяльной пасты и клея, для нанесения паяльной пасты, для нанесения клея, паяльная паста, оборудование для поверхностного монтажа, smt, монтаж плат" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <LineThtPageHeader lang={language}/>
      
      <LineTht lang={language}/>
      <ContactArea />
      <LineSolutions />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 