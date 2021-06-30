import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import EntryWavePageHeader from '../../../../../components/pageheader/entry-wave'
import EntryWave from '../../../../../containers/machines/tht/wave/entry'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesTht from '../../../../../containers/machines/tht-ua'


const title = "Установки паяння хвилею";
const language = "uk";
const path = "ua/обладнання-для-монтажу/монтаж-в-отвори/установки-паяння-хвилею";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Установки паяння хвилею електронних компонентів, що монтуються в отвори друкованих плат. Застосовується в умовах серійного виробництва монтажу плат - THT" pathname={path} keywords="установки пайки хвилею припою, пайка хвилею, пайка хвилею припою, установка пайки хвилею, обладнання для пайки хвилею припою, пайка вивідних компонентів" lang={language}/>
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
 