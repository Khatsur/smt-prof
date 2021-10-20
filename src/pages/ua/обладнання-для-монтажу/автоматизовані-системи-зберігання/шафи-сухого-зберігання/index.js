import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import DryPageHeader from '../../../../../components/pageheader/storage-dry'
import Dry from '../../../../../containers/machines/storage/dry'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesStorage from '../../../../../containers/machines/storage-ua'


const title = "Шафи сухого зберігання";
const language = "uk";
const path = "ua/обладнання-для-монтажу/автоматизовані-системи-зберігання/шафи-сухого-зберігання"; 
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Зберігання паяльної пасти з дотриманням всіх необхідних умов зберігання температура і вологість для забезпечення оптимального стану паяльної пасти при пайці" pathname={path} keywords="Зберігання паяльної пасти, Автоматизовані склади компонентів, автоматизовані системи зберігання, шафи сухого зберігання для електронних компонентів, шафи сухого зберігання, сушильні шафи для електронних компонентів, x-treme, шафа сухого зберігання, Автоматизовані склади електронних компонентів, автоматизована система зберігання компонентів, системи зберігання для SMD, автоматичний склад компонентів" lang={language}/>
    <Header path={path}/>
   
    <DryPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <Dry path={path} language={language}/>
        <ContactArea />
        <MachinesStorage />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 