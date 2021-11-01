import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import FiltrationSmallPageHeader from '../../../../components/pageheader/filtration-solder'
import FiltrationSmall from '../../../../containers/machines/filtration/solder-small'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesFiltration from '../../../../containers/machines/filtration'



const title = "Дымоуловители для пайки";
const language = "ru";
const path = "оборудование-для-монтажа/дымоулавливающие-системы/дымоуловители-для-пайки";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Дымоуловители для пайки для оснащения рабочего места для проведения ручного монтажа электронных компонентов на печатные платы. Автономные вытяжные системы." pathname={path} keywords="Дымоуловители для пайки,Дымоулавливающие системы,bofa,дымоуловители для пайки,дымоуловитель,вытяжка для пайки,вытяжка для паяльника,дымоуловитель с углеродным фильтром,v250,v200" lang={language}/>
    <Header path={path}/>
    <FiltrationSmallPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <FiltrationSmall path={path} language={language}/>
        <ContactArea />
        <MachinesFiltration />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 