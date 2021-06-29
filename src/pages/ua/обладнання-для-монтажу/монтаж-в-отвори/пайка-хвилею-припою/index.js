import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one-ua'
import WavePageHeaderUa from '../../../../../components/page-header/wave'
import Wave from '../../../../../containers/machines/tht/wave'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../../containers/machines/whats-new-area-ua'
import MachinesTht from '../../../../../containers/machines/tht-ua'



const language = "uk";
const path = "ua/обладнання-для-монтажу/монтаж-в-отвори/пайка-хвилею-припою";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Пайка хвилею припою" description="Пайка хвилею припою застосовується для монтажу електронних компонентів в отвори друкованих плат THT. Автоматизація процесів пайки для серійного виробництва" pathname={path} keywords="установки пайки хвилею припою, пайка хвилею, пайка хвилею припою, установка пайки хвилею, обладнання для пайки хвилею припою, пайка вивідних компонентів" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <WavePageHeaderUa lang={language}/>
      <Wave lang={language} />
      <ContactArea />
      <MachinesTht/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 