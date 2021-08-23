import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import SprayCoatingPageHeader from '../../../../../components/pageheader/coating-spray'
import SprayCoating from '../../../../../containers/machines/coating/spray'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesCoating from '../../../../../containers/machines/coating-ua'


const title = "Нанесення захисних покриттів";
const language = "uk";
const path = "ua/обладнання-для-монтажу/захист-електроніки/нанесення-захисних-покриттів";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Ручне нанесення захисних покриттів розпиленням застосовується для нанесення захисних покриттів на всю поверхню зібраної електронної плати. Бюджетне рішення" pathname={path} keywords="установка вологозахисту, установка вологозахисту зануренням, установка вологозахисту розпиленням, установка селективного вологозахисту, селективний вологозахист, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating, dip coating" lang={language}/>
    <Header path={path}/>
   
    <SprayCoatingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <SprayCoating path={path} language={language}/>
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 