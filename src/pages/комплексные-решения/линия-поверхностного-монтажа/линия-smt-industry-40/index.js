import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import SmtLine40PageHeader from '../../../../components/pageheader/line-smt-40'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../containers/machines/smt'
import SmtLineSerial3 from '../../../../containers/lines/smt-serial-3'
import StorageLine from '../../../../containers/lines/storage-line'
import SoftwareLine from '../../../../containers/lines/software-line'
import img from '../../../../data/images/bg/lines/smt-industry-40.jpg'



const title = "Линия SMT Industry 4.0";
const language = "ru";
const path = "комплексные-решения/линия-поверхностного-монтажа/линия-smt-industry-40";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Линия SMT Industry 4.0 для организации монтажа электронных  компонентов на печатные платы с минимальным участием человека. SMART решения для монтажа плат" pathname={path} keywords="Линия SMT Industry 4.0, линия smt, линия smd монтажа, линия smd монтажа, SMT линия монтажа плат,поверхностный монтаж, Установка электронных компонентов, установщики smd, smt, оборудование для smt, оборудование для smd монтажа, автоматы установки компонентов, установщик, smt, juki, asm, siplace, yamaha, Industry 4.0" image={img} lang={language}/>
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
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 