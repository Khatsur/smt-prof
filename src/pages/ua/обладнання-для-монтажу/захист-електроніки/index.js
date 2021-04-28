import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../../containers/index-processing/coating-ua'
import MachinesCoating from '../../../../containers/machines/coating-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'

const language = "uk";
const path = "ua/обладнання-для-монтажу/захист-електроніки";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Захист електроніки" description="Захист електроніки. Обладнання для нанесення покриттів на плати (електронні блоки). Селективне нанесення захисних матеріалів. Нанесення лаку зануренням" pathname={path} keywords="захист електроніки, обладнання для нанесення захисних  покриттів, обладнання для селективного нанесення, нанесення вологозахисних покриттів, smt" lang={language}/>
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesCoating/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 