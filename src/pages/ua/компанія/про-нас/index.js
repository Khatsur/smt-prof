import React from "react"
import SEO from "../../../../components/seo"
import Layout from '../../../../containers/layout/layout'
import Header from '../../../../containers/layout/header/header-three-ua'
import Footer from '../../../../containers/layout/footer/footer-one-ua'
import PageHeader from '../../../../containers/about-us/page-header-ua'
import AboutArea from '../../../../containers/about-us/about-area-ua'
import ServicesArea from '../../../../containers/about-us/services-area-ua'
import SolutionsArea from '../../../../containers/about-us/solutions-area-ua'
import ClientsArea from '../../../../containers/global/clients-area-ua'
import ContactArea from '../../../../containers/global/contact-area/contact-two-ua'
import img from '../../../../data/images/bg/about-us/about-us.jpg'


const title = "Про нас";
const language = "uk";
const path = "ua/компанія/про-нас";
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
