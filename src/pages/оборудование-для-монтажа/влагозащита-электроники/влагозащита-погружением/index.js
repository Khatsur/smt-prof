import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import DipCoatingPageHeader from '../../../../components/pageheader/coating-dip'
import DipCoating from '../../../../containers/machines/coating/dip'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesCoating from '../../../../containers/machines/coating'



const title = "Влагозащита погружением";
const language = "ru";
const path = "оборудование-для-монтажа/влагозащита-электроники/влагозащита-погружением";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Влагозащита погружением применяется для нанесения защитных покрытий на всю поверхность собранной электронной платы. Оборудование имеет безопасное исполнение" pathname={path} keywords="установка влагозащиты, установка влагозащиты погружением, установка влагозащиты распылением, установка селективной влагозащиты, селективная влагозащита, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating, dc 2000, dip coating" lang={language}/>
    <Header path={path}/>
    <DipCoatingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <DipCoating path={path} language={language}/>
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 