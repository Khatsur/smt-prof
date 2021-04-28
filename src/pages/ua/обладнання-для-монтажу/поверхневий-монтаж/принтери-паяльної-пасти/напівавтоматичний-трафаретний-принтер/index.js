import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import SemiPrintPageHeader from '../../../../../../components/pageheader/semi-printer'
import SemiPrint from '../../../../../../containers/machines/smt/printer/semi-printer'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Напівавтоматичний трафаретний принтер";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/принтери-паяльної-пасти/напівавтоматичний-трафаретний-принтер";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Напівавтоматичний трафаретний принтер для нанесення паяльної пасти на контактні площадки друкованих плат. Електропривод ракелів. Поверхневий монтаж SMT" pathname={path} keywords="Принтери пасти ручні, напівавтоматичний трафаретний принтер, машини для нанесення паяльної пасти, принтери паяльної пасти, паяльна паста, обладнання для поверхневого монтажу плат, принтери паяльної пасти, G-Titan, dek, sd240, sd300, sd360-u, pbt works, UNIPRINT, UNIPRINT P, fa23 , go23, goled, go29" lang={language}/>
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
 