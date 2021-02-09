import React from "react"
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-three'
import Footer from '../../containers/layout/footer/footer-one'
import HeroArea from '../../containers/lines/hero-area'
import FeaturesArea from '../../containers/lines/lines-ru'
import ServicesArea from '../../containers/lines/solutions'
import ContactArea from '../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../containers/machines/whats-new-area'
import CaseStudyArea from '../../containers/machines/smt-big'
import SmallSmt from '../../containers/lines/small-smt'


const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Комплексные решения производства электроники" description="Комплексные решения производства электроники. Оборудования для мелкосерийного, серийного и крупно-серийного производства электроники. Решения «под ключ»" pathname="комплексные-решения" keywords="серийное производство электроники, линия smt, монтаж smt, монтаж в отверстия, покрытие плат, мойка плат, комплексные решения для поверхностного монтажа, JUKI, g-titan, RS-1, smt, установщик SMD, принтер паяльной пасты, паяльная печь" lang="ru"/>
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
