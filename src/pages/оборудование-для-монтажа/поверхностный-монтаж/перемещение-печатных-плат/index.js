import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import ConveyerPageHeader from '../../../../components/page-header/conveyer'
import Conveyer from '../../../../containers/machines/smt/conveyer'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../../containers/machines/whats-new-area'
import MachinesSmt from '../../../../containers/machines/smt'





 const language = "ru";
 const path = "оборудование-для-монтажа/поверхностный-монтаж/перемещение-печатных-плат";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Перемещение печатных плат" description="Перемещение печатных плат в производственной линии монтажа электронных компонентов на печатные платы. Устройства для загрузки и выгрузки плат. Конвейеры" pathname={path} keywords="перемещение печатных плат, конвейеры для печатных плат, загрузчик печатных плат, разгрузчик печатных плат, конвейерные системы,транспортировка печатных плат, nutek, asys, yj link" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <ConveyerPageHeader lang={language}/>
      <Conveyer lang={language}/>
      <ContactArea />
      <MachinesSmt/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 