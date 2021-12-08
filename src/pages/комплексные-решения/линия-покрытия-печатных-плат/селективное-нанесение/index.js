import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import SelecCoatingLinePageHeader from '../../../../components/pageheader/coating-selective'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesCoating from '../../../../containers/machines/coating'
import CoatingLineSelecUv from '../../../../containers/lines/coating-uv'
import CoatingLineSelecIr from '../../../../containers/lines/coating-ir'
import CoatingLineSelecTwo from '../../../../containers/lines/coating-twoside'
import img from '../../../../data/images/bg/machines/coating/selective-baner.jpg'


const title = "Селективное нанесение";
const language = "ru";
const path = "комплексные-решения/линия-покрытия-печатных-плат/селективное-нанесение";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Селективное нанесение защитных покрытий, организованное в производственную линию. Отвердение происходит в печах с ультрафиолетовым и инфракрасным излучением" pathname={path} keywords="селективное нанесение, нанесение погружением,линия покрытия печатных плат, установка влагозащиты, установка влагозащиты погружением, установка влагозащиты распылением, установка селективной влагозащиты, селективная влагозащита, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating, dc 2000, dip coating" image={img} lang={language}/>
    <Header path={path}/>
    <SelecCoatingLinePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        
        <CoatingLineSelecUv language={language} />
        <CoatingLineSelecIr language={language} />
        <CoatingLineSelecTwo language={language} />
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 