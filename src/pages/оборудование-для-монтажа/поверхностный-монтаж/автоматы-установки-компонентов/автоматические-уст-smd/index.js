import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import SemiPlacerPageHeader from '../../../../../components/pageheader/semi-placer'
import SemiPlacer from '../../../../../containers/machines/smt/placer/semiplacer'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Автоматические установщики SMD";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов/автоматические-уст-smd";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Автоматические установщики SMD на поверхность печатных плат в автоматическом режиме. Оборудование применяется для поверхностного монтажа компонентов - SMT" pathname={path} keywords="Автоматические установщики SMD, автомат установки smd компонентов, установщик компонентов,автоматические установщики fritsch, расстановщик smd, оборудование для smd,smt монтаж,placeALL®610, placeALL®520, placeALL®520" lang={language}/>
    <Header path={path}/>
    <SemiPlacerPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <SemiPlacer path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 