import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import JukiPlacerPageHeader from '../../../../components/pageheader/juki-jm'
import JukiPlacerJm from '../../../../containers/machines/smt/placer/juki-jm'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesTht from '../../../../containers/machines/tht'



const title = "Установщик компонентов в отверстия";
const language = "ru";
const path = "оборудование-для-монтажа/монтаж-в-отверстия/установщик-компонентов-в-отверстия";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Установщик компонентов в отверстия. Автоматизация установки электронных компонентов  отверстия печатных плат. Оборудование применяется для выводного монтажа" pathname={path} keywords="Установщик компонентов в отверстия, монтаж в отверстия,выводной монтаж,установщик в отверстия,установщик радиальных, установщик аксиальных,автомат для монтажа выводных компонентов,Juki,JM-100, JM-20" lang={language}/>
    <Header path={path}/>
    <JukiPlacerPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <JukiPlacerJm path={path} language={language}/>
        <ContactArea />
        <MachinesTht />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 