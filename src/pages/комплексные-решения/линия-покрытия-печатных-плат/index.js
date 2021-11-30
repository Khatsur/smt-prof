import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import LineCoatingPageHeader from '../../../components/page-header/line-coating'
import LineCoating from '../../../containers/lines/coating'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import LineSolutions from '../../../containers/lines/solutions'



const language = "ru";
const path = "комплексные-решения/линия-покрытия-печатных-плат";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Линия поверхностного монтажа" description="Отдельная линия оптической инспекции для организации автоматического контроля монтажа (пайки) с нескольких сборочных линий. Для серийного производства плат" pathname={path} keywords="Линия оптической инспекции, Линия выводного монтажа, ручной монтаж компонентов в отверстия, автоматический монтаж компонентов в отверстия печатных плат, комплексные решения для монтажа плат" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <LineCoatingPageHeader lang={language}/>
      
      <LineCoating lang={language}/>
      <ContactArea />
      <LineSolutions />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 