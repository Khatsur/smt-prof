import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import CutterPageHeader from '../../../../components/pageheader/cutting-cutter'
import Cuter from '../../../../containers/machines/cutting/cutter'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesCutting from '../../../../containers/machines/cutting'



const title = "Устройства разделения печатных плат";
const language = "ru";
const path = "оборудование-для-монтажа/разделение-групповых-заготовок/устройства-разделения-печатных-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Влагозащита погружением применяется для нанесения защитных покрытий на всю поверхность собранной электронной платы. Оборудование имеет безопасное исполнение" pathname={path} keywords="установка влагозащиты, установка влагозащиты погружением, установка влагозащиты распылением, установка селективной влагозащиты, селективная влагозащита, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating, dc 2000, dip coating" lang={language}/>
    <Header path={path}/>
    <CutterPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <Cuter path={path} language={language}/>
        <ContactArea />
        <MachinesCutting />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 