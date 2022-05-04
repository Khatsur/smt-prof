import React from "react";
import SEO from "../../../components/seo";
import Layout from "../../../containers/layout/layout";
import Header from "../../../containers/layout/header/header-three";
import Footer from "../../../containers/layout/footer/footer-one";
import VacancyPageHeader from "../../../components/pageheader/vacancy";
import JobsAreaVacancy from '../../../containers/careers/vacancy'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import ContactArea from "../../../containers/global/contact-area/contact-three-ru";
import img from '../../../data/images/bg/service/training.png'


const title = "Вакансии";
const language = "ru";
const path =
  "компания/вакансии";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Вакансии Инженер по продажам оборудования и материалов для производства электроники и Инженер по сервису оборудования для производства электроники. SMT." 
      pathname={path}
      keywords="Техническое обучение, Пуско-наладка оборудования, технология поверхностного монтажа, smt, siplace, juki, dek, universal, pva, pbt, vitronics soltec,nutek,оборудование smt"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <VacancyPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      
      <JobsAreaVacancy />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
