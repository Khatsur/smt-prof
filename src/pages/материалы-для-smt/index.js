import React from "react"
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-three'
import Footer from '../../containers/layout/footer/footer-one'
import HeroArea from '../../containers/materials/hero-area'
import FeaturesArea from '../../containers/materials/materials-ru'
import ServicesArea from '../../containers/materials/zestron'
import ContactArea from '../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../containers/machines/whats-new-area'
import CaseStudyArea from '../../containers/machines/bud-stenc-clean'


const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Материалы для SMT" description="Материалы для SMT от ведущих производителей паяльной пасты и припоя. Материалы для мойки плат и трафаретов Zestron. Материалы для влагозащиты  Humiseal" pathname="материалы-для-smt" keywords="материалы для SMT, Паяльная паста, припой, Паяльная паста Indium, жидкости для мойки плат, VIGON, защитные покрытия, lead free, PB free, HumiSeal, ZESTRON, мойка плат, мойка трафаретов" lang="ru"/>
    <Header transparent  />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <FeaturesArea />
      <ServicesArea />
      <CaseStudyArea/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
)


export default Materials
