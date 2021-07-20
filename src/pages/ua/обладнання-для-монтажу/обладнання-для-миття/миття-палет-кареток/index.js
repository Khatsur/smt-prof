import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import PalleteCleaningPageHeader from '../../../../../components/pageheader/pallete-cleaning'
import PalleteCleaning from '../../../../../containers/machines/cleaning/pallete'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesCleaning from '../../../../../containers/machines/cleaning-ua'


const title = "Миття палет кареток";
const language = "uk";
const path = "ua/обладнання-для-монтажу/обладнання-для-миття/миття-палет-кареток";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Миття палет кареток що застосовуються для монтажу електронних компонентів в отвори друкованих плат на установках пайки хвилею припою та селективного пайяння" pathname={path} keywords="Миття палет кареток для хвилі, fluxclean HD, мийка кареток для хвилі, відмивання палет, відмивання кареток, пайка хвилею, wave soldering pallet cleaning, atron sp200, FluxCLEAN T4, SuperSWASH, MiniSWASH, CompaCLEAN, UniCLEAN" lang={language}/>
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
 