import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import JukiAoiPageHeader from '../../../../../../components/pageheader/juki-aoi'
import JukiAoiUa from '../../../../../../containers/machines/smt/aoi/juki'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Системи автоматичної оптичної інспекції";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/автоматична-оптична-інспекція/системи-автоматичної-оптичної-інспекції";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Системи автоматичного оптичної інспекції застосовуються для автоматичного контролю якості монтажу електронних компонентів на друковані плати. Монтаж плат SMT" pathname={path} keywords="Системи автоматичної оптичної інспекції, автоматична оптична інспекція, оптична інспекція, автоматична оптична інспекція друкованих плат, AOI, системи автоматичної оптичної інспекції, автоматична оптична інспекція, контроль друкованих плат, оптична інспекція, інспекція нанесення паяльної пасти, RV-2, Juki, системи автоматичної оптичної інспекції, SPI, smt , juki RV-2, RV-2, juki RV-2-3D, RV-2-3DH, RV-2-3D, vcta-a410" lang={language}/>
    <Header path={path}/>
   
    <JukiAoiPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <JukiAoiUa path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 