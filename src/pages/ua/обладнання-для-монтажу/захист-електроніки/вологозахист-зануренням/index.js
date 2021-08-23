import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import DipCoatingPageHeader from '../../../../../components/pageheader/coating-dip'
import DipCoating from '../../../../../containers/machines/coating/dip'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesCoating from '../../../../../containers/machines/coating-ua'


const title = "Вологозахист зануренням";
const language = "uk";
const path = "ua/обладнання-для-монтажу/захист-електроніки/вологозахист-зануренням";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Вологозахист зануренням у ванну з лаками застосовується для нанесення захисних покриттів на всю поверхню складеної електронної плати. Безпечна конструкція" pathname={path} keywords="установка вологозахисту, установка вологозахисту зануренням, установка вологозахисту розпиленням, установка селективного вологозахисту, селективний вологозахист, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating, dip coating" lang={language}/>
    <Header path={path}/>
   
    <DipCoatingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <DipCoating path={path} language={language}/>
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 