import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import PlacerPageHeader from '../../../../components/page-header/placer'
import Placer from '../../../../containers/machines/smt/placer'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../../containers/machines/whats-new-area'




 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Автоматы установки компонентов" description="Автоматы установки компонентов SMD на поверхность печатных плат. Технология поверхностного монтажа электронных компонентов - SMT. Установщики компонентов" pathname="оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов" keywords="Установка электронных компонентов, установщики smd, smt, оборудование для smt, оборудование для smd монтажа, автоматы установки компонентов, установщик, smt, juki, asm, siplace, yamaha" lang="ru" />
    <Header/>
    <main className="site-wrapper-reveal">
      <PlacerPageHeader lang="ru"/>
      
      <Placer lang="ru"/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 