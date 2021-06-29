import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import WavePageHeader from '../../../../components/page-header/wave'
import Wave from '../../../../containers/machines/tht/wave'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../../containers/machines/whats-new-area'
import MachinesTht from '../../../../containers/machines/tht'


const language = "ru";
const path = "оборудование-для-монтажа/монтаж-в-отверстия/пайка-волной-припоя";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Пайка волной припоя" description="Пайка волной припоя применяется для монтажа электронных компонентов в отверстия печатных плат THT. Автоматизация процессов пайки для серийного производства" pathname={path} keywords="установки пайки волной припоя, пайка волной, пайка волной припоя, установка пайки волной, оборудование для пайки волной припоя, пайка выводных компонентов" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <WavePageHeader lang={language}/>
      <Wave lang={language} />
      <ContactArea />
      <MachinesTht />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 