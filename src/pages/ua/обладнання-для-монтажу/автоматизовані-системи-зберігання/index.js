import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import StoragePageHeader from '../../../../components/page-header/storage'
import Storage from '../../../../containers/machines/storage/storagesolution'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import MachinesStorage from '../../../../containers/machines/storage-ua'


const language = "uk";
const path = "ua/обладнання-для-монтажу/автоматизовані-системи-зберігання"; 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Автоматизовані системи зберігання" description="Автоматизовані системи зберігання для керування комплектацією і витратними матеріалами для серійного виробництва. Автоматичні склади і сухе зберігання плат." pathname={path}
    keywords="автоматизовані системи зберігання, шафи сухого зберігання для електронних компонентів, шафи сухого зберігання, сушильні шафи для електронних компонентів, x-treme, шафа сухого зберігання, Автоматизовані склади електронних компонентів, автоматизована система зберігання компонентів, системи зберігання для SMD, автоматичний склад компонентів"  lang={language} />
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
 