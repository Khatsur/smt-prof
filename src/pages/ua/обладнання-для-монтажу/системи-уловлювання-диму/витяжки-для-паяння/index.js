import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import FiltrationSolderBigPageHeader from '../../../../../components/pageheader/filtration-solder'
import FiltrationSolderBig from '../../../../../containers/machines/filtration/solder-big'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesFiltration from '../../../../../containers/machines/filtration-ua'


const title = "Витяжки для паяння";
const language = "uk";
const path = "ua/обладнання-для-монтажу/системи-уловлювання-диму/витяжки-для-паяння"; 
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Багатомісні витяжки для паяння застосовують для оснащення витяжною вентиляцією виробничої ділянки ручного монтажу електронних компонентів на друковані плати" pathname={path} keywords="Витяжки для паяння,  Уловлювання диму для паяння, Системи уловлювання диму, Димоуловлювальні системи,bofa,димоуловлювачі для паяння,димоуловлювач,витяжка для паяння,витяжка для паяльника,димоуловлювач з вугільним фільтром,v250,v200" lang={language}/>
    <Header path={path}/>
   
    <FiltrationSolderBigPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <FiltrationSolderBig path={path} language={language}/>
        <ContactArea />
        <MachinesFiltration />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 