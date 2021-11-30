import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import LineThtPageHeader from '../../../components/page-header/line-tht'
import LineTht from '../../../containers/lines/tht'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import LineSolutions from '../../../containers/lines/solutions'



const language = "ru";
const path = "комплексные-решения/линия-выводного-монтажа";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Линия выводного монтажа" description="Линия выводного монтажа для организации установки и пайки электронных компонентов в отверстия печатных плат. Ручная или автоматическая установка в отверстия" pathname={path} keywords="Линия выводного монтажа, ручной монтаж компонентов в отверстия, автоматический монтаж компонентов в отверстия печатных плат, комплексные решения для монтажа плат" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <LineThtPageHeader lang={language}/>
      
      <LineTht lang={language}/>
      <ContactArea />
      <LineSolutions />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 