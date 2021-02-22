import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'
import HeroArea from '../../../containers/index-processing/solder'
import MachinesTht from '../../../containers/materials/solder'
import ContactArea from '../../../containers/global/contact-area/contact-three-ru'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Паяльная паста и припой" description="Паяльная паста и припой применятся для монтажа компонентов SMD на контактные площадки печатных плат – технология  SMT и в отверстия печатных плат - THT" pathname="материалы-для-smt/паяльная-паста-и-припой" keywords="паяльная паста и припой, паяльная паста, припой, безсвинцовая паста, припой с флюсом, припой для пайки, indium, indium 8.9, indium smq92j, бессвинцовый припой, безотмывочная паста, флюс, флюс для пайки" lang="ru" />
    <Header/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesTht/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 