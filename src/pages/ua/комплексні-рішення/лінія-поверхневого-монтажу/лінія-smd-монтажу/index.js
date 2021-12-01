import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one'
import SmtLineSmallPageHeader from '../../../../../components/pageheader/semi-placer'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import MachinesSmtUa from '../../../../../containers/machines/smt-ua'
import SmtLineSmall1 from '../../../../../containers/lines/smt-small-1'
import SmtLineSmall2 from '../../../../../containers/lines/smt-small-2'
import SmtLineSmall3 from '../../../../../containers/lines/smt-small-3'
import img from '../../../../../data/images/bg/lines/smt-line-small-baner.jpg'


const title = "Лінія SMD монтажу";
const language = "uk";
const path = "ua/комплексні-рішення/лінія-поверхневого-монтажу/лінія-smd-монтажу";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title={title} description="Лінія SMD монтажу застосовується до умов дрібносерійного виробництва. Устаткування може працювати окремо і може зав'язуватися в лінії за допомогою конвеєрів" pathname={path} keywords="лінія smt, лінія smd монтажу, лінія smd монтажу, SMT лінія монтажу плат,поверхневий монтаж, Установка електронних компонентів, установники smd, smt, обладнання для smt, обладнання для smd монтажу, автомати установки компонентів, установник, smt, juki, as , yamaha" image={img} lang={language}/>
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
        <ContactArea />
        <MachinesSmtUa />
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 