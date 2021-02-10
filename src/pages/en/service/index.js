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



const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Service" description="Service machines for  SMD mounting JUKI, ASM, PBT Works, PVA. Machines installation. Manual and maintenance training. Technical support. " pathname="en/service" keywords="installation, maintenance, technical training, service, support, electronics manufacturing, SMT, assembly lines, service, complete solutions for electronic" lang="en"/>
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
