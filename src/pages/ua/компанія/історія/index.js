import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import HistoryPageHeader from '../../../../components/pageheader/history'
import IntroArea from '../../../../containers/our-history/intro-area-ua'
import HistoryArea from '../../../../containers/our-history/history-area-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-two-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import img from '../../../../data/images/bg/about-us/parthnership.jpg'


const title = "Наша Історія";
const language = "uk";
const path = "ua/компанія/історія";
const AboutPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Наша Історія розвитку це не тільки історія успіху. Життя складається з маленьких кроків, які створюють свій унікальний шлях становлення та зростання. " 
      pathname={path}
      keywords="Партнерство, Контакты, О нас, Техническое обучение, Пуско-наладка оборудования, технология поверхностного монтажа, smt, juki, pva, pbt works, cab, inertec ,оборудование smt"
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
