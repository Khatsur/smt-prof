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
      description="О нас и о нашей компании. Мы обеспечиваем современными технологиями и инновационным оборудование предприятия производящие электронные изделия в Украине." 
      pathname={path}
      keywords="О нас, Техническое обучение, Пуско-наладка оборудования, технология поверхностного монтажа, smt, juki, pva, pbt works, cab, inertec ,оборудование smt"
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
