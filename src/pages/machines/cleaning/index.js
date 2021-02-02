import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header//header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import HeroArea from '../../../containers/index-processing/cleaning'
import MachinesCleaning from '../../../containers/machines/cleaning'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Оборудование для мойки" description="оборудование для мойки, оборудование для мойки плат, оборудование для мойки трафаретов, оборудование для мойки паллет, очистка трафаретов, мойка плат, smt" pathname="оборудование-для-мойки" />
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
 