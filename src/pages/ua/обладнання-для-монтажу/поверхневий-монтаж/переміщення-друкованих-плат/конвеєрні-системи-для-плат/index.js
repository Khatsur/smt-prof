import React from "react"
import SEO from "../../../../../../components/seo"
import Layout from '../../../../../../containers/layout/layout'
import Header from '../../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../../containers/layout/footer/footer-one'
import BufferPageHeader from '../../../../../../components/pageheader/buffer'
import BufferUa from '../../../../../../containers/machines/smt/conveyer/buffer'
import ContactArea from '../../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmt from '../../../../../../containers/machines/smt-ua'

const title = "Конвеєрні системи для плат";
const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/переміщення-друкованих-плат/конвеєрні-системи-для-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Конвеєрні системи для друкованих плат - обладнання для рівномірного розподілу потоку друкованих плат у виробничій лінії. Застосуються для балансування лінії" pathname={path} keywords="Конвеєрні системи для плат, Конвеєри для друкованих плат, Завантажувач розвантажувач плат, переміщення друкованих плат, конвеєри для друкованих плат, завантажувач друкованих плат, розвантажувач друкованих плат, конвеєрні системи, транспортування друкованих плат, loader, unloader" lang={language}/>
    <Header path={path}/>
   
    <BufferPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <BufferUa path={path} language={language}/>
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 