import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import LoaderPageHeader from '../../../../../components/pageheader/loader'
import Loader from '../../../../../containers/machines/smt/conveyer/loader-unloader'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Загрузчик разгрузчик плат";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/перемещение-печатных-плат/загрузчик-разгрузчик-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Загрузчик разгрузчик плат оборудование для загрузки печатных плат в линию и разгрузки печатных плат со сборочной линии. Применятся для соединения машин SMT" pathname={path} keywords="Загрузчик разгрузчик плат, перемещение печатных плат, конвейеры для печатных плат, загрузчик печатных плат, разгрузчик печатных плат, конвейерные системы,транспортировка печатных плат, loader, unloader" lang={language}/>
    <Header path={path}/>
    <LoaderPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <Loader path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 