import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import SpideRewlowPageHeader from '../../../../../components/pageheader/spide-reflow'
import SpideRewlow from '../../../../../containers/machines/smt/reflow/spide'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Печи для пайки SMD";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/печи-паяльные/печи-для-пайки-smd";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Печи для пайки SMD применяют для монтажа электронных компонентов – SMD на печатные платы. Процесс используется в технологии поверхностного монтажа плат SMT" pathname={path} keywords="печи для пайки smd, конвекционные печи оплавления, печь паяльная, паяльные печи, печи для пайки smd,печи для пайки,печи оплавления, печи оплавления паяльной пасты,mistral 260,mistral 360,HA06, kayo rf-430, kayo rf-630, jt rs-800, jt rs-600, jt rs-1000, juki rs-800, juki rs-600, juki rs-1000" lang={language}/>
    <Header path={path}/>
    <SpideRewlowPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <SpideRewlow path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 