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
    <SEO title="Поверхностный монтаж" description="Поверхностный монтаж электронных компонентов на платы SMT. Оборудование для нанесение паяльной пасты, установки компонентов, пайки и оптической инспекции" pathname="оборудование-для-монтажа/поверхностный-монтаж" keywords="поверхностный монтаж, принтеры паяльной пасты, установщики компонентов, установщики smd, паяльные печи, оптическая инспекция, aoi, spi, конвейеры для плат, juki, smt" lang="ru" />
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
 