import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import WireCuttingStrippingPageHeader from '../../../../components/pageheader/wire-cutting-stripping'
import WireCuttingStripping from '../../../../containers/machines/wire/cutting-stripping'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesWire from '../../../../containers/machines/wire'



const title = "Оборудование резки зачистки проводов";
const language = "ru";
const path = "оборудование-для-монтажа/обработка-провода/оборудование-резки-зачистки-проводов";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Оборудование резки зачистки проводов. Применяется для обработки проводов кабелей. Зачистка внешнего покрытия кабелей и зачистка изоляции внутренних проводов" pathname={path} keywords="Машины зачистки проводов, установка мерной резки и зачистки проводов,резки и зачистки проводов,машина мерной резки и зачистки проводов, обработка проводов и, оборудование для обработки проводов, резка проводов, оборудование для зачистки проводов,оборудование для резки и зачистки проводов,оборудование для опрессовки контактов,оборудование для опрессовки наконечников, станок для опрессовки наконечников, пресс для опрессовки контактов" lang={language}/>
    <Header path={path}/>
    <WireCuttingStrippingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <WireCuttingStripping path={path} language={language}/>
        <ContactArea />
        <MachinesWire />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 