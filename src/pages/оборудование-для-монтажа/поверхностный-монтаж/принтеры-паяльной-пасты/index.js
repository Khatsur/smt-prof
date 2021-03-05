import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import PlacerPageHeader from '../../../../components/page-header/printer'
import Printer from '../../../../containers/machines/smt/printer'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../../containers/machines/whats-new-area'





 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Принтеры паяльной пасты" description="Оборудование для нанесения паяльной пасты через трафарет на контактные площадки печатных плат. Применятся в технологии поверхностного монтажа - SMT" pathname="оборудование-для-монтажа/поверхностный-монтаж/принтеры-паяльной-пасты" keywords="машины для нанесения паяльной пасты, принтеры паяльной пасты, паяльная паста, оборудование для поверхностного монтажа плат, принтеры паяльной пасты, G-Titan, dek" lang="ru" />
    <Header/>
    <main className="site-wrapper-reveal">
      <PlacerPageHeader />
      
      <Printer />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 