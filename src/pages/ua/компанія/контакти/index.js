import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import ContactPageHeader from '../../../../components/pageheader/contact'
import ContactFormArea from '../../../../containers/contact-us/contact-form-area-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-two-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import img from '../../../../data/images/bg/about-us/contact.jpg'


const title = "Контакти";
const language = "uk";
const path = "ua/компанія/контакти";
const AboutPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Контакты нашей компании. Мы обеспечиваем современными технологиями и инновационным оборудование предприятия производящие электронные изделия в Украине." 
      pathname={path}
      keywords="Контакты, О нас, Техническое обучение, Пуско-наладка оборудования, технология поверхностного монтажа, smt, juki, pva, pbt works, cab, inertec ,оборудование smt"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <main className="site-wrapper-reveal">
      <ContactPageHeader 
      pageContext={pageContext}
      location={location}
      title={title}
      />
      <ContactFormArea />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
)

export default AboutPage
