import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import SmtLineProPageHeader from '../../../../../components/pageheader/manipulator'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmtUa from '../../../../../containers/machines/smt-ua'
import SmtLinePro1 from '../../../../../containers/lines/smt-prototyping-1'
import SmtLinePro2 from '../../../../../containers/lines/smt-prototyping-2'
import SmtLinePro3 from '../../../../../containers/lines/smt-prototyping-3'
import img from '../../../../../data/images/bg/machines/placer/manipulator.jpg'


const title = "Лінія SMT";
const language = "uk";
const path = "ua/комплексні-рішення/лінія-поверхневого-монтажу/лінія-smt";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Лінія SMT монтажу для прототипування електроніки. Все обладнання має окреме виконання. Нанесення пасти та встановлення компонентів на одному обладнанні." pathname={path} keywords="лінія smt, лінія smd монтажу, лінія smd монтажу, SMT лінія монтажу плат,поверхневий монтаж, Установка електронних компонентів, установники smd, smt, обладнання для smt, обладнання для smd монтажу, автомати установки компонентів, установник, smt, juki, as , yamaha" image={img} lang={language}/>
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
        <MachinesSmtUa />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 