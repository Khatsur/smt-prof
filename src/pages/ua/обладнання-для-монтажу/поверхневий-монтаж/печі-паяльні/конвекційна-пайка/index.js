import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import JukiRewlowUaPageHeader from '../../../../../../components/pageheader/juki-reflow'
import JukiRewlowUa from '../../../../../../containers/machines/smt/reflow/juki'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Конвекційна пайка";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/печі-паяльні/конвекційна-пайка";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Конвекційна пайка електронних компонентів в спеціальних паяльних печах. Процес застосуються для технології поверхневого монтажу компонентів на плати - SMT" pathname={path} keywords="печі для пайки smd, конвекційні печі оплавлення, піч паяльна, паяльні печі, печі для пайки smd, печі для пайки, печі оплавлення, печі оплавлення паяльної пасти, mistral 260, mistral 360, HA06, kayo rf-430, kayo rf-630, jt rs-800, jt rs-600, jt rs-1000, juki rs-800, juki rs-600, juki rs -1000" lang={language}/>
    <Header path={path}/>
   
    <JukiRewlowUaPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <JukiRewlowUa path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 