import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import SemiPrintPageHeader from '../../../../../components/pageheader/semi-printer'
import SemiPrint from '../../../../../containers/machines/smt/printer/semi-printer'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Полуавтоматический трафаретный принтер";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/принтеры-паяльной-пасты/полуавтоматический-трафаретный-принтер";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Полуавтоматический трафаретный принтер для нанесения паяльной пасты на контактные площадки печатных плат. Электропривод ракелей. Поверхностный монтаж SMT" pathname={path} keywords="полуавтоматический трафаретный принтер, машины для нанесения паяльной пасты, принтеры паяльной пасты, паяльная паста, оборудование для поверхностного монтажа плат, принтеры паяльной пасты, G-Titan, dek, sd240, sd300, sd360-u, pbt works, UNIPRINT, UNIPRINT P, fa23, go23, goled, go29" lang={language}/>
    <Header path={path}/>
    <SemiPrintPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <SemiPrint path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 