import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one-ua'
import CuringCoatingPageHeader from '../../../../../components/pageheader/coating-curing'
import CuringCoating from '../../../../../containers/machines/coating/curing'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesCoating from '../../../../../containers/machines/coating-ua'
import img from '../../../../../data/images/bg/machines/coating/curing-baner.jpg'


const title = "Обладнання для полімеризації";
const language = "uk";
const path = "ua/обладнання-для-монтажу/захист-електроніки/обладнання-для-полімеризації";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Обладнання для полімеризації захисних покриттів, що наносяться на друковані плати. Застосовується для лінії нанесення захисних покриттів і лаків на плати." pathname={path} keywords="Устаткування для затвердіння, Устаткування для полімеризації, Устаткування для УФ сушіння, Конвеєри захисних покриттів, установка вологозахисту, установка вологозахисту зануренням, установка вологозахисту розпиленням, установка селективного вологозахисту, селективний вологозахист, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating" image={img} lang={language}/>
    <Header path={path}/>
    <CuringCoatingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <CuringCoating path={path} language={language}/>
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 