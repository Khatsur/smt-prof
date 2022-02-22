import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-en'
import Footer from '../../../../containers/layout/footer/footer-one-en'
import PageHeader from '../../../../containers/about-us/page-header-en'
import AboutArea from '../../../../containers/about-us/about-area-en'
import ServicesArea from '../../../../containers/about-us/services-area-en'
import SolutionsArea from '../../../../containers/about-us/solutions-area-en'
import ClientsArea from '../../../../containers/global/clients-area-en'
import ContactArea from '../../../../containers/global/contact-area/contact-two-en'
import img from '../../../../data/images/bg/about-us/about-us.jpg'


const title = "About us";
const language = "en";
const path = "en/company/about-us";
const AboutPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="About us and our company. We provide modern technologies and innovative machines and materials to enterprises producing electronic products in Ukraine." 
      pathname={path}
      keywords="About us, Technical training, Equipment commissioning, SMT technology, smt, juki, pva, pbt works, cab, inertec ,smt equipment"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <main className="site-wrapper-reveal">
      <PageHeader />
      <AboutArea />
      <ServicesArea />
      <SolutionsArea />
      <ClientsArea />
      <ContactArea />
    </main>
    <Footer />
  </Layout>
)

export default AboutPage
