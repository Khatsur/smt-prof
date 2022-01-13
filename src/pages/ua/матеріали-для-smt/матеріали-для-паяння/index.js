import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../../containers/index-processing/solder-ua'
import MaterialsSoldering from '../../../../containers/materials/solder-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
 
const language = "uk";
const path = "ua/матеріали-для-smt/рідини-для-чищення";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="матеріали-для-паяння" description="Матеріали для паяння застосуються для монтажу компонентів SMD на контактні площадки друкованих плат - технологія SMT і в отвори друкованих плат – THT" pathname="ua/матеріали-для-smt/матеріали-для-паяння" keywords="Паяльна паста, припій, припій в бруска, припій в дроті, флюс для паяння, матеріали для паяння, монтаж в отвори плат, друковані плати, smt" lang="uk" />
    <Header path={path} />
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MaterialsSoldering/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 