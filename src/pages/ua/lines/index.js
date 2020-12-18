import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-ua'
import Footer from '../../../containers/layout/footer/footer-one'
import HeroArea from '../../../containers/lines/hero-area-ua'
import FeaturesArea from '../../../containers/materials/materials-ru'
import FunFactArea from '../../../containers/machines/funfact-area'
import ServicesArea from '../../../containers/materials/zestron'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import TestimonialArea from '../../../containers/global/testimonial-area/section-one'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import CTAArea from '../../../containers/global/cta-area/section-one'
import ClientsArea from '../../../containers/global/clients-area'
import BlogArea from '../../../containers/index-services/blog-area'
import CaseStudyArea from '../../../containers/machines/bud-stenc-clean'


const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Материалы для SMT" description="Материалы для SMT, Паяльная паста Indium 8.9, Паяльная паста Indium NC-SMQ92J, жидкости для мойки плат, VIGON, защитные покрытия, lead free, PB free, HumiSeal" pathname="материалы-для-smt" />
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
