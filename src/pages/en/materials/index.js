import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-en'
import Footer from '../../../containers/layout/footer/footer-one-en'
import HeroArea from '../../../containers/materials/hero-area-en'
import FeaturesArea from '../../../containers/materials/materials-en'

import ServicesArea from '../../../containers/materials/zestron-en'
import ContactArea from '../../../containers/global/contact-area/contact-three'
import WhatsnewArea from '../../../containers/machines/whats-new-area-en'
import CaseStudyArea from '../../../containers/machines/bud-stenc-clean-en'


const IndexServices = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    <SEO title="Materials for SMT" description="Materials for SMT from leading manufacturers of solder paste and solder. Materials for cleaning boards and stencils Zestron. Materials for moisture protection Humiseal" keywords="materials for SMT, Solder paste, solder, Indium solder paste, PCB cleaning, VIGON, conformal coatings, lead free, PB free, HumiSeal, ZESTRON, stencil cleaning, Indium 8.9" lang="en" pathname="en/materials"  />
    <Header transparent />
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
