import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import DispensingAutoPageHeaderUa from '../../../../../components/pageheader/dispensing-automatic'
import DispensingAutoUa from '../../../../../containers/machines/dispensing/automatic'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesDispensingUa from '../../../../../containers/machines/dispensing-ua'


const title = "Автоматичний дозатор";
const language = "uk";
const path = "ua/обладнання-для-монтажу/дозатори-паяльної-пасти/автоматичний-дозатор"; 
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Автоматичний дозатор для нанесення матеріалів. Обладнання має виконання для роботи у складі виробничої лінії. Може працювати поза лінією як окрема машина." pathname={path} keywords="Автоматичний дозатор,Автомат дозування, дозатори паяльної пасти та клею, для нанесення паяльної пасти, для нанесення клею, паяльна паста, обладнання для поверхневого монтажу, smt, монтаж плат" lang={language}/>
    <Header path={path}/>
   
    <DispensingAutoPageHeaderUa 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <DispensingAutoUa path={path} language={language}/>
        <ContactArea />
        <MachinesDispensingUa />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 