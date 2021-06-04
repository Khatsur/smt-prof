import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import JukiRewlowPageHeader from '../../../../../components/pageheader/juki-reflow'
import JukiRewlow from '../../../../../containers/machines/smt/reflow/juki'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Конвекционная пайка";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/печи-паяльные/конвекционная-пайка";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Конвекционная пайка электронных компонентов в специальных паяльных печах. Процесс применятся в технологии поверхностного монтажа компонентов на платы - SMT" pathname={path} keywords="печи для пайки smd, конвекционные печи оплавления, печь паяльная, паяльные печи, печи для пайки smd,печи для пайки,печи оплавления, печи оплавления паяльной пасты,mistral 260,mistral 360,HA06, kayo rf-430, kayo rf-630, jt rs-800, jt rs-600, jt rs-1000, juki rs-800, juki rs-600, juki rs-1000" lang={language}/>
    <Header path={path}/>
    <JukiRewlowPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <JukiRewlow path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 