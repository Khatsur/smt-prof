import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one-ua'
import FeflowPageHeaderUa from '../../../../../components/page-header/reflow'
import Feflow from '../../../../../containers/machines/smt/reflow'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../../containers/machines/whats-new-area-ua'





const language = "ua";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/печі-паяльні";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Печі паяльні" description="Печі паяльні для оплавлення паяльної пасти на контактних площадках друкованих плат при поверхневому монтажі (SMT) електронних компонентів (SMD) на плати" pathname={path} keywords="печі паяльні, паяльні печі, печі для пайки smd, печі для пайки, печі оплавлення, печі оплавлення паяльної пасти, ersa, soltec, поверхневий монтаж, smt" lang={language} />
    <Header/>
    <main className="site-wrapper-reveal">
      <FeflowPageHeaderUa lang={language}/>
      <Feflow lang={language} />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 