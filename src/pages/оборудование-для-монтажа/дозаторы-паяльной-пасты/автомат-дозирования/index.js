import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import DispensingSemiPageHeader from '../../../../components/pageheader/dispensing-semi-automatic'
import DispensingSemi from '../../../../containers/machines/dispensing/semi-automatic'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesDispensing from '../../../../containers/machines/dispensing'



const title = "Автомат дозирования";
const language = "ru";
const path = "оборудование-для-монтажа/дозаторы-паяльной-пасты/автомат-дозирования";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Автомат дозирования для нанесения паяльной пасты и клея на контактные площадки плат. Отдельностоящее настольное оборудование для мелкосерийного производства" pathname={path} keywords="Автомат дозирования, дозаторы паяльной пасты и клея, для нанесения паяльной пасты, для нанесения клея, паяльная паста, оборудование для поверхностного монтажа, smt, монтаж плат" lang={language}/>
    <Header path={path}/>
    <DispensingSemiPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <DispensingSemi path={path} language={language}/>
        <ContactArea />
        <MachinesDispensing />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 