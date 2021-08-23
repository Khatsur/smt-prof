import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import SelectiveCoatingPageHeader from '../../../../components/pageheader/coating-selective'
import SelectiveCoating from '../../../../containers/machines/coating/selective'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesCoating from '../../../../containers/machines/coating'



const title = "Селективная влагозащита";
const language = "ru";
const path = "оборудование-для-монтажа/влагозащита-электроники/селективная-влагозащита";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Селективная влагозащита применяется для нанесения защитных покрытий на определенные места на собранном электроном узле. Возможно нанесение лака на всю плату" pathname={path} keywords="установка влагозащиты, установка влагозащиты погружением, установка влагозащиты распылением, установка селективной влагозащиты, селективная влагозащита, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating" lang={language}/>
    <Header path={path}/>
    <SelectiveCoatingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <SelectiveCoating path={path} language={language}/>
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 