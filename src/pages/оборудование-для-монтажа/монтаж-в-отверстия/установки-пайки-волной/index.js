import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import EntryWavePageHeader from '../../../../components/pageheader/entry-wave'
import EntryWave from '../../../../containers/machines/tht/wave/entry'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesTht from '../../../../containers/machines/tht'



const title = "Установки пайки волной";
const language = "ru";
const path = "оборудование-для-монтажа/монтаж-в-отверстия/установки-пайки-волной";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Установки пайки волной припоя для монтажа электронных компонентов отверстия печатных плат. Применяется условиях серийного производства монтажа печатных THT" pathname={path} keywords="установки пайки волной припоя, пайка волной, пайка волной припоя, установка пайки волной, оборудование для пайки волной припоя, пайка выводных компонентов" lang={language}/>
    <Header path={path}/>
    <EntryWavePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <EntryWave path={path} language={language}/>
        <ContactArea />
        <MachinesTht />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 