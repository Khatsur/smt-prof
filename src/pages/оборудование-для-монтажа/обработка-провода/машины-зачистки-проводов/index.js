import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import WireStrippingPageHeader from '../../../../components/pageheader/wire-stripping'
import WireStripping from '../../../../containers/machines/wire/stripping'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesWire from '../../../../containers/machines/wire'



const title = "Машины зачистки проводов";
const language = "ru";
const path = "оборудование-для-монтажа/обработка-провода/машины-зачистки-проводов";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Машины зачистки проводов от внешнего покрытия, зачистка внешнего покрытия кабелей изоляции внутренних проводов. Применяется для обработки проводов, кабелей" pathname={path} keywords="Машины зачистки проводов, установка мерной резки и зачистки проводов,резки и зачистки проводов,машина мерной резки и зачистки проводов, обработка проводов и, оборудование для обработки проводов, резка проводов, оборудование для зачистки проводов,оборудование для резки и зачистки проводов,оборудование для опрессовки контактов,оборудование для опрессовки наконечников, станок для опрессовки наконечников, пресс для опрессовки контактов" lang={language}/>
    <Header path={path}/>
    <WireStrippingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <WireStripping path={path} language={language}/>
        <ContactArea />
        <MachinesWire />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 