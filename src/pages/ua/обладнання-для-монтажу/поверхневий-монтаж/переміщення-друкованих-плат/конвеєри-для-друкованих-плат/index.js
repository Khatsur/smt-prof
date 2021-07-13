import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import ConveyerPageHeader from '../../../../../../components/pageheader/conveyer'
import ConveyerUa from '../../../../../../containers/machines/smt/conveyer/conveyer'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Конвеєри для друкованих плат";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/переміщення-друкованих-плат/конвеєри-для-друкованих-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Конвеєри для друкованих плат устаткування для з'єднання виробничого обладнання в складальну лінію. Застосуються для виробництва монтажу друкованих плат SMT" pathname={path} keywords="Конвеєри для друкованих плат, Завантажувач розвантажувач плат, переміщення друкованих плат, конвеєри для друкованих плат, завантажувач друкованих плат, розвантажувач друкованих плат, конвеєрні системи, транспортування друкованих плат, loader, unloader" lang={language}/>
    <Header path={path}/>
   
    <ConveyerPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <ConveyerUa path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 