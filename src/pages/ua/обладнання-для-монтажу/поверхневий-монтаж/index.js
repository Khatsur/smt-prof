import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../../containers/index-processing/smt-ua'
import MachinesSmt from '../../../../containers/machines/smt-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'

 

const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Поверхневий монтаж" description="Поверхневий монтаж електронних компонентів на плати - SMT. Обладнання для нанесення паяльної пасти, встановлення компонентів, пайки і оптичної інспекції" pathname={path} keywords="поверхневий монтаж, принтери паяльної пасти, машини для встановлення SMD, паяльні печі, інспекція нанесення пасти, spi, aoi, smt, juki" lang={language}/>
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesSmt/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 