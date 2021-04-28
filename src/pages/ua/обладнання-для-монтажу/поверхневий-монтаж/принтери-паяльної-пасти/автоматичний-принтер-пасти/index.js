import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import SemiPrintPageHeader from '../../../../../../components/pageheader/semi-printer'
import SemiPrint from '../../../../../../containers/machines/smt/printer/auto-printer'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Автоматичний принтер пасти";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/принтери-паяльної-пасти/автоматичний-принтер-пасти";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Автоматичний принтер пасти для нанесення паяльної пасти на контактні площадки друкованих плат в складі лінії для поверхневого монтажу компонентів на плати" pathname={path} keywords="Автоматичний принтер пасти, Принтери пасти ручні, напівавтоматичний трафаретний принтер, машини для нанесення паяльної пасти, принтери паяльної пасти, паяльна паста, обладнання для поверхневого монтажу плат, принтери паяльної пасти, G-Titan, dek, sd240, sd300, sd360-u, pbt works, UNIPRINT, UNIPRINT P, fa23 , go23, goled, go29" lang={language}/>
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
 