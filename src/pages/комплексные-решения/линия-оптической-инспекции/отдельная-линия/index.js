import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import AoiLinePageHeader from '../../../../components/pageheader/juki-aoi'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesAoi from '../../../../containers/machines/inspection'
import AoiLineAuto from '../../../../containers/lines/inspection-island'
import img from '../../../../data/images/bg/machines/smt/aoi/machine-aoi.jpg'



const title = "Отдельная линия AOI";
const language = "ru";
const path = "комплексные-решения/линия-оптической-инспекции/отдельная-линия";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Отдельная линия AOI для организации автоматической оптической инспекции монтажа компонентов для плат, которые приходя с разных линии. Для нескольких линий" pathname={path} keywords="Отдельная линия AOI, Оптическая инспекция печатных плат, Системы автоматической оптической инспекции, автоматическая оптическая инспекция, оптическая инспекция, автоматическая оптическая инспекция печатных плат, AOI, системы автоматической оптической инспекции, автоматическая оптическая инспекция, контроль печатных плат, оптическая инспекция, инспекция нанесения паяльной пасты,RV-2,Juki,системы автоматической оптической инспекции, SPI, smt, juki RV-2, RV-2, juki RV-2-3D, RV-2-3DH, RV-2-3D,vcta-a410" image={img} lang={language}/>
    <Header path={path}/>
    <AoiLinePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        
        <AoiLineAuto language={language} />
        <ContactArea />
        <MachinesAoi />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 