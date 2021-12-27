import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import AoiCoatingPageHeader from '../../../../components/pageheader/coating-curing'
import AoiCoating from '../../../../containers/machines/coating/aoi'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesCoating from '../../../../containers/machines/coating'



const title = "Инспекция нанесения защитных покрытий";
const language = "ru";
const path = "оборудование-для-монтажа/влагозащита-электроники/инспекция-нанесения-защитных-покрытий";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Автоматическая инспекция нанесения защитных покрытий на собранные электронные блоки. Оборудование работают с защитными материалами с отражением УФ света." pathname={path} keywords="Инспекция нанесения защитных покрытий, установка влагозащиты, установка влагозащиты погружением, установка влагозащиты распылением, установка селективной влагозащиты, селективная влагозащита, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating, dc 2000, dip coating, pva 20/20" lang={language}/>
    <Header path={path}/>
    <AoiCoatingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <AoiCoating path={path} language={language}/>
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 