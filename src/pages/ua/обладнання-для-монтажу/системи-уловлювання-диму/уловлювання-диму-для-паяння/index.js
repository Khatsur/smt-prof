import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import FiltrationSolderSmallPageHeader from '../../../../../components/pageheader/filtration-solder'
import FiltrationSolderSmall from '../../../../../containers/machines/filtration/solder-small'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesFiltration from '../../../../../containers/machines/filtration-ua'


const title = "Уловлювання диму для паяння";
const language = "uk";
const path = "ua/обладнання-для-монтажу/системи-уловлювання-диму/уловлювання-диму-для-паяння"; 
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Уловлювання диму для паяння здійснюється за допомогою автономних фільтраційних систем що застосовуються для оснащення робочих місць для ручного монтажу плат" pathname={path} keywords="Уловлювання диму для паяння, Системи уловлювання диму, Димоуловлювальні системи,bofa,димоуловлювачі для паяння,димоуловлювач,витяжка для паяння,витяжка для паяльника,димоуловлювач з вугільним фільтром,v250,v200" lang={language}/>
    <Header path={path}/>
   
    <FiltrationSolderSmallPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <FiltrationSolderSmall path={path} language={language}/>
        <ContactArea />
        <MachinesFiltration />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 