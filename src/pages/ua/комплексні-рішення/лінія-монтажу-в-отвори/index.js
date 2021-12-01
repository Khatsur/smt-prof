import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import LineThtPageHeader from '../../../../components/page-header/line-tht'
import LineThtUa from '../../../../containers/lines/tht'
import ContactAreaUa from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import LineSolutionsUa from '../../../../containers/lines/solutions-ua'


const language = "uk";
const path = "ua/комплексні-рішення/лінія-монтажу-в-отвори"; 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Лінія монтажу в отвори" description="Лінія монтажу в отвори для організації встановлення та паяння електронних компонентів у отвори друкованих плат. Ручне або автоматичне встановлення в отвори" pathname={path}
    keywords="Лінія монтажу в отвори, Лінія вивідного монтажу, ручний монтаж компонентів в отвори, автоматичний монтаж компонентів в отвори друкованих плат, комплексні рішення для монтажу плат"  lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <LineThtPageHeader lang={language}/>
      <LineThtUa lang={language}/>
      <ContactAreaUa />
      <LineSolutionsUa />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 