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

const language = "ua";
const path = "ua/технічне-обслуговування"; 
const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Технічне обслуговування" description="Технічне обслуговування обладнання для монтажу плат JUKI, ASM, PBT Works, PVA. Пусконалагоджувальні роботи обладнання і відпрацювання технологічних процесів" pathname={path} lang={language} keywords="технічне обслуговування, пуско-наладка обладнання, технічне навчання, технічна підтримка, виробництво електроніки, монтаж SMT, лінії для монтажу"/>
    <Header transparent  path={path}/>
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
