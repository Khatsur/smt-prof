import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-en'
import Footer from '../../../../containers/layout/footer/footer-one-en'
import PartnerPageHeader from '../../../../components/pageheader/partner'
import SkillArea from '../../../../containers/why-choose-us/our-skills-en'
import ContactArea from '../../../../containers/global/contact-area/contact-two-en'
import WhatsnewArea from '../../../../containers/machines/whats-new-area-en'
import img from '../../../../data/images/bg/about-us/parthnership.jpg'


const title = "Partnership";
const language = "en";
const path = "en/company/partnership";
const AboutPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Partnership. We don't just supply PCB assembly machines and materials. Partnerships on mutually beneficial terms ensure maximum success for all partners. " 
      pathname={path}
      keywords="partnership, Contacts, About us, Technical training, Equipment commissioning, SMT technology, smt, juki, pva, pbt works, cab, inertec ,smt equipment"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <main className="site-wrapper-reveal">
      <PartnerPageHeader 
      pageContext={pageContext}
      location={location}
      title={title}
      />
      <SkillArea />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
)

export default AboutPage
