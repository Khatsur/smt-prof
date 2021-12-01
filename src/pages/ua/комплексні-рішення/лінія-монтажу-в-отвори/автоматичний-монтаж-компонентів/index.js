import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import ThtLinePageHeader from '../../../../../components/pageheader/juki-jm'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesThtUa from '../../../../../containers/machines/tht-ua'
import ThtLineAuto from '../../../../../containers/lines/tht-auto'
import img from '../../../../../data/images/bg/machines/tht/insertion-baner.jpg'


const title = "Автоматичний монтаж компонентів";
const language = "uk";
const path = "ua/комплексні-рішення/лінія-монтажу-в-отвори/автоматичний-монтаж-компонентів";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Автоматичний монтаж компонентів в отвори друкованих плат у виробничій лінії. Лінія складається із автоматичного установника компонентів та машини для паяння" pathname={path} keywords="Автоматичний монтаж компонентів в отвори, Установник компонентів в отвори, монтаж в отвори, вивідний монтаж, наскрізний монтаж, установник в отвори, установник радіальних, установник аксіальних, автомат для монтажу вивідних компонентів, Juki, JM-100, JM-2" image={img} lang={language}/>
    <Header path={path}/>
   
    <ThtLinePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <ThtLineAuto language={language}/>
        <ContactArea />
        <MachinesThtUa />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 