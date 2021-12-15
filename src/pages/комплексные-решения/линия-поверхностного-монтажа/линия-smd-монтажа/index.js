import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import SmtLineSmallPageHeader from '../../../../components/pageheader/semi-placer'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import MachinesSmt from '../../../../containers/machines/smt'
import SmtLineSmall1 from '../../../../containers/lines/smt-small-1'
import SmtLineSmall2 from '../../../../containers/lines/smt-small-2'
import SmtLineSmall3 from '../../../../containers/lines/smt-small-3'
import SmtLineSmall4 from '../../../../containers/lines/smt-small-4'
import img from '../../../../data/images/bg/lines/smt-line-small-baner.jpg'



const title = "Линия SMD монтажа";
const language = "ru";
const path = "комплексные-решения/линия-поверхностного-монтажа/линия-smd-монтажа";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Линия SMD монтажа применяется в условия мелкосерийного производства. Оборудование может работать отдельно и может завязываться в линию с помощью конвейеров" pathname={path} keywords="линия smt, линия smd монтажа, линия smd монтажа, SMT линия монтажа плат,поверхностный монтаж, Установка электронных компонентов, установщики smd, smt, оборудование для smt, оборудование для smd монтажа, автоматы установки компонентов, установщик, smt, juki, asm, siplace, yamaha" image={img} lang={language}/>
    <Header path={path}/>
    <SmtLineSmallPageHeader 
        pageContext={pageContext} 
        location={location}
        title={title}
        
    />
    <main className="site-wrapper-reveal">
        
        <SmtLineSmall1 language={language} />
        <SmtLineSmall2 language={language} />
        <SmtLineSmall3 language={language} />
        <SmtLineSmall4 language={language} />
        <ContactArea />
        <MachinesSmt />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 