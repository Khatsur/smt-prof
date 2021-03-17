import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import PlacerPageHeader from '../../../../components/page-header/placer'
import Placer from '../../../../containers/machines/smt/placer'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../../containers/machines/whats-new-area'
import MachinesSmt from '../../../../containers/machines/smt'




 const language = "ru";
 const path = "оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Автоматы установки компонентов" description="Автоматы установки компонентов SMD на поверхность печатных плат. Технология поверхностного монтажа электронных компонентов - SMT. Установщики компонентов" pathname={path} keywords="Установка электронных компонентов, установщики smd, smt, оборудование для smt, оборудование для smd монтажа, автоматы установки компонентов, установщик, smt, juki, asm, siplace, yamaha" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <PlacerPageHeader lang={language}/>
      
      <Placer lang={language}/>
      <ContactArea />
      <MachinesSmt/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 