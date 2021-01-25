import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-en'
import Footer from '../../../containers/layout/footer/footer-one-en'
import HeroArea from '../../../containers/service/hero-area-en'
import FeaturesArea from '../../../containers/lines/lines-ru'
import ServicesArea from '../../../containers/lines/solutions'
import ContactArea from '../../../containers/global/contact-area/contact-three'
import WhatsnewArea from '../../../containers/machines/whats-new-area-en'
import CaseStudyArea from '../../../containers/machines/smt-big'
import SmallSmt from '../../../containers/lines/small-smt'


const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Комплексные решения для SMT производства электроники" description="линия smt,smt линия,оборудование для smd монтажа,линия для поверхностного монтажа,линия поверхностного монтажа,линия smd монтажа,комплексные решения для SMT производства электроники" pathname="комплексные-решения-для-smt" />
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
