import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import PalleteCleaningPageHeader from '../../../../components/pageheader/pallete-cleaning'
import PalleteCleaning from '../../../../containers/machines/cleaning/pallete'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesCleaning from '../../../../containers/machines/cleaning'



const title = "Мойка паллет кареток";
const language = "ru";
const path = "оборудование-для-монтажа/оборудование-для-мойки/мойка-паллет-кареток";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Мойка паллет кареток применяемых для монтажа электронных компонентов отверстия печатных плат на установках пайки волной припоя, установках селективной пайки" pathname={path} keywords="Мойка паллет кареток для волны,fluxclean HD,мойка кареток для волны, отмывка паллет,отмывка кареток,пайка волной,wave soldering pallet cleaning,atron sp200, FluxCLEAN T4, SuperSWASH, MiniSWASH, CompaCLEAN, UniCLEAN" lang={language}/>
    <Header path={path}/>
    <PalleteCleaningPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <PalleteCleaning path={path} language={language}/>
        <ContactArea />
        <MachinesCleaning />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 