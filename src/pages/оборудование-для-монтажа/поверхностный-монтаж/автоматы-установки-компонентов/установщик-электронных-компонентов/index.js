import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import JukiPlacerPageHeader from '../../../../../components/pageheader/juki-rs'
import JukiPlacerRs from '../../../../../containers/machines/smt/placer/juki-rs'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Установщик электронных компонентов";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов/установщик-электронных-компонентов";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="JUKI Установщик электронных компонентов SMD на поверхность печатных плат. Автоматизация SMT. Оборудование применяется для поверхностного монтажа компонентов" pathname={path} keywords="Установщик электронных компонентов, автоматические установщики SMD, Juki, установщик электронных компонентов, расстановщик smd, оборудование для smd монтажа, оборудование smt, RS-1, rs-1r, rs-1xl, rx-6, rx-7, rx-7r, fx-3, JX-350" lang={language}/>
    <Header path={path}/>
    <JukiPlacerPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <JukiPlacerRs path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 