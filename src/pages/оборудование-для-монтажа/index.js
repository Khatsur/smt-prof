import React from "react"
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-three'
import Footer from '../../containers/layout/footer/footer-one'
import HeroArea from '../../containers/machines/hero-area'
import FeaturesArea from '../../containers/machines/features-area'
import ServicesArea from '../../containers/machines/juki'
import ContactArea from '../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../containers/machines/whats-new-area'
import CaseStudyArea from '../../containers/machines/smt-big'



const language = "ru";
 const path = "оборудование-для-монтажа";
const IndexServices = ({ location }) => (
  <Layout location={location}>
    <SEO title="Оборудование для монтажа" description="Оборудование для монтажа электронных компонентов на печатные платы. Установщики JUKI. Принтеры паяльной пасты. AOI и SPI. Селективная пайка. Влагозащита" pathname={path} keywords="оборудование для монтажа, SMT монтаж плат, мойка плат и трафаретов, нанесение покрытий, установщики SMT, оптическая инспекция, установщики tht, паяльные печи" lang={language}/>
    <Header transparent path={path} />
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
