import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import InSelectivePageHeader from '../../../../../components/pageheader/in-selective'
import InSelective from '../../../../../containers/machines/tht/selective/inline'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesTht from '../../../../../containers/machines/tht-ua'


const title = "Система селективного паяння";
const language = "uk";
const path = "ua/обладнання-для-монтажу/монтаж-в-отвори/система-селективного-паяння";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Система селективного паяння електронних компонентів що монтуються в отвори друкованих плат. Застосовується в умовах серійного виробництва монтажу плат THT" pathname={path} keywords="селективна пайка, система селективного паяння, установки селективного паяння, обладнання для селективної пайки, селективна пайка обладнання, монтаж в отвори, inertec, cube 460, cube inline" lang={language}/>
    <Header path={path}/>
   
    <InSelectivePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <InSelective path={path} language={language}/>
        <ContactArea />
        <MachinesTht />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 