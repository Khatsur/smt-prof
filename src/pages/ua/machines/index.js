import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-ua'
import Footer from '../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../containers/machines/hero-area-ua'
import FeaturesArea from '../../../containers/machines/machines-ua'
import ServicesArea from '../../../containers/machines/juki-ua'
import ContactArea from '../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../containers/machines/whats-new-area-ua'
import CaseStudyArea from '../../../containers/machines/smt-big-ua'


const IndexServices = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    <SEO title="Обладнання для SMD монтажу" description="SMT PROF- обладнання для поверхневого монтажу, обладнання для SMT, SMT PROF - перший український проект з оснащення виробництв монтажу друкованих плат" pathname="обладнання-для-smd-монтажу" />
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
