import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-ua'
import Footer from '../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../containers/service/hero-area-ua'
import FeaturesArea from '../../../containers/service/service-ua'
import ServicesArea from '../../../containers/lines/solutions-ua'
import ContactArea from '../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../containers/machines/whats-new-area-ua'


const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Технічне обслуговування" description="технічне обслуговування, пуско-наладка обладнання, технічне навчання, технічна підтримка, виробництво електроніки, монтаж SMT, лінії для монтажу " pathname="ua/технічне-обслуговування" />
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
