import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import FiltrationSolderLaserPageHeader from '../../../../../components/pageheader/filtration-laser'
import FiltrationSolderLaser from '../../../../../containers/machines/filtration/laser'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesFiltration from '../../../../../containers/machines/filtration-ua'


const title = "Витяжки для лазерних верстатів";
const language = "uk";
const path = "ua/обладнання-для-монтажу/системи-уловлювання-диму/витяжки-для-лазерних-верстатів"; 
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Витяжки для лазерних верстатів застосовують для оснащення автономною витяжною вентиляцією обладнання для лазерного маркування плат, лазерного різання плат." pathname={path} keywords="Витяжки для лазерних верстатів, Витяжки для паяння,  Уловлювання диму для паяння, Системи уловлювання диму, Димоуловлювальні системи,bofa,димоуловлювачі для паяння,димоуловлювач,витяжка для паяння,витяжка для паяльника,димоуловлювач з вугільним фільтром,v250,v200" lang={language}/>
    <Header path={path}/>
   
    <FiltrationSolderLaserPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <FiltrationSolderLaser path={path} language={language}/>
        <ContactArea />
        <MachinesFiltration />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 