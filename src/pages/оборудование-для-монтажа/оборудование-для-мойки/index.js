import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import HeroArea from '../../../containers/index-processing/cleaning'
import MachinesCleaning from '../../../containers/machines/cleaning'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'

const language = "ru";
const path = "оборудование-для-монтажа/оборудование-для-мойки";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Оборудование для мойки" description="Оборудование для мойки собранных печатных плат, трафаретов для нанесения паяльной пасты, технологической оснастки для пайки (паллеты) и частей оборудования" pathname={path} keywords="оборудование для мойки, оборудование для мойки плат, оборудование для мойки трафаретов, оборудование для мойки паллет, очистка трафаретов, мойка плат, smt, мойка плат, мойка трафаретов" lang={language}/>
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesCleaning/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 