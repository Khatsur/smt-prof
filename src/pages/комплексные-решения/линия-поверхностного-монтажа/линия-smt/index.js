import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import SmtLineProPageHeader from '../../../../components/pageheader/manipulator'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../containers/machines/smt'
import SmtLinePro1 from '../../../../containers/lines/smt-prototyping-1'
import SmtLinePro2 from '../../../../containers/lines/smt-prototyping-2'
import SmtLinePro3 from '../../../../containers/lines/smt-prototyping-3'
import img from '../../../../data/images/bg/machines/placer/manipulator.jpg'



const title = "Линия SMT";
const language = "ru";
const path = "комплексные-решения/линия-поверхностного-монтажа/линия-smt";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Линия SMT монтажа для прототипирования. Все оборудование имеет отдельно стоящее исполнение. Нанесение пасты и установка компонентов на одном оборудовании." pathname={path} keywords="линия smt, линия smd монтажа, линия smd монтажа, SMT линия монтажа плат,поверхностный монтаж, Установка электронных компонентов, установщики smd, smt, оборудование для smt, оборудование для smd монтажа, автоматы установки компонентов, установщик, smt, juki, asm, siplace, yamaha" image={img} lang={language}/>
    <Header path={path}/>
    <SmtLineProPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        
        <SmtLinePro1 language={language} />
        <SmtLinePro2 language={language} />
        <SmtLinePro3 language={language} />
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 