import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import StoragePageHeader from '../../../../../components/pageheader/storage-storage'
import Storage from '../../../../../containers/machines/storage/storage'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesStorage from '../../../../../containers/machines/storage-ua'


const title = "Автоматизовані склади компонентів";
const language = "uk";
const path = "ua/обладнання-для-монтажу/автоматизовані-системи-зберігання/автоматизовані-склади-компонентів"; 
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Вологозахист зануренням у ванну з лаками застосовується для нанесення захисних покриттів на всю поверхню складеної електронної плати. Безпечна конструкція" pathname={path} keywords="Автоматизовані склади компонентів, автоматизовані системи зберігання, шафи сухого зберігання для електронних компонентів, шафи сухого зберігання, сушильні шафи для електронних компонентів, x-treme, шафа сухого зберігання, Автоматизовані склади електронних компонентів, автоматизована система зберігання компонентів, системи зберігання для SMD, автоматичний склад компонентів" lang={language}/>
    <Header path={path}/>
   
    <StoragePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <Storage path={path} language={language}/>
        <ContactArea />
        <MachinesStorage />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 