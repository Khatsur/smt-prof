import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import PastePageHeader from '../../../../components/pageheader/storage-paste'
import PasteStorage from '../../../../containers/machines/storage/paste'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesStorage from '../../../../containers/machines/storage'



const title = "Хранение паяльной пасты";
const language = "ru";
const path = "оборудование-для-монтажа/автоматизированные-системы-хранения/хранение-паяльной-пасты";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Хранение паяльной пасты из соблюдением всех необходимых условий хранения (температура и влажность) для обеспечения оптимального состояния паяльной пасты" pathname={path} keywords="Хранение паяльной пасты,Автоматизированные склады компонентов,автоматизированные системы храненияшкафы сухого хранения для электронных компонентов, шкафы сухого хранения, сушильные шкафы для электронных компонентов,x-treme,шкаф сухого хранения, Автоматизированные склады электронных компонентов,автоматизированная система хранения компонентов,системы хранения для SMD,автоматический склад компонентов" lang={language}/>
    <Header path={path}/>
    <PastePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <PasteStorage path={path} language={language}/>
        <ContactArea />
        <MachinesStorage />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 