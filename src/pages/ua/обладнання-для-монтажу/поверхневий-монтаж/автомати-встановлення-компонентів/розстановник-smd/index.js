import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import ToptablePageHeader from '../../../../../../components/pageheader/manipulator'
import Toptable from '../../../../../../containers/machines/smt/placer/toptable'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Розстановник SMD";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів/розстановник-smd";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Розстановник SMD компонентів на поверхню друкованих плат в автоматичному режимі. Устаткування застосовується для поверхневого монтажу компонентів на плати" pathname={path} keywords="установник електронних компонентів, установник smd компонентів, розстановника smd, установник світлодіодів, обладнання для smd, поверхневий монтаж, smt" lang={language}/>
    <Header path={path}/>
   
    <ToptablePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <Toptable path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 