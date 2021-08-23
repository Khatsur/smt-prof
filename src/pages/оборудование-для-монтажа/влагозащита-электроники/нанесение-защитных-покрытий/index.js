import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import SprayCoatingPageHeader from '../../../../components/pageheader/coating-spray'
import SprayCoating from '../../../../containers/machines/coating/spray'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesCoating from '../../../../containers/machines/coating'



const title = "Нанесение защитных покрытий";
const language = "ru";
const path = "оборудование-для-монтажа/влагозащита-электроники/нанесение-защитных-покрытий";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Ручное нанесение защитных покрытий распылением применяется для нанесения защитных покрытий на всю поверхность собранной электронной платы. Бюджетное решение" pathname={path} keywords="установка влагозащиты, установка влагозащиты погружением, установка влагозащиты распылением, установка селективной влагозащиты, селективная влагозащита, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating, dc 2000, dip coating" lang={language}/>
    <Header path={path}/>
    <SprayCoatingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <SprayCoating path={path} language={language}/>
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 