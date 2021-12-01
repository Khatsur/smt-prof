import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import AoiLinePageHeader from '../../../../../components/pageheader/juki-aoi'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesAoiUa from '../../../../../containers/machines/inspection-ua'
import AoiLineAutoUa from '../../../../../containers/lines/inspection-island'
import img from '../../../../../data/images/bg/machines/smt/aoi/machine-aoi.jpg'


const title = "Окрема лінія";
const language = "uk";
const path = "ua/комплексні-рішення/лінія-оптичної-інспекції/окрема-лінія";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Окрема лінія AOI для організації автоматичної оптичної інспекції монтажу електронних компонентів для плат, які надходять з різних ліній. Для кількох ліній" pathname={path} keywords="Окрема лінія AOI, Оптична інспекція друкованих плат, Системи автоматичної оптичної інспекції, автоматична оптична інспекція, автоматична оптична інспекція, автоматична оптична інспекція, оптична інспекція RV-2,Juki,системи автоматичної оптичної інспекції, SPI, smt, juki RV-2, RV-2, juki RV-2-3D, RV-2-3DH, RV-2-3D,vcta-a410" image={img} lang={language}/>
    <Header path={path}/>
   
    <AoiLinePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <AoiLineAutoUa language={language}/>
        <ContactArea />
        <MachinesAoiUa />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 