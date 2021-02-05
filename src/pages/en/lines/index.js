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
import SmallSmt from '../../../containers/lines/small-smt-en'


const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Complete solutions for electronics manufacturing" description="smt line, smt line, smd assembly equipment, surface mount line, surface mount line, smd assembly line, complete solutions for electronics manufacturing" pathname="en/lines" />
    <Header transparent  />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <FeaturesArea />
      <ServicesArea />
      <SmtLineJukiEn/>
      <ContactArea />
      <SmallSmt />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
)


export default Materials
