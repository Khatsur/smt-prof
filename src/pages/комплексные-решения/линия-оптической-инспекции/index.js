import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import LineAoiPageHeader from '../../../components/page-header/aoi'
import LineAoi from '../../../containers/lines/inspection'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import LineSolutions from '../../../containers/lines/solutions'



const language = "ru";
const path = "комплексные-решения/линия-оптической-инспекции";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Линия оптической инспекции" description="Отдельная линия оптической инспекции для организации автоматического контроля монтажа (пайки) с нескольких сборочных линий. Для серийного производства плат" pathname={path} keywords="Линия оптической инспекции, автоматическая оптическая инспекция, оптическая инспекция,автоматическая оптическая инспекция печатных плат,AOI, системы автоматической оптической инспекции" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <LineAoiPageHeader lang={language}/>
      
      <LineAoi lang={language}/>
      <ContactArea />
      <LineSolutions />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 