import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header//header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../../containers/index-processing/cleaning-ua'
import MachinesCleaning from '../../../../containers/machines/tht'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Монтаж в отверстия" description="монтаж в отверстия, выводной монтаж, установщики в отверстия плат, селективная пайка, машины селективной пайки, машины пайки волной припоя, оборудование THT" pathname="монтаж-в-отверстия" />
    <Header/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesCleaning/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 