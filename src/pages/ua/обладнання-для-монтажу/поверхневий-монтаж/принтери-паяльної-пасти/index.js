import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one-ua'
import PrinterPageHeaderUa from '../../../../../components/page-header/printer'
import Printer from '../../../../../containers/machines/smt/printer'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../../containers/machines/whats-new-area-ua'





 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Принтери паяльної пасти" description="Принтери паяльної пасти для нанесення через металевий трафарет на контактні площадки друкованих плат. Застосовуються в технології поверхневого монтажу - SMT" pathname="ua/обладнання-для-монтажу/поверхневий-монтаж/принтери-паяльної-пасти" keywords="Обладнання для нанесення паяльної, принтери паяльної пасти, паяльна паста, обладнання для поверхневого монтажу, трафарети для пасти, G-Titan, dek" lang="ua" />
    <Header/>
    <main className="site-wrapper-reveal">
      <PrinterPageHeaderUa lang="ua"/>
      <Printer lang="ua" />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 