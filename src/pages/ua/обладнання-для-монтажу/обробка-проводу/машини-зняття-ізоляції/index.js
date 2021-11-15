import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import WireStrippingPageHeader from '../../../../../components/pageheader/wire-stripping'
import WireStripping from '../../../../../containers/machines/wire/stripping'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesFiltration from '../../../../../containers/machines/wire-ua'


const title = "Машини зняття ізоляції";
const language = "uk";
const path = "ua/обладнання-для-монтажу/обробка-проводу/машини-зняття-ізоляції"; 
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Машини зняття ізоляції, чищення покриття кабелів та ізоляції внутрішніх дротів. Застосовується для обробки дротів та кабелів в умовах серійного виробництва." pathname={path} keywords="Обладнання різання зачищення проводів, Машини зняття ізоляції, обладнання обжимання контактів, Машини зачищення проводів, установки мірного різання та чищення проводів, різання та зачистка проводів, машина мірного різання та чищення проводів, обробка проводів,  обладнання для обробки проводів, різання проводів, обладнання для зачищення проводів, обладнання для різання та зачистки проводів, обладнання для пресування контактів, верстат для опресування наконечників, прес для опресування контактів" lang={language}/>
    <Header path={path}/>
   
    <WireStrippingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <WireStripping path={path} language={language}/>
        <ContactArea />
        <MachinesFiltration />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 