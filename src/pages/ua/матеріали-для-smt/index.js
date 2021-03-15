import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-ua'
import Footer from '../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../containers/materials/hero-area-ua'
import FeaturesArea from '../../../containers/materials/materials-ua'
import ServicesArea from '../../../containers/materials/zestron-ua'
import ContactArea from '../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../containers/machines/whats-new-area-ua'
import CaseStudyArea from '../../../containers/machines/bud-stenc-clean-ua'

const language = "ua";
const path = "ua/матеріали-для-smt"; 
const IndexServices = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    <SEO title="Матеріали для SMT" description="Матеріали для SMT від провідних виробників паяльної пасти і припою. Матеріали для мийки плат і трафаретів Zestron. Матеріали для вологозахисту Humiseal" pathname={path} keywords="матеріали для SMT, Паяльна паста, припій, Паяльна паста Indium, рідини для миття плат, VIGON, захисні покриття, lead free, PB free, HumiSeal, ZESTRON, миття плат, миття трафаретів, бюджетні рішення" lang={language}/>
    <Header transparent path={path}/>
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

export default IndexServices
