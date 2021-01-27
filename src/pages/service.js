import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/service/hero-area'
import FeaturesArea from '../containers/service/service-ru'
import ServicesArea from '../containers/lines/solutions'
import ContactArea from '../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../containers/machines/whats-new-area'



const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Техническое обслуживание" description="техническое обслуживание, пуско-наладка оборудования, техническое обучение, техническая поддержка, производство электроники, монтаж SMT, линии для монтажа" pathname="техническое-обслуживание" />
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
