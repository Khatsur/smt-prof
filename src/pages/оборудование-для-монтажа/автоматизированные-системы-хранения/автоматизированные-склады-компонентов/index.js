import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import StoragePageHeader from '../../../../components/pageheader/storage-storage'
import Storage from '../../../../containers/machines/storage/storage'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesStorage from '../../../../containers/machines/storage'



const title = "Автоматизированные склады компонентов";
const language = "ru";
const path = "оборудование-для-монтажа/автоматизированные-системы-хранения/автоматизированные-склады-компонентов";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Автоматизированные склады компонентов для управления комплектацией производства электронными компонентами. Интеграция с действующими системами управления." pathname={path} keywords="Автоматизированные склады компонентов,автоматизированные системы храненияшкафы сухого хранения для электронных компонентов, шкафы сухого хранения, сушильные шкафы для электронных компонентов,x-treme,шкаф сухого хранения, Автоматизированные склады электронных компонентов,автоматизированная система хранения компонентов,системы хранения для SMD,автоматический склад компонентов" lang={language}/>
    <Header path={path}/>
    <StoragePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <Storage path={path} language={language}/>
        <ContactArea />
        <MachinesStorage />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 