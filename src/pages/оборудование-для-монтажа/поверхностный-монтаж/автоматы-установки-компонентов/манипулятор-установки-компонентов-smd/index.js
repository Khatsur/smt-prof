import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import ManipulatorPageHeader from '../../../../../components/pageheader/manipulator'
import Manipulator from '../../../../../containers/machines/smt/placer/manipulator'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Манипулятор установки компонентов SMD";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов/манипулятор-установки-компонентов-smd";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Манипулятор установки компонентов SMD на поверхность печатных плат в ручном режиме. Оборудование применяется для поверхностного монтажа компонентов на платы" pathname={path} keywords="манипуляторы fritsch,ручные манипуляторы fritsch,манипулятор установки компонентов lm 901, fritsch lm900, манипулятор установки компонентов smd, lm900,lm901,smt, sm902, sm902 profesional" lang={language}/>
    <Header path={path}/>
    <ManipulatorPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <Manipulator path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 