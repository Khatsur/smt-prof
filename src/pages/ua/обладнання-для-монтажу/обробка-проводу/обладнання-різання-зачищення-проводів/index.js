import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import WireCuttingStrippingPageHeader from '../../../../../components/pageheader/wire-cutting-stripping'
import WireCuttingStripping from '../../../../../containers/machines/wire/cutting-stripping'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesFiltration from '../../../../../containers/machines/wire-ua'


const title = "Обладнання різання зачищення проводів";
const language = "uk";
const path = "ua/обладнання-для-монтажу/обробка-проводу/обладнання-різання-зачищення-проводів"; 
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Обладнання різання зачищення проводів. Застосовується для обробки дротів та кабелів. Зачистка зовнішнього покриття та зачистки ізоляції внутрішніх проводів." pathname={path} keywords="Обладнання різання зачищення проводів, Машини зняття ізоляції, обладнання обжимання контактів, Машини зачищення проводів, установки мірного різання та чищення проводів, різання та зачистка проводів, машина мірного різання та чищення проводів, обробка проводів,  обладнання для обробки проводів, різання проводів, обладнання для зачищення проводів, обладнання для різання та зачистки проводів, обладнання для пресування контактів, верстат для опресування наконечників, прес для опресування контактів" lang={language}/>
    <Header path={path}/>
   
    <WireCuttingStrippingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <WireCuttingStripping path={path} language={language}/>
        <ContactArea />
        <MachinesFiltration />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 