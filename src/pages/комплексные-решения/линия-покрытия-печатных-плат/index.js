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
    <SEO title="Линия покрытия печатных плат" description="Линия покрытия печатных плат. Организация автоматизации процессов нанесения защитных покрытий на собранные электронные блоки. Нанесение лака и полимеризация" pathname={path} keywords="Линия покрытия печатных плат, установка влагозащиты, установка влагозащиты погружением, установка влагозащиты распылением, установка селективной влагозащиты, селективная влагозащита, smt" lang={language} />
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
 