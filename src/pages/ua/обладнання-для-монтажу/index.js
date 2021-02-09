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
    <SEO title="Обладнання для монтажу" description="Обладнання для монтажу електронних компонентів на друковані плати. Монтаж JUKI. Принтери паяльної пасти. AOI і SPI. Селективна пайка. Миття і вологозахист" pathname="ua/обладнання-для-монтажу" keywords="обладнання для монтажу, SMT монтаж плат, мийка плат і трафаретів, нанесення покриттів, машини SMT, оптична інспекція, машини tht, паяльні печі" lang="ua" />
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
