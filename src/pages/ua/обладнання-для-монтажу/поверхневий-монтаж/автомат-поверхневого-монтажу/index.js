import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one-ua'
import PlacerPageHeaderUa from '../../../../../components/page-header/placer'
import Placer from '../../../../../containers/machines/smt/juki-placer'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../../containers/machines/whats-new-area-ua'
import MachinesSmt from '../../../../../containers/machines/smt-ua'


const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/автомат-поверхневого-монтажу"; 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Автомат поверхневог монтажу" description="Автомат поверхневого монтажу електронних компонентів на друковані плати. Технологія поверхневого монтажу електронних компонентів. Установники компонентів" pathname={path} lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <PlacerPageHeaderUa lang={language}/>
      <Placer lang={language}/>
      <ContactArea />
      <MachinesSmt/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 