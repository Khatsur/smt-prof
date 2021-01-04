import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-en'
import Footer from '../../../containers/layout/footer/footer-one-en'
import HeroArea from '../../../containers/lines/hero-area-en'
import FeaturesArea from '../../../containers/lines/lines-en'
import FunFactArea from '../../../containers/machines/funfact-area'
import ServicesArea from '../../../containers/lines/solutions-en'
import ContactArea from '../../../containers/global/contact-area/contact-three'
import TestimonialArea from '../../../containers/global/testimonial-area/section-one'
import WhatsnewArea from '../../../containers/machines/whats-new-area-en'
import CTAArea from '../../../containers/global/cta-area/section-one'
import ClientsArea from '../../../containers/global/clients-area'
import BlogArea from '../../../containers/index-services/blog-area'
import SmtLineJukiEn from '../../../containers/machines/smt-big-en'


const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Материалы для SMT" description="Материалы для SMT, Паяльная паста Indium 8.9, Паяльная паста Indium NC-SMQ92J, жидкости для мойки плат, VIGON, защитные покрытия, lead free, PB free, HumiSeal" pathname="материалы-для-smt" />
    <Header transparent  />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <FeaturesArea />
      <ServicesArea />
      <SmtLineJukiEn/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
)


export default Materials
