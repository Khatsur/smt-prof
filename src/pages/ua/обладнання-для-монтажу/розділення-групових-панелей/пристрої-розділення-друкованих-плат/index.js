import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import CuttingCuterPageHeader from '../../../../../components/pageheader/cutting-cutter'
import CuttingCuter from '../../../../../containers/machines/cutting/cutter'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesCutting from '../../../../../containers/machines/cutting-ua'


const title = "Пристрої розділення друкованих плат";
const language = "uk";
const path = "ua/обладнання-для-монтажу/розділення-групових-панелей/пристрої-розділення-друкованих-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Вологозахист зануренням у ванну з лаками застосовується для нанесення захисних покриттів на всю поверхню складеної електронної плати. Безпечна конструкція" pathname={path} keywords="установка вологозахисту, установка вологозахисту зануренням, установка вологозахисту розпиленням, установка селективного вологозахисту, селективний вологозахист, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating, dip coating" lang={language}/>
    <Header path={path}/>
   
    <CuttingCuterPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <CuttingCuter path={path} language={language}/>
        <ContactArea />
        <MachinesCutting />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 