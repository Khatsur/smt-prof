import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import JukiSpiPageHeader from '../../../../../../components/pageheader/juki-spi'
import JukiSpiUa from '../../../../../../containers/machines/smt/spi/juki'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Інспекція нанесення паяльної пасти";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/інспекція-паяльної-пасти/інспекція-нанесення-паяльної-пасти";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Інспекція нанесення паяльної пасти застосовується для автоматичного контролю якості нанесення паяльної пасти на контактні площадки друкованих плат. Для SMT" pathname={path} keywords="автоматична оптична інспекція, оптична інспекція, інспекція нанесення паяльної пасти, RV-2, Juki, системи автоматичної оптичної інспекції, SPI, smt, juki RV-2, RV-2, juki RV-2-3D, RV-2-3DH, RV -2-3D" lang={language}/>
    <Header path={path}/>
   
    <JukiSpiPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <JukiSpiUa path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 