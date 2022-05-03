import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-en'
import Footer from '../../../../containers/layout/footer/footer-one-en'
import HistoryPageHeader from '../../../../components/pageheader/history'
import IntroArea from '../../../../containers/our-history/intro-area-en'
import HistoryArea from '../../../../containers/our-history/history-area-en'
import ContactArea from '../../../../containers/global/contact-area/contact-two-en'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-en'
import img from '../../../../data/images/bg/about-us/parthnership.jpg'


const title = "Our History";
const language = "en";
const path = "en/company/history";
const AboutPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="The development story is not only a success story. Life is made up of small steps that create their own unique pathway and growing. We develop together." 
      pathname={path}
      keywords="partnership, Contacts, About us, Technical training, Equipment commissioning, SMT technology, smt, juki, pva, pbt works, cab, inertec ,smt equipment"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <main className="site-wrapper-reveal">
      <HistoryPageHeader 
      pageContext={pageContext}
      location={location}
      title={title}
      />
      <IntroArea />
       <HistoryArea />
      <ContactArea />
      <WhatsnewArea />
     
    </main>
    <Footer />
  </Layout>
)

export default AboutPage
