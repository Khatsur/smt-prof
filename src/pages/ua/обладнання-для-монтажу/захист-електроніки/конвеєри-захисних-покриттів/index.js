import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one-ua'
import ConveyerCoatingPageHeader from '../../../../../components/pageheader/coating-conveyer'
import ConveyerCoating from '../../../../../containers/machines/coating/conveyer'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesCoating from '../../../../../containers/machines/coating-ua'
import img from '../../../../../data/images/bg/machines/coating/coating-conveyer-baner.jpg'


const title = "Конвеєри захисних покриттів";
const language = "uk";
const path = "ua/обладнання-для-монтажу/захист-електроніки/конвеєри-захисних-покриттів";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Конвеєри захисних покриттів, що вбудовуються у виробничу лінію для нанесення захисного покриття на друковані плати. Обладнання має спеціальне виконання." pathname={path} keywords="Конвеєри захисних покриттів, установка вологозахисту, установка вологозахисту зануренням, установка вологозахисту розпиленням, установка селективного вологозахисту, селективний вологозахист, smt, PVA, Delta 8, Delta 6, pva360, sigma, aym" image={img} lang={language}/>
    <Header path={path}/>
    <ConveyerCoatingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <ConveyerCoating path={path} language={language}/>
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 