import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import CuringCoatingPageHeader from '../../../../components/pageheader/coating-curing'
import CuringCoating from '../../../../containers/machines/coating/curing'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesCoating from '../../../../containers/machines/coating'
import img from '../../../../data/images/bg/machines/coating/curing-baner.jpg'


const title = "Оборудование для отверждения";
const language = "ru";
const path = "оборудование-для-монтажа/влагозащита-электроники/оборудование-для-отверждения";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Оборудование для отверждения защитных покрытий плат. Применяется для линии по нанесению защитных покрытий и лаков на печатные платы. УФ и ИК полимеризация" pathname={path} keywords="Оборудование для отверждения, Оборудование для полимеризации, Оборудование для УФ сушки, Конвейеры защитных покрытий, установка влагозащиты, установка влагозащиты погружением, установка влагозащиты распылением, установка селективной влагозащиты, селективная влагозащита, smt, PVA, Delta 8, Delta 6, pva360, sigma, asymtek, coating" image={img} lang={language}/>
    <Header path={path}/>
    <CuringCoatingPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <CuringCoating path={path} language={language}/>
        <ContactArea />
        <MachinesCoating />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 