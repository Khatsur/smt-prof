import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import DispensingManualPageHeader from '../../../../components/pageheader/dispensing-manual'
import DispensingManual from '../../../../containers/machines/dispensing/manual'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesDispensing from '../../../../containers/machines/dispensing'



const title = "Ручные дозаторы";
const language = "ru";
const path = "оборудование-для-монтажа/дозаторы-паяльной-пасты/ручные-дозаторы";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Ручные дозаторы для нанесения паяльной пасты на контактные площадки печатных плат и нанесения клея. Настольное компактное оборудование для прототипирования" pathname={path} keywords="ручные дозаторы, Автоматический дозатор,Автомат дозирования, дозаторы паяльной пасты и клея, для нанесения паяльной пасты, для нанесения клея, паяльная паста, оборудование для поверхностного монтажа, smt, монтаж плат" lang={language}/>
    <Header path={path}/>
    <DispensingManualPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <DispensingManual path={path} language={language}/>
        <ContactArea />
        <MachinesDispensing />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 