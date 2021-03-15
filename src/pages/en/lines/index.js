import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-en'
import Footer from '../../../containers/layout/footer/footer-one-en'
import HeroArea from '../../../containers/lines/hero-area-en'
import FeaturesArea from '../../../containers/lines/lines-en'
import ServicesArea from '../../../containers/lines/solutions-en'
import ContactArea from '../../../containers/global/contact-area/contact-three'
import WhatsnewArea from '../../../containers/machines/whats-new-area-en'
import SmtLineJukiEn from '../../../containers/machines/smt-big-en'
import SmallSmt from '../../../containers/lines/small-smt-en'

const language = "en";
const path = "en/lines"; 
const Materials = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    
    <SEO title="Complete solutions for electronics manufacturing" description="Complete solutions for electronics manufacturing. Solution for small electronics production and prototyping. Solutions for serial and mass production" pathname={path} keywords="smt line, smt line, smd assembly equipment, surface mount line, surface mount line, smd assembly line, complete solutions for electronics manufacturing, g-titan, juki rs-1" lang={language}/>
    <Header transparent  path={path}/>
    <main className="site-wrapper-reveal">
      <HeroArea />
      <FeaturesArea />
      <ServicesArea />
      <SmtLineJukiEn/>
      <ContactArea />
      <SmallSmt />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
)


export default Materials
