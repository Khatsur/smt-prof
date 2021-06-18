import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import OffSelectivePageHeader from '../../../../../components/pageheader/juki-jm'
import OffSelective from '../../../../../containers/machines/tht/selective/offline'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesTht from '../../../../../containers/machines/tht-ua'


const title = "Установки селективного паяння";
const language = "uk";
const path = "ua/обладнання-для-монтажу/монтаж-в-отвори/установки-селективного-паяння";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Установки селективного паяння електронних компонентів що монтуються в отвори друкованих плат. Застосовується в умовах серійного виробництва монтажу плат THT" pathname={path} keywords="селективна пайка, система селективної пайки, установки селективного паяння, обладнання для селективної пайки, селективна пайка обладнання, монтаж в отвори, inertec, cube 460, cube inline" lang={language}/>
    <Header path={path}/>
   
    <OffSelectivePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <OffSelective path={path} language={language}/>
        <ContactArea />
        <MachinesTht />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 