import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import OffSelectivePageHeader from '../../../../components/pageheader/juki-jm'
import OffSelective from '../../../../containers/machines/tht/selective/inline'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesTht from '../../../../containers/machines/tht'



const title = "Система селективной пайки";
const language = "ru";
const path = "оборудование-для-монтажа/монтаж-в-отверстия/система-селективной-пайки";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Система селективной пайки для монтажа электронных компонентов в отверстия печатных плат. Применяется условиях серийного производства монтажа печатных THT" pathname={path} keywords="селективная пайка, система селективной пайки, установки селективной пайки, оборудование для селективной пайки, селективная пайка оборудование, монтаж в отверстия, inertec, cube 460, cube inline" lang={language}/>
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
 