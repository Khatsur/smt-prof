import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import ThtLinePageHeader from '../../../../components/pageheader/juki-jm'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesTht from '../../../../containers/machines/tht'
import ThtLineManual from '../../../../containers/lines/tht-manual'
import img from '../../../../data/images/bg/machines/tht/insertion-baner.jpg'



const title = "Ручной монтаж компонентов";
const language = "ru";
const path = "оборудование-для-монтажа/монтаж-в-отверстия/установщик-компонентов-в-отверстия";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Ручной монтаж компонентов монтируемых отверстия печатных плат в производственной линии. Линия состоит из конвейера для ручной установки и машины для пайки" pathname={path} keywords="линия выводного монтажа,комплексные решения, Автоматический монтаж компонентов,Установщик компонентов в отверстия, монтаж в отверстия,выводной монтаж,установщик в отверстия,установщик радиальных, установщик аксиальных,автомат для монтажа выводных компонентов,Juki,JM-100, JM-20" image={img} lang={language}/>
    <Header path={path}/>
    <ThtLinePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        
        <ThtLineManual language={language} />
        <ContactArea />
        <MachinesTht />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 