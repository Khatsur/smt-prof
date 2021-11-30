import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import DipLinePageHeader from '../../../../components/pageheader/coating-dip'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesCoating from '../../../../containers/machines/coating'
import CoatingLineDip from '../../../../containers/lines/coating-dip'
import img from '../../../../data/images/bg/machines/coating/dip-baner.jpg'


const title = "Нанесение погружением";
const language = "ru";
const path = "комплексные-решения/линия-покрытия-печатных-плат/нанесение-погружением";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Нанесение погружением применяется для нанесения защитных покрытий на всю поверхность собранной электронной платы. Линии для крупносерийного производства" pathname={path} keywords="селективное нанесение, нанесение погружением,линия покрытия печатных плат, установка влагозащиты, установка влагозащиты погружением, установка влагозащиты распылением, установка селективной влагозащиты, селективная влагозащита, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating, dc 2000, dip coating" image={img} lang={language}/>
    <Header path={path}/>
    <DipLinePageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        
        <CoatingLineDip language={language} />
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 