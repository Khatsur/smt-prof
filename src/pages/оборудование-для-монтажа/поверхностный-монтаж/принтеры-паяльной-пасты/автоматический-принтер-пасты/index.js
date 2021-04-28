import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import AutoPrintPageHeader from '../../../../../components/pageheader/auto-printer'
import AutoPrint from '../../../../../containers/machines/smt/printer/auto-printer'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Автоматический принтер пасты";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/принтеры-паяльной-пасты/автоматический-принтер-пасты";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Автоматический принтер пасты для нанесения паяльной пасты на контактные площадки печатных плат в автоматическом режиме. Для автоматических линий монтажа SMT" pathname={path} keywords="автоматический принтер пасты, полуавтоматический трафаретный принтер, машины для нанесения паяльной пасты, принтеры паяльной пасты, паяльная паста, оборудование для поверхностного монтажа плат, принтеры паяльной пасты, G-Titan, dek, sd240, sd300, sd360-u, pbt works, UNIPRINT, UNIPRINT P, fa23, go23, goled, go29" lang={language}/>
    <Header path={path}/>
    <AutoPrintPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <AutoPrint path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 