import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header//header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../../containers/index-processing/coating-ua'
import MachinesCoating from '../../../../containers/machines/coating-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Обладнання для миття" description="обладнання для миття, обладнання для миття трафаретів, обладнання для миття устаткування, трафарети для нанесення паяльної пасти,мийка плат,мийка трафаретів" pathname="обладнання-для-миття" />
    <Header/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesCoating/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 