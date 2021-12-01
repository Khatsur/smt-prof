import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import ThtLinePageHeader from '../../../../../components/pageheader/juki-jm'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesThtUa from '../../../../../containers/machines/tht-ua'
import ThtLineManualUa from '../../../../../containers/lines/tht-manual'
import img from '../../../../../data/images/bg/machines/tht/insertion-baner.jpg'


const title = "Ручний монтаж компонентів";
const language = "uk";
const path = "ua/комплексні-рішення/лінія-монтажу-в-отвори/ручний-монтаж-компонентів";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Ручний монтаж компонентів, що монтуються в отвори друкованих плат у виробничій лінії. Складається з конвеєра для ручного встановлення та машини для паяння." pathname={path} keywords="Ручний монтаж компонентів,Автоматичний монтаж компонентів в отвори, Установник компонентів в отвори, монтаж в отвори, вивідний монтаж, наскрізний монтаж, установник в отвори, установник радіальних, установник аксіальних, автомат для монтажу вивідних компонентів, Juki, JM-100, JM-2" image={img} lang={language}/>
    <Header path={path}/>
   
    <ThtLinePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <ThtLineManualUa language={language}/>
        <ContactArea />
        <MachinesThtUa />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 