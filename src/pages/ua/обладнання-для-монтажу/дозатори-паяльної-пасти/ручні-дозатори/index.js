import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import DispensingManualPageHeaderUa from '../../../../../components/pageheader/dispensing-manual'
import DispensingManualUa from '../../../../../containers/machines/dispensing/manual'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesDispensingUa from '../../../../../containers/machines/dispensing-ua'


const title = "Ручні дозатори";
const language = "uk";
const path = "ua/обладнання-для-монтажу/дозатори-паяльної-пасти/ручні-дозатори"; 
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Ручні дозатори для нанесення паяльної пасти на контактні площадки друкованих плат та нанесення клею. Настільне компактне обладнання для прототипування плат" pathname={path} keywords="Ручні дозатори, Автоматичний дозатор,Автомат дозування, дозатори паяльної пасти та клею, для нанесення паяльної пасти, для нанесення клею, паяльна паста, обладнання для поверхневого монтажу, smt, монтаж плат" lang={language}/>
    <Header path={path}/>
   
    <DispensingManualPageHeaderUa 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <DispensingManualUa path={path} language={language}/>
        <ContactArea />
        <MachinesDispensingUa />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 