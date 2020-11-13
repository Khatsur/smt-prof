import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-ua'
import Footer from '../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../containers/index-resolutions/hero-area'
import FeaturesArea from '../../../containers/index-resolutions/machines-ua'
import FunFactArea from '../../../containers/index-resolutions/funfact-area'
import ServicesArea from '../../../containers/index-resolutions/juki-ua'
import ContactArea from '../../../containers/global/contact-area/contact-three'
import TestimonialArea from '../../../containers/global/testimonial-area/section-one'
import WhatsnewArea from '../../../containers/index-resolutions/whats-new-area'
import CTAArea from '../../../containers/global/cta-area/section-one'
import ClientsArea from '../../../containers/global/clients-area'
import BlogArea from '../../../containers/index-services/blog-area'


const IndexServices = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    <SEO title="Resolutions" />
    <Header transparent />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <FeaturesArea />
      
      <ServicesArea />
      <ContactArea />
      <TestimonialArea />
      <WhatsnewArea />
      <CTAArea />
      
    </main>
    <Footer />
  </Layout>
)

export default IndexServices
