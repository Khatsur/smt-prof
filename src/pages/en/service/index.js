import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-en'
import Footer from '../../../containers/layout/footer/footer-one-en'
import HeroArea from '../../../containers/service/hero-area-en'
import FeaturesArea from '../../../containers/service/service-en'
import ServicesArea from '../../../containers/lines/solutions-en'
import ContactArea from '../../../containers/global/contact-area/contact-three'
import WhatsnewArea from '../../../containers/machines/whats-new-area-en'
import CaseStudyArea from '../../../containers/machines/smt-big'
import SmallSmt from '../../../containers/lines/small-smt'


const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Service" description="installation, maintenance, technical training, service, support, electronics manufacturing, SMT, assembly lines, service, complete solutions for electronic" pathname="en/service" />
    <Header transparent  />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <FeaturesArea />
      <ContactArea />
      <ServicesArea />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
)


export default Materials
