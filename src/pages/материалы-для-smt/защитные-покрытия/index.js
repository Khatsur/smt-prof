import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import HeroArea from '../../../containers/index-processing/materials/coating'
import MaterialCoating from '../../../containers/materials/coating'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Защитные покрытия" description="Защитные покрытия для нанесения на собранные электронные платы. Применяются для защиты печатных плат от влияния окружающей среды и химических веществ" pathname="материалы-для-smt/защитные-покрытия" keywords="акриловый лак, полиуретановые покрытия, силиконовый лак, лакировка плат, защита електроники, humiseal, electrolube, puc, селективная влагозащита, влагозащита плат" lang="ru" />
    <Header/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MaterialCoating/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 