import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import SmtLineSerialPageHeader from '../../../../components/pageheader/line-smt-serial'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../containers/machines/smt'
import SmtLineSerial1 from '../../../../containers/lines/smt-serial-1'
import SmtLineSerial2 from '../../../../containers/lines/smt-serial-2'
import SmtLineSerial3 from '../../../../containers/lines/smt-serial-3'
import SmtLineSerialLed from '../../../../containers/lines/smt-serial-led'
import img from '../../../../data/images/bg/lines/smt-line-baner.jpg'



const title = "SMT линия монтажа плат";
const language = "ru";
const path = "комплексные-решения/линия-поверхностного-монтажа/smt-линия-монтажа-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="SMT линия монтажа плат для установки электронных компонентов на поверхность печатных плат. Полная автоматизация процессов поверхностного монтажа компонентов" pathname={path} keywords="линия smt, линия smd монтажа, линия smd монтажа, SMT линия монтажа плат,поверхностный монтаж, Установка электронных компонентов, установщики smd, smt, оборудование для smt, оборудование для smd монтажа, автоматы установки компонентов, установщик, smt, juki, asm, siplace, yamaha" image={img} lang={language}/>
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
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 