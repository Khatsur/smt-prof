import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import HeroArea from '../../../containers/index-processing/materials/cleaning'
import MaterialCleaning from '../../../containers/materials/cleaning'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Жидкости для мойки" description="Жидкости для мойки печатных плат от загрязнений после пайки и для очистки трафаретов для нанесения паяльной пасты на платы. Материалы для мойки паллет" pathname="материалы-для-smt/жидкости-для-мойки" keywords="жидкости для мойки печатных плат, жидкости для очистки трафаретов, мойка печатных плат, очистка плат, смывка для плат, Zestron" lang="ru" />
    <Header/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MaterialCleaning/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 