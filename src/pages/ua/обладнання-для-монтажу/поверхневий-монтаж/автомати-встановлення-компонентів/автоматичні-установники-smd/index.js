import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import SemiPlacerPageHeader from '../../../../../../components/pageheader/semi-placer'
import SemiPlacer from '../../../../../../containers/machines/smt/placer/semiplacer'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Автоматичні установники SMD";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів/автоматичні-установники-smd";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Автоматичні установники SMD на поверхню друкованих плат в автоматичному режимі. Устаткування застосовується для поверхневого монтажу компонентів на плати" pathname={path} keywords="автоматичні установники SMD, автомат установки smd компонентів, установник компонентів, автоматичні установники fritsch, розстановника smd, обладнання для smd, smt монтаж, placeALL®610, placeALL®520, placeALL®520" lang={language}/>
    <Header path={path}/>
   
    <SemiPlacerPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <SemiPlacer path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 