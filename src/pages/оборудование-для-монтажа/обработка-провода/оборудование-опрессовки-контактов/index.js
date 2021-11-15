import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import WireCrimpingPageHeader from '../../../../components/pageheader/wire-crimping'
import WireCrimping from '../../../../containers/machines/wire/crimping'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesWire from '../../../../containers/machines/wire'



const title = "Оборудование опрессовки контактов";
const language = "ru";
const path = "оборудование-для-монтажа/обработка-провода/оборудование-опрессовки-контактов";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Оборудование опрессовки контактов, терминалов, наконечников на провода. Опрессовка контактов в ленте и в россыпи. Возможность зачистки кремповки за один раз" pathname={path} keywords="Машины зачистки проводов, установка мерной резки и зачистки проводов,резки и зачистки проводов,машина мерной резки и зачистки проводов, обработка проводов и, оборудование для обработки проводов, резка проводов, оборудование для зачистки проводов,оборудование для резки и зачистки проводов,оборудование для опрессовки контактов,оборудование для опрессовки наконечников, станок для опрессовки наконечников, пресс для опрессовки контактов" lang={language}/>
    <Header path={path}/>
    <WireCrimpingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <WireCrimping path={path} language={language}/>
        <ContactArea />
        <MachinesWire />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 