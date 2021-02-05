import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-ua'
import Footer from '../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../containers/lines/hero-area-ua'
import FeaturesArea from '../../../containers/lines/lines-ua'
import FunFactArea from '../../../containers/machines/funfact-area'
import ServicesArea from '../../../containers/lines/solutions-ua'
import ContactArea from '../../../containers/global/contact-area/contact-three-ua'
import TestimonialArea from '../../../containers/global/testimonial-area/section-one'
import WhatsnewArea from '../../../containers/machines/whats-new-area-ua'
import CTAArea from '../../../containers/global/cta-area/section-one'
import ClientsArea from '../../../containers/global/clients-area'
import BlogArea from '../../../containers/index-services/blog-area'
import CaseStudyArea from '../../../containers/machines/smt-big-ua'
import SmallSmt from '../../../containers/lines/small-smt-ua'


const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Комплексні рішення для виробництва електроніки" description="лінія smt, smt лінія, обладнання для smd монтажу, лінія для поверхневого монтажу, лінія поверхневого монтажу, лінія smd монтажу, комплексні рішення для виробництва електроніки" pathname="ua/комплексні-рішення" />
    <Header transparent  />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <FeaturesArea />
      <ServicesArea />
      <CaseStudyArea/>
      <ContactArea />
      <SmallSmt />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
)


export default Materials
