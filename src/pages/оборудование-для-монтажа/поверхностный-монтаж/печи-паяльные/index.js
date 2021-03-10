import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import ReflowPageHeader from '../../../../components/page-header/reflow'
import Reflow from '../../../../containers/machines/smt/reflow'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../../containers/machines/whats-new-area'




 const language = "ru";
 const path = "оборудование-для-монтажа/поверхностный-монтаж/печи-паяльные";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Печи паяльные" description="Печи паяльные для оплавления паяльной пасты на контактных площадках печатных плат при поверхностном монтаже (SMT)  электронных компонентов (SMD) на плати" pathname={path} keywords="печи паяльные, паяльные печи, печи для пайки smd, печи для пайки, печи оплавления, печи оплавления паяльной пасты, ersa, soltec, поверхностный монтаж, smt" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <ReflowPageHeader lang={language}/>
      
      <Reflow lang={language}/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 