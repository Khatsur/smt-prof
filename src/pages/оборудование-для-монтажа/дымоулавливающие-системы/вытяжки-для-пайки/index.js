import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import FiltrationBigPageHeader from '../../../../components/pageheader/filtration-solder'
import FiltrationBig from '../../../../containers/machines/filtration/solder-big'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesFiltration from '../../../../containers/machines/filtration'



const title = "Вытяжки для пайки";
const language = "ru";
const path = "оборудование-для-монтажа/дымоулавливающие-системы/вытяжки-для-пайки";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Многоместные вытяжки пайки применяют для оснащение вытяжной вентиляцией производственного участка ручного монтажа электронных компонентов на печатные платы" pathname={path} keywords="Вытяжки для пайки,Дымоуловители для пайки,Дымоулавливающие системы,bofa,дымоуловители для пайки,дымоуловитель,вытяжка для пайки,вытяжка для паяльника,дымоуловитель с углеродным фильтром,v250,v200" lang={language}/>
    <Header path={path}/>
    <FiltrationBigPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <FiltrationBig path={path} language={language}/>
        <ContactArea />
        <MachinesFiltration />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 