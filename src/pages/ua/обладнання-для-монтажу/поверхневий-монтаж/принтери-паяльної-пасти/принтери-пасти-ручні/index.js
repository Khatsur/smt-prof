import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import SmallPrintPageHeader from '../../../../../../components/pageheader/small-printer'
import SmallPrint from '../../../../../../containers/machines/smt/printer/small-printer'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Принтери пасти ручні";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/принтери-паяльної-пасти/принтери-пасти-ручні";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Принтери пасти ручні для нанесення паяльної пасти через металевий трафарет на контактні площадки друкованих плат. Застосовується для монтажу компонентів SMT" pathname={path} keywords="Принтери пасти ручні, машини для нанесення паяльної пасти, принтери паяльної пасти, паяльна паста, обладнання для поверхневого монтажу плат, принтери паяльної пасти, G-Titan, dek" lang={language}/>
    <Header path={path}/>
   
    <SmallPrintPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <SmallPrint path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 