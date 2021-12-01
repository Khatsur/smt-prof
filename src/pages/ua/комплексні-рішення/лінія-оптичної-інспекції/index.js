import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import LineAoiPageHeader from '../../../../components/page-header/aoi'
import LineAoiUa from '../../../../containers/lines/inspection'
import ContactAreaUa from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import LineSolutionsUa from '../../../../containers/lines/solutions-ua'


const language = "uk";
const path = "ua/комплексні-рішення/лінія-оптичної-інспекції"; 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Лінія оптичної інспекції" description="Окрема лінія оптичної інспекції для організації автоматичного контролю монтажу (паяння) з кількох складальних ліній. Для серійного виробництва монтажу плат" pathname={path}
    keywords="Лінія оптичної інспекції, автоматична оптична інспекція, оптична інспекція, автоматична оптична інспекція друкованих плат, AOI, системи автоматичної оптичної інспекції"  lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <LineAoiPageHeader lang={language}/>
      <LineAoiUa lang={language}/>
      <ContactAreaUa />
      <LineSolutionsUa />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 