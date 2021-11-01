import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import FiltrationPageHeader from '../../../components/page-header/filtration'
import Filtration from '../../../containers/machines/filtration/filtrationsolution'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import MachinesStorage from '../../../containers/machines/filtration'


 const language = "ru";
 const path = "оборудование-для-монтажа/дымоулавливающие-системы";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Дымоулавливающие системы" description="Дымоулавливающие системы для оснащения рабочего места для проведения ручного монтажа электронных компонентов на печатные платы. Автономное оборудование." pathname={path} keywords="Дымоулавливающие системы,bofa,дымоуловители для пайки,дымоуловитель,вытяжка для пайки,вытяжка для паяльника,дымоуловитель с углеродным фильтром,v250,v200" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <FiltrationPageHeader lang={language}/>
      
      <Filtration lang={language}/>
      <ContactArea />
      <MachinesStorage/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 