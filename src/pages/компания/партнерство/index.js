import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import PartnerPageHeader from '../../../components/pageheader/partner'
import SkillArea from '../../../containers/why-choose-us/our-skills'
import ContactArea from '../../../containers/global/contact-area/contact-two'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import img from '../../../data/images/bg/about-us/parthnership.jpg'


const title = "Партнерство";
const language = "ru";
const path = "компания/партнерство";
const AboutPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Партнерство. Мы не просто поставляем оборудование для монтажа плат. Партнерские отношения на взаимовыгодных условиях, обеспечивают максимальный успех всех." 
      pathname={path}
      keywords="партнерство,и Контакты, О нас, Техническое обучение, Пуско-наладка оборудования, технология поверхностного монтажа, smt, juki, pva, pbt works, cab, inertec ,оборудование smt"
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
