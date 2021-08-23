import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import SelectiveCoatingPageHeader from '../../../../../components/pageheader/coating-selective'
import SelectiveCoating from '../../../../../containers/machines/coating/selective'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesCoating from '../../../../../containers/machines/coating-ua'


const title = "Селективний вологозахист";
const language = "uk";
const path = "ua/обладнання-для-монтажу/захист-електроніки/селективний-вологозахист";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Селективний вологозахист застосовується для нанесення захисних покриттів на відмічені місця на зібраному електроном вузлі. Можливо нанесення лаку всю плату" pathname={path} keywords="установка вологозахисту, установка вологозахисту зануренням, установка вологозахисту розпиленням, установка селективного вологозахисту, селективний вологозахист, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating" lang={language}/>
    <Header path={path}/>
   
    <SelectiveCoatingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <SelectiveCoating path={path} language={language}/>
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 