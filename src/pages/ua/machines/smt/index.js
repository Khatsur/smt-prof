import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header//header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../../containers/index-processing/smt-ua'
import MachinesSmt from '../../../../containers/machines/smt-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Поверхневий монтаж"/>
    <Header/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesSmt/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 