import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import LoaderPageHeader from '../../../../../../components/pageheader/loader'
import LoaderUa from '../../../../../../containers/machines/smt/conveyer/loader-unloader'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Завантажувач розвантажувач плат";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/переміщення-друкованих-плат/завантажувач-розвантажувач-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Завантажувач розвантажувач плат обладнання для завантаження плат в лінію і розвантаження плат зі складальної лінії. Застосуються для з'єднання машин в лінії" pathname={path} keywords="Завантажувач розвантажувач плат, переміщення друкованих плат, конвеєри для друкованих плат, завантажувач друкованих плат, розвантажувач друкованих плат, конвеєрні системи, транспортування друкованих плат, loader, unloader" lang={language}/>
    <Header path={path}/>
   
    <LoaderPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <LoaderUa path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 