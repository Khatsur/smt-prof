import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../containers/layout/footer/footer-one-ua";
import VacancyPageHeader from "../../../../components/pageheader/vacancy";
import JobsAreaVacancy from '../../../../containers/careers/vacancy-ua'
import ContactArea from "../../../../containers/global/contact-area/contact-three-ua";
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import img from '../../../../data/images/bg/service/training.png'


const title = "Вакансії";
const language = "uk";
const path =
  "ua/компанія/вакансії";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Вакансії Інженер з продажу обладнання та матеріалів для виробництва електроніки та Інженер з сервісу обладнання для виробництва електроніки. SMT обладнання."
      pathname={path}
      keywords="Технічна підтримка, Технічне навчання, Пуско-наладка обладнання, технологія поверхневого монтажу, smt, siplace, juki, dek, universal, pva, pbt, vitronics soltec, nutek, обладнання smt"
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
