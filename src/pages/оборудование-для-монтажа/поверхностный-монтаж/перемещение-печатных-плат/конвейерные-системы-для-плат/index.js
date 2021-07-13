import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import BufferPageHeader from '../../../../../components/pageheader/buffer'
import Bufer from '../../../../../containers/machines/smt/conveyer/buffer'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Конвейерные системы для плат";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/перемещение-печатных-плат/конвейерные-системы-для-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Конвейерные системы для плат оборудование для равномерного распределения потока печатных плат в производственной линии. Применятся для балансирования линии" pathname={path} keywords="Конвейерные системы для плат, Загрузчик разгрузчик плат, перемещение печатных плат, конвейеры для печатных плат, загрузчик печатных плат, разгрузчик печатных плат, конвейерные системы,транспортировка печатных плат, loader, unloader" lang={language}/>
    <Header path={path}/>
    <BufferPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <Bufer path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 