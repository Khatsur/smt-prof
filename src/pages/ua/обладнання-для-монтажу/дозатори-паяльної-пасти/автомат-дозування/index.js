import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import DispensingSemiPageHeaderUa from '../../../../../components/pageheader/dispensing-semi-automatic'
import DispensingSemiUa from '../../../../../containers/machines/dispensing/semi-automatic'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesDispensingUa from '../../../../../containers/machines/dispensing-ua'


const title = "Автомат дозування";
const language = "uk";
const path = "ua/обладнання-для-монтажу/дозатори-паяльної-пасти/автомат-дозування"; 
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Автомат дозування для нанесення паяльної пасти, клею та інших матеріалів на контактні площадки плат. Настільне обладнання для дрібносерійного виробництва." pathname={path} keywords="Автомат дозування, дозатори паяльної пасти та клею, для нанесення паяльної пасти, для нанесення клею, паяльна паста, обладнання для поверхневого монтажу, smt, монтаж плат" lang={language}/>
    <Header path={path}/>
   
    <DispensingSemiPageHeaderUa 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <DispensingSemiUa path={path} language={language}/>
        <ContactArea />
        <MachinesDispensingUa />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 