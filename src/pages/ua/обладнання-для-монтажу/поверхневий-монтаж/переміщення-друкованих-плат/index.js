import React from "react"
import SEO from "../../../../../components/seo"
import Layout from '../../../../../containers/layout/layout'
import Header from '../../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../../containers/layout/footer/footer-one-ua'
import ConveyerPageHeaderUa from '../../../../../components/page-header/conveyer'
import Conveyer from '../../../../../containers/machines/smt/conveyer'
import ContactArea from '../../../../../containers/global/contact-area/contact-three-ua'
import WhatsnewArea from '../../../../../containers/machines/whats-new-area-ua'
import MachinesSmt from '../../../../../containers/machines/smt-ua'




const language = "uk";
const path = "ua/обладнання-для-монтажу/поверхневий-монтаж/переміщення-друкованих-плат";
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Переміщення друкованих плат" description="Переміщення друкованих плат у виробничій лінії монтажу електронних компонентів на друковані плати. Пристрої для завантаження і вивантаження плат. Конвеєри" pathname={path} keywords="переміщення друкованих плат, конвеєри для друкованих плат, завантажувач друкованих плат, розвантажник друкованих плат, конвеєрні системи, транспортування друкованих плат, nutek, asys, yj link" lang={language} />
    <Header path={path}/>
    <main className="site-wrapper-reveal">
      <ConveyerPageHeaderUa lang={language}/>
      <Conveyer lang={language} />
      <ContactArea />
      <MachinesSmt/>
      <WhatsnewArea />
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
 