import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import HeroArea from '../../../../containers/index-processing/cleaning-ua'
import MachinesCleaning from '../../../../containers/machines/cleaning-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
 
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Обладнання для миття" description="Обладнання для миття зібраних друкованих плат, трафаретів для нанесення паяльної пасти, технологічної оснастки для пайки (палети) і частин обладнання" pathname="ua/обладнання-для-монтажу/обладнання-для-миття" keywords="обладнання для миття, обладнання для миття трафаретів, обладнання для миття устаткування, трафарети для нанесення паяльної пасти,мийка плат,мийка трафаретів" lang="ua"/>
    <Header/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <MachinesCleaning/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 