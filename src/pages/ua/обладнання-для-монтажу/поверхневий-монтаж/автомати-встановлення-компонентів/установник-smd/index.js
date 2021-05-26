import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import JukiPlacerPageHeader from '../../../../../../components/pageheader/juki-jx'
import JukiPlacerJx from '../../../../../../containers/machines/smt/placer/juki-jx'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Установник SMD";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів/установник-smd";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Установник SMD компонентів на поверхню друкованих плат. Автоматизація SMT. Устаткування застосовується для поверхневого монтажу електронних компонентів" pathname={path} keywords="Установник SMD, SMD монтажний автомат, Швидкісний автомат встановлення, Установник електронних компонентів, автоматичні установники SMD, Juki, установник електронних компонентів, розстановника smd, обладнання для smd монтажу, обладнання smt, RS-1, rs-1r, rs-1xl, rx-6, rx-7, rx-7r, fx -3, JX-350" lang={language}/>
    <Header path={path}/>
   
    <JukiPlacerPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <JukiPlacerJx path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 