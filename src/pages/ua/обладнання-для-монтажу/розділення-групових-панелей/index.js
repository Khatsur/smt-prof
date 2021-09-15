import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import CuttingPageHeaderUa from '../../../../components/page-header/cutting'
import Cutting from '../../../../containers/machines/cutting/cut'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import MachinesSmt from '../../../../containers/machines/smt-ua'


const language = "uk";
const path = "ua/обладнання-для-монтажу/розділення-групових-панелей"; 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Розділення групових панелей" description="Розділення групових панелей друкованих плат після складання Застосовується при виробництві електронних виробів умовах серійного і дрібносерійного виробництв" pathname={path}
    keywords="Розділення групових панелей друкованих плат, обладнання для поділу групових заготовок, лазерна система поділ друкованих плат, сепаратор плат, smt, pizzacuter, cab, maestro 2, maestro 4"  lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <CuttingPageHeaderUa lang={language}/>
      <Cutting lang={language}/>
      <ContactArea />
      <MachinesSmt/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 