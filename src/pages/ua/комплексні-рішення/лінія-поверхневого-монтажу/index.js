import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import LineSmtPageHeader from '../../../../components/page-header/line-smt'
import LineSmtUa from '../../../../containers/lines/smt-line'
import ContactAreaUa from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import LineSolutionsUa from '../../../../containers/lines/solutions-ua'


const language = "uk";
const path = "ua/комплексні-рішення/лінія-поверхневого-монтажу"; 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Лінія поверхневого монтажу" description="Лінія поверхневого монтажу для автоматизації процесів нанесення паяльної пасти, встановлення компонентів на контактні площадки друкованих плат та паяння." pathname={path}
    keywords="Лінія поверхневого монтажу, лінія smt, smt лінія, обладнання для smd монтажу, лінія для поверхневого монтажу, лінія поверхневого монтажу, лінія smd монтажу, juki, монтаж плат"  lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <LineSmtPageHeader lang={language}/>
      <LineSmtUa lang={language}/>
      <ContactAreaUa />
      <LineSolutionsUa />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 