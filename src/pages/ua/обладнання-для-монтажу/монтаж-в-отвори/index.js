import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../../containers/index-processing/tht-ua'
import MachinesTht from '../../../../containers/machines/tht-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
 
const language = "ua";
const path = "ua/обладнання-для-монтажу/монтаж-в-отвори";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Монтаж в отвори" description="Монтаж в отвори друкованих плат - THT. Устаткування для установки вивідних (штирьових) компонентів. Машини для селективної пайки і пайки хвилею припою." pathname={path} keywords="монтаж в отвори, встановлення в отвори плат, машини для селективного паяння, машини для паяння хвилею припою, обладнання, монтаж компонентів,  паяння плат, встановлення компонентів" lang={language}/>
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesTht/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 