import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import DryPageHeader from '../../../../components/pageheader/storage-dry'
import Dry from '../../../../containers/machines/storage/dry'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesStorage from '../../../../containers/machines/storage'



const title = "Шкафы сухого хранения";
const language = "ru";
const path = "оборудование-для-монтажа/автоматизированные-системы-хранения/шкафы-сухого-хранения";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Шкафы сухого хранения для хранения электронных компонентов из соблюдением оптимальных параметров температуры и влажности. Сушка компонентов и печатных плат." pathname={path} keywords="Хранение паяльной пасты,Автоматизированные склады компонентов,автоматизированные системы храненияшкафы сухого хранения для электронных компонентов, шкафы сухого хранения, сушильные шкафы для электронных компонентов,x-treme,шкаф сухого хранения, Автоматизированные склады электронных компонентов,автоматизированная система хранения компонентов,системы хранения для SMD,автоматический склад компонентов" lang={language}/>
    <Header path={path}/>
    <DryPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <Dry path={path} language={language}/>
        <ContactArea />
        <MachinesStorage />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 