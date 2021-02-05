import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import HeroArea from '../../../containers/index-processing/smt'
import MachinesSmt from '../../../containers/machines/smt'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Поверхностный монтаж" description="Поверхностный монтаж, принтеры паяльной пасты, установщики компонентов, паяльные печи, инспекция пасты, оптическая инспекция, spi, aoi" pathname="оборудование-для-монтажа/поверхностный-монтаж" />
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
 