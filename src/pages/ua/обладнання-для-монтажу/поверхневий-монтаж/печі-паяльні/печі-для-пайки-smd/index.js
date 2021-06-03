import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import SpideRewlowUaPageHeader from '../../../../../../components/pageheader/semi-placer'
import SpideRewlowUa from '../../../../../../containers/machines/smt/reflow/spide'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Печі для пайки SMD";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/печі-паяльні/печі-для-пайки-smd";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Печі для пайки SMD застосовують для монтажу електронних компонентів  на друковані плати. Процес використовується в технології поверхневого монтажу плат SMT" pathname={path} keywords="печі для пайки smd, конвекційні печі оплавлення, піч паяльна, паяльні печі, печі для пайки smd, печі для пайки, печі оплавлення, печі оплавлення паяльної пасти, mistral 260, mistral 360, HA06, kayo rf-430, kayo rf-630, jt rs-800, jt rs-600, jt rs-1000, juki rs-800, juki rs-600, juki rs -1000" lang={language}/>
    <Header path={path}/>
   
    <SpideRewlowUaPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <SpideRewlowUa path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 