import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import FiltrationPageHeader from '../../../../components/page-header/filtration'
import FiltrationUa from '../../../../containers/machines/filtration/filtrationsolution'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import MachinesFiltration from '../../../../containers/machines/filtration-ua'


const language = "uk";
const path = "ua/обладнання-для-монтажу/системи-уловлювання-диму"; 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Системи уловлювання диму" description="Системи уловлювання диму для оснащення робочого місця для проведення ручного монтажу електронних компонентів на друковані плати Автономне витяжне обладнання" pathname={path}
    keywords="Системи уловлювання диму, Димоуловлювальні системи,bofa,димоуловлювачі для паяння,димоуловлювач,витяжка для паяння,витяжка для паяльника,димоуловлювач з вугільним фільтром,v250,v200"  lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <FiltrationPageHeader lang={language}/>
      <FiltrationUa lang={language}/>
      <ContactArea />
      <MachinesFiltration/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 