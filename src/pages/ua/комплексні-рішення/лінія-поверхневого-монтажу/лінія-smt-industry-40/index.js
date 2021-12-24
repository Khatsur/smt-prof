import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import SmtLine40PageHeader from '../../../../../components/pageheader/line-smt-40'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmtUa from '../../../../../containers/machines/smt-ua'
import SmtLineSerial3 from '../../../../../containers/lines/smt-serial-3'
import StorageLine from '../../../../../containers/lines/storage-line'
import SoftwareLine from '../../../../../containers/lines/software-line'
import img from '../../../../../data/images/bg/lines/smt-industry-40.jpg'


const title = "Лінія SMT Industry 4.0";
const language = "uk";
const path = "ua/комплексні-рішення/лінія-поверхневого-монтажу/лінія-smt-industry-40";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Лінія SMT Industry 4.0 для організації монтажу електронних компонентів на друковані плати із мінімальною участю людини. SMART рішення складання електроніки" pathname={path} keywords="Лінія SMT Industry 4.0, лінія smt, лінія smd монтажу, лінія smd монтажу, SMT лінія монтажу плат,поверхневий монтаж, Установка електронних компонентів, установники smd, smt, обладнання для smt, обладнання для smd монтажу, автомати установки компонентів, установник, smt, juki, as , yamaha" image={img} lang={language}/>
    <Header path={path}/>
   
    <SmtLine40PageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <SmtLineSerial3 language={language} />
        <StorageLine language={language} />
        <SoftwareLine language={language} />
        <ContactArea />
        <MachinesSmtUa />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 