import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import HistoryPageHeader from '../../../components/pageheader/history'
import IntroArea from '../../../containers/our-history/intro-area'
import HistoryArea from '../../../containers/our-history/history-area'
import ContactArea from '../../../containers/global/contact-area/contact-two'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import img from '../../../data/images/bg/about-us/history.jpg'


const title = "Наша история";
const language = "ru";
const path = "компания/история";
const AboutPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Наша история. Не бывает хороших времен, когда начинаешь. Но всегда есть шанс достичь успеха. Когда рутина притупляет остроту восприятия начните что-то новое" 
      pathname={path}
      keywords="история, партнерство, Контакты, О нас, Техническое обучение, Пуско-наладка оборудования, технология поверхностного монтажа, smt, juki, pva, pbt works, cab, inertec ,оборудование smt"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <main className="site-wrapper-reveal">
      <HistoryPageHeader 
      pageContext={pageContext}
      location={location}
      title={title}
      />
      <IntroArea />
      <HistoryArea />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
)

export default AboutPage
