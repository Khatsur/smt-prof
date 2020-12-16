import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-ua'
import Footer from '../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../containers/materials/hero-area-ua'
import FeaturesArea from '../../../containers/materials/materials-ua'
import FunFactArea from '../../../containers/machines/funfact-area'
import ServicesArea from '../../../containers/materials/zestron-ua'
import ContactArea from '../../../containers/global/contact-area/contact-three-ua'
import TestimonialArea from '../../../containers/global/testimonial-area/section-one'
import WhatsnewArea from '../../../containers/machines/whats-new-area-ua'
import CTAArea from '../../../containers/global/cta-area/section-one'
import ClientsArea from '../../../containers/global/clients-area'
import BlogArea from '../../../containers/index-services/blog-area';
import CaseStudyArea from '../../../containers/machines/bud-stenc-clean-ua'


const IndexServices = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    <SEO title="Матеріалі для SMT" description="Матеріали для SMT, Паяльна паста Indium 8.9, Паяльна паста Indium NC-SMQ92J, рідини для миття плат, VIGON, захисні покриття, lead free, PB free, HumiSeal" pathname="матеріали-для-smt" />
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
