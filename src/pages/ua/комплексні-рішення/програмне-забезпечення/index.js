import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import SoftwarePageHeader from '../../../../components/page-header/software'
import SoftwareUa from '../../../../containers/lines/software'
import ContactAreaUa from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import LineSolutionsUa from '../../../../containers/lines/solutions-ua'


const language = "uk";
const path = "ua/комплексні-рішення/лінія-поверхневого-монтажу"; 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Програмне забезпечення" description="Лінія покриття друкованих плат. Організація автоматизації процесів нанесення захисних покриттів на зібрані електронні блоки. Нанесення лаку та полімеризація" pathname={path}
    keywords="Лінія покриття друкованих плат, встановлення вологозахисту, встановлення вологозахисту зануренням, обладнання вологозахисту розпиленням, установка селективного вологозахисту, селективний вологозахист, smt"  lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <SoftwarePageHeader lang={language}/>
      <SoftwareUa lang={language}/>
      <ContactAreaUa />
      <LineSolutionsUa />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 