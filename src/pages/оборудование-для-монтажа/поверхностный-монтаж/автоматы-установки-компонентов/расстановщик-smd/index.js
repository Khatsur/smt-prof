import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three'
import Footer from '../../../../../containers/layout/footer/footer-one'
import ToptablePageHeader from '../../../../../components/pageheader/toptableplacer'
import Toptable from '../../../../../containers/machines/smt/placer/toptable'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../../containers/machines/smt'


const title = "Расстановщик SMD";
const language = "ru";
const path = "оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов/расстановщик-smd";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Расстановщик  SMD компонентов на поверхность печатных плат в автоматическом режиме. Оборудование применяется для поверхностного монтажа компонентов на платы" pathname={path} keywords="установщик электронных компонентов, установщик smd компонентов, расстановщик smd, установщик светодиодов, оборудование для smd, поверхностный монтаж,smt" lang={language}/>
    <Header path={path}/>
    <ToptablePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <Toptable path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 