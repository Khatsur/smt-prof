import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import StencilCleaningPageHeader from '../../../../../components/pageheader/stencil-cleaning'
import StencilCleaning from '../../../../../containers/machines/cleaning/stencil'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesCleaning from '../../../../../containers/machines/cleaning-ua'


const title = "Відмивання трафаретів";
const language = "uk";
const path = "ua/обладнання-для-монтажу/обладнання-для-миття/відмивання-трафаретів";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Відмивання трафаретів – струменеве очищення металевих трафаретів від забруднень після нанесення паяльної пасти для процесах поверхневого монтажу плат - SMT" pathname={path} keywords="відмивання трафаретів, установки відмивання трафаретів, відмивання друкованих плат і трафаретів, система відмивання трафаретів, пристрої відмивання трафаретів, відмивання плат, HyperSWASH, SuperSWASH, MiniSWASH, CompaCLEAN, UniCLEAN" lang={language}/>
    <Header path={path}/>
   
    <StencilCleaningPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <StencilCleaning path={path} language={language}/>
        <ContactArea />
        <MachinesCleaning />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 