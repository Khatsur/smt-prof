import React from "react";
import SEO from "../../../components/seo";
import Layout from "../../../containers/layout/layout";
import Header from "../../../containers/layout/header/header-three";
import Footer from "../../../containers/layout/footer/footer-one";
import InstallationPageHeader from "../../../components/pageheader/installation";
import JobsArea from '../../../containers/careers/jobs-area'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import ContactArea from "../../../containers/global/contact-area/contact-three-ru";

import img from '../../../data/images/bg/machines/machine-smt.jpg'


const title = "Пуско-наладка оборудования";
const language = "ru";
const path =
  "техническое-обслуживание/пуско-наладка";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Пуско-наладка оборудования для поверхностного монтажа и монтажа электронных компонентов в отверстия печатных плат, для нанесения защитных покрытий и мойки." 
      pathname={path}
      keywords="Техническое обучение, Пуско-наладка оборудования, технология поверхностного монтажа, smt, siplace, juki, dek, universal, pva, pbt, vitronics soltec,nutek,оборудование smt"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <InstallationPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      
      <JobsArea />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
