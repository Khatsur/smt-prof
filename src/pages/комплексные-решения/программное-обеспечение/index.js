import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import SoftwarePageHeader from '../../../components/page-header/software'
import Software from '../../../containers/lines/software'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import SoftSolutions from '../../../containers/lines/software/soft-menu'



const language = "ru";
const path = "комплексные-решения/программное-обеспечение";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Программное обеспечение" description="Программное обеспечение для полной автоматизации производства  электроники. Учет и хранение компонентов. Планирование производства. Управление качеством" pathname={path} keywords="Программное обеспечение, Juki, janets, trace monitor, ifs nx, smt" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <SoftwarePageHeader lang={language}/>
      
      <Software lang={language}/>
      <ContactArea />
      <SoftSolutions />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 