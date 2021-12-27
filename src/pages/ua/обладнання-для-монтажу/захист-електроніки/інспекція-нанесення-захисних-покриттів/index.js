import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import AoiCoatingPageHeader from '../../../../../components/pageheader/coating-curing'
import AoiCoating from '../../../../../containers/machines/coating/aoi'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesCoating from '../../../../../containers/machines/coating-ua'


const title = "Інспекція нанесення захисних покриттів";
const language = "uk";
const path = "ua/обладнання-для-монтажу/захист-електроніки/інспекція-нанесення-захисних-покриттів";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Автоматична оптична інспекція нанесення захисного покриття на зібрані електронні блоки. Обладнання працює із захисними матеріалами, що відбивають УФ світло." pathname={path} keywords="Інспекція нанесення захисних покриттів, установка вологозахисту, установка вологозахисту зануренням, установка вологозахисту розпиленням, установка селективного вологозахисту, селективний вологозахист, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating, dip coating, pva 20/20" lang={language}/>
    <Header path={path}/>
   
    <AoiCoatingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <AoiCoating path={path} language={language}/>
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 