import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import ConveyerCoatingPageHeader from '../../../../components/pageheader/coating-conveyer'
import ConveyerCoating from '../../../../containers/machines/coating/conveyer'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesCoating from '../../../../containers/machines/coating'
import img from '../../../../data/images/bg/machines/coating/coating-conveyer-baner.jpg'


const title = "Конвейеры защитных покрытий";
const language = "ru";
const path = "оборудование-для-монтажа/влагозащита-электроники/конвейеры-защитных-покрытий";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Конвейеры защитных покрытий, которые встраиваются в производственную линию нанесения защитных покрытий на платы. Оборудование имеет специальное исполнение." pathname={path} keywords="Конвейеры защитных покрытий, установка влагозащиты, установка влагозащиты погружением, установка влагозащиты распылением, установка селективной влагозащиты, селективная влагозащита, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating" image={img} lang={language}/>
    <Header path={path}/>
    <ConveyerCoatingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <ConveyerCoating path={path} language={language}/>
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 