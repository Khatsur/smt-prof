import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import StoragePageHeader from '../../../components/page-header/storage'
import Storage from '../../../containers/machines/storage/storagesolution'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import MachinesStorage from '../../../containers/machines/storage'




 const language = "ru";
 const path = "оборудование-для-монтажа/автоматизированные-системы-хранения";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Автоматизированные системы хранения" description="Автоматизированные системы хранения для управления комплектацией и расходными материалами для серийного производства. Автоматические склады и сухое хранение" pathname={path} keywords="автоматизированные системы хранения, шкафы сухого хранения для электронных компонентов, шкафы сухого хранения, сушильные шкафы для электронных компонентов,x-treme,шкаф сухого хранения, Автоматизированные склады электронных компонентов,автоматизированная система хранения компонентов,системы хранения для SMD,автоматический склад компонентов" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <StoragePageHeader lang={language}/>
      
      <Storage lang={language}/>
      <ContactArea />
      <MachinesStorage/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 