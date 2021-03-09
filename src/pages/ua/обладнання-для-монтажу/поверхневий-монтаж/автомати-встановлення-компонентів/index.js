import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one-ua'
import PlacerPageHeaderUa from '../../../../../components/page-header/placer'
import Placer from '../../../../../containers/machines/smt/placer'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../../containers/machines/whats-new-area-ua'





 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Автомати встановлення компонентів" description="Автомати встановлення компонентів SMD на поверхню друкованих плат. Технологія поверхневого монтажу електронних компонентів - SMT. Машини встановлення SMD" pathname="ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів" keywords="Встановлення електронних компонентів, установщики smd, smt, обладнання для smt, обладнання для smd монтажу, автомати встановлення компонентів, установник, smt, juki, asm, siplace, yamaha, samsung" lang="ua" />
    <Header/>
    <main className="site-wrapper-reveal">
      <PlacerPageHeaderUa lang="ua"/>
      <Placer lang="ua" />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 