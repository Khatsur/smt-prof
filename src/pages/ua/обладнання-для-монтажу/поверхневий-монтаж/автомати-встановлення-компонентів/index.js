import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one-ua'
import PlacerPageHeaderUa from '../../../../../components/page-header/placer'
import Placer from '../../../../../containers/machines/smt/placer'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../../containers/machines/whats-new-area-ua'
import MachinesSmt from '../../../../../containers/machines/smt-ua'


const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів"; 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Автомати встановлення компонентів" description="Автомати встановлення компонентів SMD на поверхню друкованих плат. Технологія поверхневого монтажу електронних компонентів - SMT. Машини встановлення SMD" pathname={path} lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <PlacerPageHeaderUa lang={language}/>
      <Placer lang="ua" />
      <ContactArea />
      <MachinesSmt/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 