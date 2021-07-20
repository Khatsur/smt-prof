import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import PcbCleaningPageHeader from '../../../../components/pageheader/pcb-cleaning'
import PcbCleaning from '../../../../containers/machines/cleaning/pcb'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesCleaning from '../../../../containers/machines/cleaning'



const title = "Отмывка печатных плат";
const language = "ru";
const path = "оборудование-для-монтажа/оборудование-для-мойки/отмывка-печатных-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Отмывка печатных плат для очистки собранных электронных блоков от загрязнений после применения паяльных материалов (паяльная паста, флюс) при монтаже плат" pathname={path} keywords="ультразвуковая отмывка печатных плат, отмывка плат, отмывка плат после пайки, отмывка плат в ультразвуковой,ультразвуковые ванны, ультразвуковая мойка плат, HyperSWASH, SuperSWASH, MiniSWASH, CompaCLEAN, UniCLEAN" lang={language}/>
    <Header path={path}/>
    <PcbCleaningPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <PcbCleaning path={path} language={language}/>
        <ContactArea />
        <MachinesCleaning />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 