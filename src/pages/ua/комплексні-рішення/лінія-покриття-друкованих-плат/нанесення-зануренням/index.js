import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import DipLinePageHeader from '../../../../../components/pageheader/coating-dip'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesCoating from '../../../../../containers/machines/coating-ua'
import CoatingLineDip from '../../../../../containers/lines/coating-dip'
import img from '../../../../../data/images/bg/machines/coating/dip-baner.jpg'


const title = "Нанесення зануренням";
const language = "uk";
const path = "ua/комплексні-рішення/лінія-покриття-друкованих-плат/нанесення-зануренням";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Нанесення зануренням застосовується для нанесення захисного покриття на всю поверхню зібраної електронної плати. Лінії для багатосерійного виробництва плат." pathname={path} keywords="селективне нанесення, нанесення зануренням, лінія покриття друкованих плат, установка вологозахисту, установка вологозахисту зануренням, установка вологозахисту розпиленням, установка селективного вологозахисту, селективний вологозахист, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating, dc 2000, dip coating" image={img} lang={language}/>
    <Header path={path}/>
   
    <DipLinePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <CoatingLineDip language={language} />
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 