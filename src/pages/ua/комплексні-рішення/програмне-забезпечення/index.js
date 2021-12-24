import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import SoftwarePageHeader from '../../../../components/page-header/software'
import SoftwareUa from '../../../../containers/lines/software'
import ContactAreaUa from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import SoftSolutionsUa from '../../../../containers/lines/software/soft-menu-ua'


const language = "uk";
const path = "ua/комплексні-рішення/програмне-забезпечення"; 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Програмне забезпечення" description="Програмне забезпечення для автоматизації виробництва електроніки. Облік та зберігання компонентів. Планування виробництва. Управління якістю" pathname={path}
    keywords="Программное обеспечение, Juki, janets, trace monitor, ifs nx, smt"  lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <SoftwarePageHeader lang={language}/>
      <SoftwareUa lang={language}/>
      <ContactAreaUa />
      <SoftSolutionsUa />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 