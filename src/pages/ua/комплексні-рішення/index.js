import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-ua'
import Footer from '../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../containers/lines/hero-area-ua'
import FeaturesArea from '../../../containers/lines/lines-ua'
import ServicesArea from '../../../containers/lines/solutions-ua'
import ContactArea from '../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../containers/machines/whats-new-area-ua'
import CaseStudyArea from '../../../containers/machines/smt-big-ua'
import SmallSmt from '../../../containers/lines/small-smt-ua'


const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Комплексні рішення для виробництва електроніки" description="Комплексні рішення виробництва електроніки. Обладнання для дрібносерійного,серійного і масового виробництва електроніки. Рішення «під ключ»" pathname="ua/комплексні-рішення" keywords="серійне виробництво електроніки, лінія smt, монтаж smt, монтаж в отвори, покриття плат, мийка плат, комплексні рішення для поверхневого монтажу, JUKI, g-titan, RS-1, smt, установник SMD, принтер паяльної пасти, паяльна піч, лінія smd монтажу" lang="ua"/>
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
