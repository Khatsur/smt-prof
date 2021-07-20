import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import StencilCleaningPageHeader from '../../../../components/pageheader/stencil-cleaning'
import StencilCleaning from '../../../../containers/machines/cleaning/stencil'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesCleaning from '../../../../containers/machines/cleaning'



const title = "Отмывка трафаретов";
const language = "ru";
const path = "оборудование-для-монтажа/оборудование-для-мойки/отмывка-трафаретов";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Отмывка трафаретов для струйной очистки металлических трафаретов от загрязнений после нанесения паяльной пасты в процессах поверхностного монтажа плат SMT" pathname={path} keywords="отмывка трафаретов, установки отмывки трафаретов, отмывка печатных плат и трафаретов, система отмывки трафаретов, устройства отмывки трафаретов,отмывка плат, HyperSWASH, SuperSWASH, MiniSWASH, CompaCLEAN, UniCLEAN" lang={language}/>
    <Header path={path}/>
    <StencilCleaningPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <StencilCleaning path={path} language={language}/>
        <ContactArea />
        <MachinesCleaning />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 