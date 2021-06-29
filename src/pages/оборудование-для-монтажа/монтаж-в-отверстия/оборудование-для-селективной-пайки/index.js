import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import EntrySelectivePageHeader from '../../../../components/pageheader/entry-selective'
import EntrySelective from '../../../../containers/machines/tht/selective/entry'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesTht from '../../../../containers/machines/tht'



const title = "Оборудование для селективной пайки";
const language = "ru";
const path = "оборудование-для-монтажа/монтаж-в-отверстия/оборудование-для-селективной-пайки";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Оборудование для селективной пайки монтажа электронных компонентов в отверстия печатных плат. Применяется условиях серийного производства монтажа печатных" pathname={path} keywords="Оборудование для селективной пайки,селективная пайка, система селективной пайки, установки селективной пайки, оборудование для селективной пайки, селективная пайка оборудование, монтаж в отверстия, inertec, cube 460, cube inline, top-375ce" lang={language}/>
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
 