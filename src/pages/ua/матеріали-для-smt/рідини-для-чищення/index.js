import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../../containers/index-processing/materials/cleaning-ua'
import MaterialCleaningUa from '../../../../containers/materials/cleaning-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
 
const language = "uk";
const path = "ua/матеріали-для-smt/рідини-для-чищення";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Рідини для чищення" description="Рідини для чищення друкованих плат від забруднень після паяння і для очищення трафаретів для нанесення паяльної пасти на плати. Матеріали для мийки палет" pathname="ua/матеріали-для-smt/рідини-для-чищення" keywords="рідини для миття друкованих плат, рідини для очищення трафаретів, миття трафаретів, очищення друкованих плат, машини для миття плат, zestron, vigon, vigon US" lang="uk" />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MaterialCleaningUa/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 