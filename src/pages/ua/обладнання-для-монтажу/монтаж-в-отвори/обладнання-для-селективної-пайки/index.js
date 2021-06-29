import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import EntrySelectivePageHeader from '../../../../../components/pageheader/entry-selective'
import EntrySelective from '../../../../../containers/machines/tht/selective/entry'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesTht from '../../../../../containers/machines/tht-ua'


const title = "Обладнання для селективної пайки";
const language = "uk";
const path = "ua/обладнання-для-монтажу/монтаж-в-отвори/обладнання-для-селективної-пайки";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Обладнання для селективної пайки електронних компонентів що монтуються в отвори друкованих плат. Застосовується в умовах серійного виробництва монтажу плат" pathname={path} keywords="Обладнання для селективної пайки,  селективна пайка, система селективної пайки, установки селективного паяння, обладнання для селективної пайки, селективна пайка обладнання, монтаж в отвори, inertec, cube 460, cube inline, top-375ce" lang={language}/>
    <Header path={path}/>
   
    <EntrySelectivePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <EntrySelective path={path} language={language}/>
        <ContactArea />
        <MachinesTht />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 