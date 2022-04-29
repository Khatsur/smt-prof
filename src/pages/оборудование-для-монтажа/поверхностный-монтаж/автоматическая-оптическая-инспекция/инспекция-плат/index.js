import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import EntryAoiPageHeader from '../../../../../components/pageheader/aoi-entry'
import EntryAoi from '../../../../../containers/machines/smt/aoi/vcta'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Оптическая инспекция печатных плат";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/автоматическая-оптическая-инспекция/инспекция-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Оптическая инспекция печатных плат применяются для автоматического контроля качества монтажа электронных компонентов на печатные платы. Монтаж плат -  SMT" pathname={path} keywords="Оптическая инспекция печатных плат, Системы автоматической оптической инспекции, автоматическая оптическая инспекция, оптическая инспекция, автоматическая оптическая инспекция печатных плат, AOI, системы автоматической оптической инспекции, автоматическая оптическая инспекция, контроль печатных плат, оптическая инспекция, инспекция нанесения паяльной пасты,RV-2,Juki,системы автоматической оптической инспекции, SPI, smt, juki RV-2, RV-2, juki RV-2-3D, RV-2-3DH, RV-2-3D,vcta-a410" lang={language}/>
    <Header path={path}/>
    <EntryAoiPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <EntryAoi path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 