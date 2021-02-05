import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import HeroArea from '../../../containers/index-processing/tht'
import MachinesTht from '../../../containers/machines/tht'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Монтаж в отверстия" description="монтаж в отверстия, выводной монтаж, установщики в отверстия плат, селективная пайка, машины селективной пайки, машины пайки волной припоя, оборудование THT" pathname="оборудование-для-монтажа/монтаж-в-отверстия" />
    <Header/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesTht/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 