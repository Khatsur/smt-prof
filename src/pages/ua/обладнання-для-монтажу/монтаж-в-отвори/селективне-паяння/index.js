import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one-ua'
import SelectivePageHeaderUa from '../../../../../components/page-header/selective'
import Selective from '../../../../../containers/machines/tht/selective'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../../containers/machines/whats-new-area-ua'
import MachinesTht from '../../../../../containers/machines/tht-ua'



const language = "uk";
const path = "ua/обладнання-для-монтажу/монтаж-в-отвори/селективне-паяння";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Селективне паяння" description="Селективне паяння застосовується для монтажу електронних компонентів в отвори друкованих плат - THT. Автоматизація процесів пайки для серійного виробництва" pathname={path} keywords="селективне паяння, система селективної пайки, установки селективного паяння, обладнання для селективного паяння, селективна пайка обладнання, монтаж в отвори, inertec, cube 460, cube inline" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <SelectivePageHeaderUa lang={language}/>
      <Selective lang={language} />
      <ContactArea />
      <MachinesTht/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 