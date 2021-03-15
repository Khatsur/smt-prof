import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-three-en'
import Footer from '../../../containers/layout/footer/footer-one-en'
import HeroArea from '../../../containers/machines/hero-area-en'
import FeaturesArea from '../../../containers/machines/machines-en'
import ServicesArea from '../../../containers/machines/juki-en'
import ContactArea from '../../../containers/global/contact-area/contact-three'
import WhatsnewArea from '../../../containers/machines/whats-new-area-en'
import CaseStudyArea from '../../../containers/machines/smt-big-en'

const language = "en";
const path = "en/machines"; 
const IndexServices = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    <SEO title="SMD mounting machines" description="SMD mounting machines and through hole mounting machines JUKI. Selective soldering machines and selective conformal coating machines. PCB cleaning machines" pathname={path} keywords="SMD mounting, solder paste printing, reflow, conformal coating, aoi, spi, juki smt, smt line, selective coating, pcb cleaning, stencil cleaning, g-titan, juki rs-1" lang={language}/>
    <Header transparent path={path}/>
    <main className="site-wrapper-reveal">
    <HeroArea />
      <FeaturesArea />
      <ServicesArea />
      <CaseStudyArea/>
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
)

export default IndexServices
