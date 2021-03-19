import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import HeroArea from '../../../containers/index-processing/coating'
import MachinesCoating from '../../../containers/machines/coating'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
 
const language = "ru";
const path = "оборудование-для-монтажа/влагозащита-электроники";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Влагозащита электроники" description="Влагозащита электроники. Оборудование для нанесения покрытий на электронные блоки. Селективное нанесения защитных материалов. Нанесение лака погружением" pathname={path} keywords="влагозащита электроники, оборудование для селективного нанесения, селективная влагозащита, нанесения защитных покрытий, нанесение лака, лакировка плат, smt" lang={language}/>
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesCoating />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 