import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import JukiSpiPageHeader from '../../../../../components/pageheader/juki-spi'
import JukiSpi from '../../../../../containers/machines/smt/spi/juki'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Инспекция нанесения паяльной пасты";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/инспекция-паяльной-пасты/инспекция-нанесения-паяльной-пасты";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Инспекция нанесения паяльной пасты применяется для автоматического контроля качества нанесения паяльной пасты на контактные площадки печатных плат. Для SMT" pathname={path} keywords="автоматическая оптическая инспекция, оптическая инспекция, инспекция нанесения паяльной пасты,RV-2,Juki,системы автоматической оптической инспекции, SPI, smt, juki RV-2, RV-2, juki RV-2-3D, RV-2-3DH, RV-2-3D" lang={language}/>
    <Header path={path}/>
    <JukiSpiPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <JukiSpi path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 