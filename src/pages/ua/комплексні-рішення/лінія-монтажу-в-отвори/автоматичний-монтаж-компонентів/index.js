import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import JukiPlacerPageHeader from '../../../../../components/pageheader/juki-jm'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesTht from '../../../../../containers/machines/tht-ua'
import ThtLineManualUa from '../../../../../containers/lines/tht-auto'


const title = "Установник компонентів в отвори";
const language = "uk";
const path = "ua/обладнання-для-монтажу/монтаж-в-отвори/установник-компонентів-в-отвори";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Установник компонентів THT. Автоматизація встановлення електронних компонентів в отвори друкованих плат. Устаткування застосовується для наскрізного монтажу" pathname={path} keywords="Установник компонентів в отвори, монтаж в отвори, вивідний монтаж, наскрізний монтаж, установник в отвори, установник радіальних, установник аксіальних, автомат для монтажу вивідних компонентів, Juki, JM-100, JM-2" lang={language}/>
    <Header path={path}/>
   
    <JukiPlacerPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <ThtLineManualUa language={language}/>
        <ContactArea />
        <MachinesTht />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 