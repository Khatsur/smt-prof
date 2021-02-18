import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import HeroArea from '../../../containers/index-processing/solder'
import MachinesTht from '../../../containers/machines/tht'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Паяльная паста и припой" description="Монтаж в отверстия печатных плат - THT. Оборудование для установки выводных (штыревых) компонентов. Машины для селективной пайки и пайки волной припоя." pathname="материалы-для-smt/паяльная-паста-и-припой" keywords="монтаж в отверстия, выводной монтаж, установщики в отверстия плат, селективная пайка, машины селективной пайки, машины пайки волной припоя, штыревой монтаж, установщики компонентов, juki jm" lang="ru" />
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
 