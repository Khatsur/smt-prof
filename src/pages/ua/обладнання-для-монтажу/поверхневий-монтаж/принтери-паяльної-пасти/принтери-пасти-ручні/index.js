import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import SmallPrintPageHeader from '../../../../../../components/pageheader/small-printer'
import SmallPrint from '../../../../../../containers/machines/smt/printer/small-printer'
import CTAArea from '../../../../../../containers/global/cta-area/section-one'

const title = "Принтери пасти ручні";
const language = "ua";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/принтери-паяльної-пасти/принтери-пасти-ручні";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Оборудование для нанесения паяльной пасты через трафарет на контактные площадки печатных плат. Применятся в технологии поверхностного монтажа - SMT" pathname={path} keywords="машины для нанесения паяльной пасты, принтеры паяльной пасты, паяльная паста, оборудование для поверхностного монтажа плат, принтеры паяльной пасты, G-Titan, dek" lang={language}/>
    <Header path={path}/>
   
    <SmallPrintPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <SmallPrint path={path} language={language}/>
        <CTAArea/>
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 