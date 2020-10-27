import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/index-resolutions/hero-area'
import FeaturesArea from '../containers/index-resolutions/features-area'
import FunFactArea from '../containers/index-resolutions/funfact-area'
import ServicesArea from '../containers/index-resolutions/services-area'
import ContactArea from '../containers/global/contact-area/contact-three'
import TestimonialArea from '../containers/global/testimonial-area/section-one'
import WhatsnewArea from '../containers/index-resolutions/whats-new-area'
import CTAArea from '../containers/global/cta-area/section-one'
import ClientsArea from '../containers/global/clients-area'
import BlogArea from '../containers/index-services/blog-area'
import CaseStudyArea from '../containers/index-appointment/case-study-area'


const IndexServices = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Оборудование для SMT" description="Оборудование для поверхностного монтажа  SMT" pathname="оборудование" />
    <Header transparent  />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <FeaturesArea />
      <ServicesArea />
      <CaseStudyArea/>
     
      <ContactArea />
      <TestimonialArea />
      <WhatsnewArea />
      <CTAArea />
      
    </main>
    <Footer />
  </Layout>
)


export default IndexServices
