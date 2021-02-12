import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import HeroArea from '../../../containers/index-processing/inspection'
import MachinesInspection from '../../../containers/machines/inspection'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Оптическая инспекция" description="Влагозащита электроники. Оборудование для нанесения покрытий на электронные блоки. Селективное нанесения защитных материалов. Нанесение лака погружением" pathname="оборудование-для-монтажа/оптическая-инспекция" keywords="влагозащита электроники, оборудование для селективного нанесения, селективная влагозащита, нанесения защитных покрытий, нанесение лака, лакировка плат, smt" lang="ru"/>
    <Header/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesInspection />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 