import React from "react"
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-three'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../containers/about-us/page-header'
import AboutArea from '../../containers/about-us/about-area'
import ServicesArea from '../../containers/about-us/services-area'
import SolutionsArea from '../../containers/about-us/solutions-area'
import ClientsArea from '../../containers/global/clients-area'
import ContactArea from '../../containers/global/contact-area/contact-two'
import img from '../../data/images/bg/about-us/about-us.jpg'


const title = "О нас";
const language = "ru";
const path = "компания/о-нас";
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
