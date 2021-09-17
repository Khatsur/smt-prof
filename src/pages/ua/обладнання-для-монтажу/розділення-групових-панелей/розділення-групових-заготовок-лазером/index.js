import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import CuttingLaserPageHeader from '../../../../../components/pageheader/cutting-laser'
import CuttingLaser from '../../../../../containers/machines/cutting/laser'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesCutting from '../../../../../containers/machines/cutting-ua'


const title = "Розділення групових заготовок лазером";
const language = "uk";
const path = "ua/обладнання-для-монтажу/розділення-групових-панелей/розділення-групових-заготовок-лазером";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Вологозахист зануренням у ванну з лаками застосовується для нанесення захисних покриттів на всю поверхню складеної електронної плати. Безпечна конструкція" pathname={path} keywords="установка вологозахисту, установка вологозахисту зануренням, установка вологозахисту розпиленням, установка селективного вологозахисту, селективний вологозахист, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating, dip coating" lang={language}/>
    <Header path={path}/>
   
    <CuttingLaserPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <CuttingLaser path={path} language={language}/>
        <ContactArea />
        <MachinesCutting />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 