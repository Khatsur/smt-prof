import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../../containers/index-processing/materials/coating-ua'
import MaterialCoatingUa from '../../../../containers/materials/coating-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Захисні покриття" description="Захисні покриття для нанесення на плати. Застосовуються для захисту друкованих плат від впливу навколишнього середовища, хімічних речовин і температури" pathname="ua/матеріали-для-smt/захисні-покриття" keywords="захисні покриття, лак для друкованих плат, захист електроніки, акрилові покриття, силіконовий лак, ур-63, уретанове покриття, humiseal, лакування плат" lang="uk" />
    <Header/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MaterialCoatingUa/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 