import React from "react";
import SEO from "../../../components/seo";
import Layout from "../../../containers/layout/layout";
import Header from "../../../containers/layout/header/header-three";
import Footer from "../../../containers/layout/footer/footer-one";
import SupportPageHeader from "../../../components/pageheader/support";
import JobsAreaSupport from '../../../containers/careers/jobs-area-sup'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import ContactArea from "../../../containers/global/contact-area/contact-three-ru";
import img from '../../../data/images/bg/service/support.png'


const title = "Техническая поддержка";
const language = "ru";
const path =
  "техническое-обслуживание/техническая-поддержка";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Техническая поддержка по эксплуатации оборудования и поддержка технологических процессов монтажа электронных компонентов, нанесения защитных покрытий, мойки" 
      pathname={path}
      keywords="Техническая поддержка, Техническое обучение, Пуско-наладка оборудования, технология поверхностного монтажа, smt, siplace, juki, dek, universal, pva, pbt, vitronics soltec,nutek,оборудование smt"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <SupportPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      
      <JobsAreaSupport />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
