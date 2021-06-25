import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three'
import Footer from '../../../../containers/layout/footer/footer-one'
import SelectivePageHeader from '../../../../components/page-header/selective'
import Selective from '../../../../containers/machines/tht/selective'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../../containers/machines/whats-new-area'
import MachinesTht from '../../../../containers/machines/tht'


const language = "ru";
const path = "оборудование-для-монтажа/монтаж-в-отверстия/селективная-пайка";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Селективная пайка" description="Селективная пайка применяется для монтажа электронных компонентов в отверстия печатных плат – THT. Автоматизация процессов пайки для серийного производства" pathname={path} keywords="селективная пайка, система селективной пайки, установки селективной пайки, оборудование для селективной пайки, селективная пайка оборудование, монтаж в отверстия, inertec, cube 460, cube inline" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <SelectivePageHeader lang={language}/>
      <Selective lang={language} />
      <ContactArea />
      <MachinesTht />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 