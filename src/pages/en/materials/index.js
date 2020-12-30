import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-en'
import Footer from '../../../containers/layout/footer/footer-one-en'
import HeroArea from '../../../containers/materials/hero-area-en'
import FeaturesArea from '../../../containers/materials/materials-en'
import FunFactArea from '../../../containers/machines/funfact-area'
import ServicesArea from '../../../containers/materials/zestron-en'
import ContactArea from '../../../containers/global/contact-area/contact-three'
import TestimonialArea from '../../../containers/global/testimonial-area/section-one'
import WhatsnewArea from '../../../containers/machines/whats-new-area-en'
import CTAArea from '../../../containers/global/cta-area/section-one'
import ClientsArea from '../../../containers/global/clients-area'
import BlogArea from '../../../containers/index-services/blog-area';
import CaseStudyArea from '../../../containers/machines/bud-stenc-clean-en'


const IndexServices = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    <SEO title="Materials for SMT" description="Materials for SMT, Indium 8.9 solder paste, Indium NC-SMQ92J solder paste, PCB cleaning agent, VIGON, conformal coatings, lead free, PB free, HumiSeal" pathname="materials-for-smt" />
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
