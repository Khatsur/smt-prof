import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import JukiAoiPageHeader from '../../../../../components/pageheader/juki-aoi'
import JukiAoi from '../../../../../containers/machines/smt/aoi/juki'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Системы автоматической оптической инспекции";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/автоматическая-оптическая-инспекция/системы-инспекции";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Системы автоматической оптической инспекции применяются для автоматического контроля качества монтажа электронных компонентов на печатные платы. Монтаж  SMT" pathname={path} keywords="Системы автоматической оптической инспекции, автоматическая оптическая инспекция, оптическая инспекция, автоматическая оптическая инспекция печатных плат, AOI, системы автоматической оптической инспекции, автоматическая оптическая инспекция, контроль печатных плат, оптическая инспекция, инспекция нанесения паяльной пасты,RV-2,Juki,системы автоматической оптической инспекции, SPI, smt, juki RV-2, RV-2, juki RV-2-3D, RV-2-3DH, RV-2-3D,vcta-a410" lang={language}/>
    <Header path={path}/>
    <JukiAoiPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <JukiAoi path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 