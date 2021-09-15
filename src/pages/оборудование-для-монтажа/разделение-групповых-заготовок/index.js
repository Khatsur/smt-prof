import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import CuttingPageHeader from '../../../components/page-header/cutting'
import Cutting from '../../../containers/machines/cutting/cut'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import MachinesSmt from '../../../containers/machines/smt'




 const language = "ru";
 const path = "оборудование-для-монтажа/разделение-групповых-заготовок";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Разделение групповых заготовок" description="Разделение групповых заготовок печатных плат после сборки Применяется при производстве электронных изделий в условиях серийного и мелкосерийного производств" pathname={path} keywords="разделение групповых заготовок печатных плат, оборудование для разделения групповых заготовок, лазерная система разделение печатных плат, сепаратор плат,smt, pizzacuter, cab, maestro 2, maestro 4" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <CuttingPageHeader lang={language}/>
      
      <Cutting lang={language}/>
      <ContactArea />
      <MachinesSmt/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 