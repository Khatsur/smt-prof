import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import DispensingAutoPageHeader from '../../../../components/pageheader/dispensing-automatic'
import DispensingAuto from '../../../../containers/machines/dispensing/automatic'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesDispensing from '../../../../containers/machines/dispensing'



const title = "Автоматический дозатор";
const language = "ru";
const path = "оборудование-для-монтажа/дозаторы-паяльной-пасты/автоматический-дозатор";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Автоматический дозатор для нанесения материалов Оборудование имеет напольное исполнение для работы в составе производственной линии Может работать вне линии" pathname={path} keywords="Автоматический дозатор,Автомат дозирования, дозаторы паяльной пасты и клея, для нанесения паяльной пасты, для нанесения клея, паяльная паста, оборудование для поверхностного монтажа, smt, монтаж плат" lang={language}/>
    <Header path={path}/>
    <DispensingAutoPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <DispensingAuto path={path} language={language}/>
        <ContactArea />
        <MachinesDispensing />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 