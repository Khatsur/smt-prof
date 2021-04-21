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
const language = "ua";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/принтери-паяльної-пасти/напівавтоматичний-трафаретний-принтер";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Принтери пасти ручні для нанесення паяльної пасти через металевий трафарет на контактні площадки друкованих плат. Застосовується для монтажу компонентів SMT" pathname={path} keywords="Принтери пасти ручні, машини для нанесення паяльної пасти, принтери паяльної пасти, паяльна паста, обладнання для поверхневого монтажу плат, принтери паяльної пасти, G-Titan, dek" lang={language}/>
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
 