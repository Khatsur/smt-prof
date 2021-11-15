import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import WireCrimpingPageHeader from '../../../../../components/pageheader/wire-crimping'
import WireCrimping from '../../../../../containers/machines/wire/crimping'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesFiltration from '../../../../../containers/machines/wire-ua'


const title = "Обладнання обжимання контактів";
const language = "uk";
const path = "ua/обладнання-для-монтажу/обробка-проводу/обладнання-обжимання-контактів"; 
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Обладнання обжимання контактів, терміналів, наконечників. Пресовування контактів у стрічці та з розсипу Можливість зачистки ізоляції кремпування за один раз" pathname={path} keywords="Обладнання різання зачищення проводів, Машини зняття ізоляції, обладнання обжимання контактів, Машини зачищення проводів, установки мірного різання та чищення проводів, різання та зачистка проводів, машина мірного різання та чищення проводів, обробка проводів,  обладнання для обробки проводів, різання проводів, обладнання для зачищення проводів, обладнання для різання та зачистки проводів, обладнання для пресування контактів, верстат для опресування наконечників, прес для опресування контактів" lang={language}/>
    <Header path={path}/>
   
    <WireCrimpingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <WireCrimping path={path} language={language}/>
        <ContactArea />
        <MachinesFiltration />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 