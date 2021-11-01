import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import FiltrationLaserPageHeader from '../../../../components/pageheader/filtration-laser'
import FiltrationLaser from '../../../../containers/machines/filtration/laser'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesFiltration from '../../../../containers/machines/filtration'



const title = "Вытяжки для лазерных станков";
const language = "ru";
const path = "оборудование-для-монтажа/дымоулавливающие-системы/вытяжки-для-лазерных-станков";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Вытяжки для лазерных станков применяют для оснащение автономной вытяжной вентиляцией оборудования для лазерной маркировки плат, лазерной резки печатных плат" pathname={path} keywords="Вытяжки для лазерных станков,Вытяжки для пайки,Дымоуловители для пайки,Дымоулавливающие системы,bofa,дымоуловители для пайки,дымоуловитель,вытяжка для пайки,вытяжка для паяльника,дымоуловитель с углеродным фильтром,v250,v200" lang={language}/>
    <Header path={path}/>
    <FiltrationLaserPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <FiltrationLaser path={path} language={language}/>
        <ContactArea />
        <MachinesFiltration />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 