import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import PartnerPageHeader from '../../../../components/pageheader/partner'
import SkillArea from '../../../../containers/why-choose-us/our-skills-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-two-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import img from '../../../../data/images/bg/about-us/parthnership.jpg'


const title = "Партнерство";
const language = "uk";
const path = "ua/компанія/партнерство";
const AboutPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Партнерство. Ми не просто постачаємо обладнання для монтажу плат. Партнерські відносини на взаємовигідних умовах забезпечують максимальний успіх для усіх." 
      pathname={path}
      keywords="Партнерство, Контакты, О нас, Техническое обучение, Пуско-наладка оборудования, технология поверхностного монтажа, smt, juki, pva, pbt works, cab, inertec ,оборудование smt"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <main className="site-wrapper-reveal">
      <PartnerPageHeader 
      pageContext={pageContext}
      location={location}
      title={title}
      />
      <SkillArea />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
)

export default AboutPage
