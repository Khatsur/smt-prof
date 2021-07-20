import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import PcbCleaningPageHeader from '../../../../../components/pageheader/pcb-cleaning'
import PcbCleaning from '../../../../../containers/machines/cleaning/pcb'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesCleaning from '../../../../../containers/machines/cleaning-ua'


const title = "Відмивання друкованих плат";
const language = "uk";
const path = "ua/обладнання-для-монтажу/обладнання-для-миття/відмивання-друкованих-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Відмивання друкованих плат для очищення зібраних електронних блоків від забруднень після застосування паяльних матеріалів (паяльна паста, флюс) при монтажі" pathname={path} keywords="ультразвукова відмивання друкованих плат, відмивання плат, відмивання плат після пайки, відмивання плат в ультразвукової ванні, ультразвукові ванни, ультразвукова мийка плат, HyperSWASH, SuperSWASH, MiniSWASH, CompaCLEAN, UniCLEAN" lang={language}/>
    <Header path={path}/>
   
    <PcbCleaningPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <PcbCleaning path={path} language={language}/>
        <ContactArea />
        <MachinesCleaning />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 