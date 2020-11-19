import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/machines/hero-area'
import FeaturesArea from '../containers/machines/features-area'
import FunFactArea from '../containers/machines/funfact-area'
import ServicesArea from '../containers/machines/juki'
import ContactArea from '../containers/global/contact-area/contact-three'
import TestimonialArea from '../containers/global/testimonial-area/section-one'
import WhatsnewArea from '../containers/machines/whats-new-area'
import CTAArea from '../containers/global/cta-area/section-one'
import ClientsArea from '../containers/global/clients-area'
import BlogArea from '../containers/index-services/blog-area'
import CaseStudyArea from '../containers/machines/smt-big'


const IndexServices = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Оборудование для SMD монтажа" description="SMT PROF- оборудование для поверхностного монтажа, оборудование для SMT, SMT PROF – первый украинский проект по оснащению производств монтажа печатных плат" pathname="оборудование-для-smd-монтажа" />
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


export default IndexServices
