import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import SmtLineSerialPageHeader from '../../../../../components/pageheader/line-smt-serial'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmtUa from '../../../../../containers/machines/smt-ua'
import SmtLineSerial1 from '../../../../../containers/lines/smt-serial-1'
import SmtLineSerial2 from '../../../../../containers/lines/smt-serial-2'
import SmtLineSerial3 from '../../../../../containers/lines/smt-serial-3'
import SmtLineSerialLed from '../../../../../containers/lines/smt-serial-led'
import img from '../../../../../data/images/bg/lines/smt-line-baner.jpg'


const title = "SMT лінія монтажу плат";
const language = "uk";
const path = "ua/комплексні-рішення/лінія-поверхневого-монтажу/smt-лінія-монтажу-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="SMT лінія монтажу плат для встановлення електронних компонентів на поверхню друкованих плат. Повна автоматизація процесів поверхневого монтажу компонентів" pathname={path} keywords="лінія smt, лінія smd монтажу, лінія smd монтажу, SMT лінія монтажу плат,поверхневий монтаж, Установка електронних компонентів, установники smd, smt, обладнання для smt, обладнання для smd монтажу, автомати установки компонентів, установник, smt, juki, as , yamaha" image={img} lang={language}/>
    <Header path={path}/>
   
    <SmtLineSerialPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        <SmtLineSerial1 language={language} />
        <SmtLineSerial2 language={language} />
        <SmtLineSerial3 language={language} />
        <SmtLineSerialLed language={language} />
        <ContactArea />
        <MachinesSmtUa />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 