import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import DispenserPageHeader from '../../../../components/page-header/dispensing'
import DispenserUa from '../../../../containers/machines/dispensing/dispensingsolution'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import MachinesDispensingUa from '../../../../containers/machines/dispensing-ua'


const language = "uk";
const path = "ua/обладнання-для-монтажу/дозатори-паяльної-пасти"; 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Дозатори паяльної пасти" description="Дозатори паяльної пасти для нанесення матеріалів на контактні площадки друкованих плат. Автоматичне обладнання для роботи в лінії та окремі настільні машини" pathname={path}
    keywords="дозатори паяльної пасти та клею, для нанесення паяльної пасти, для нанесення клею, паяльна паста, обладнання для поверхневого монтажу, smt, монтаж плат"  lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <DispenserPageHeader lang={language}/>
      <DispenserUa lang={language}/>
      <ContactArea />
      <MachinesDispensingUa/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 