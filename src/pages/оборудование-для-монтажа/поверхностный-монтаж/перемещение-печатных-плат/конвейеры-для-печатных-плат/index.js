import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import ConveyerPageHeader from '../../../../../components/pageheader/conveyer'
import Conveyer from '../../../../../containers/machines/smt/conveyer/conveyer'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Конвейеры для печатных плат";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/перемещение-печатных-плат/конвейеры-для-печатных-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Конвейеры для печатных плат оборудование для соединения производственного оборудования в сборочную линию.  Применятся для производства монтажа печатных плат" pathname={path} keywords="Конвейеры для печатных плат, Конвейерные системы для плат, Загрузчик разгрузчик плат, перемещение печатных плат, конвейеры для печатных плат, загрузчик печатных плат, разгрузчик печатных плат, конвейерные системы,транспортировка печатных плат, loader, unloader" lang={language}/>
    <Header path={path}/>
    <ConveyerPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <Conveyer path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 