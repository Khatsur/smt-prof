import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import LineSmtPageHeader from '../../../components/page-header/line-smt'
import LineSmt from '../../../containers/lines/smt-line'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import LineSolutions from '../../../containers/lines/solutions'



const language = "ru";
const path = "комплексные-решения/линия-поверхностного-монтажа";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Линия поверхностного монтажа" description="Линия поверхностного монтажа для автоматизации процессов нанесения паяльной пасты, установки компонентов на контактные площадки печатных плат и оплавления" pathname={path} keywords="линия smt, smt линия, оборудование для smd монтажа, линия для поверхностного монтажа, линия поверхностного монтажа, линия smd монтажа, juki, монтаж плат" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <LineSmtPageHeader lang={language}/>
      
      <LineSmt lang={language}/>
      <ContactArea />
      <LineSolutions />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 