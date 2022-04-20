import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import ManipulatorPageHeader from '../../../../../../components/pageheader/manipulator'
import Manipulator from '../../../../../../containers/machines/smt/placer/manipulator'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Маніпулятор встановлення компонентів SMD";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів/маніпулятор-встановлення-smd";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Маніпулятор встановлення компонентів SMD на поверхню плат в ручному режимі. Устаткування застосовується для поверхневого монтажу компонентів на плати - SMT" pathname={path} keywords="маніпулятори fritsch, ручні маніпулятори fritsch, маніпулятор установки компонентів lm 901, fritsch lm900, маніпулятор встановлення компонентів smd, lm900, lm901, smt, sm902, sm902 profesional" lang={language}/>
    <Header path={path}/>
   
    <ManipulatorPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <Manipulator path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 