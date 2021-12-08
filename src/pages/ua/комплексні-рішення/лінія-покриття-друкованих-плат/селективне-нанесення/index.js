import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import SelecCoatingLinePageHeader from '../../../../../components/pageheader/coating-selective'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesCoating from '../../../../../containers/machines/coating-ua'
import CoatingLineSelecUv from '../../../../../containers/lines/coating-uv'
import CoatingLineSelecIr from '../../../../../containers/lines/coating-ir'
import CoatingLineSelecTwo from '../../../../../containers/lines/coating-twoside'
import img from '../../../../../data/images/bg/machines/coating/selective-baner.jpg'


const title = "Селективне нанесення";
const language = "uk";
const path = "ua/комплексні-рішення/лінія-покриття-друкованих-плат/селективне-нанесення";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Селективне нанесення захисних покриттів організоване у виробничу лінію. Затвердіння відбувається в печах з ультрафіолетовим та інфрачервоним випромінюванням" pathname={path} keywords="селективне нанесення, нанесення зануренням, лінія покриття друкованих плат, установка вологозахисту, установка вологозахисту зануренням, установка вологозахисту розпиленням, установка селективного вологозахисту, селективний вологозахист, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating, dc 2000, dip coating" image={img} lang={language}/>
    <Header path={path}/>
   
    <SelecCoatingLinePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <CoatingLineSelecUv language={language} />
        <CoatingLineSelecIr language={language} />
        <CoatingLineSelecTwo language={language} />
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 