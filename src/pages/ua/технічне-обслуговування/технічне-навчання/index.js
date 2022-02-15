import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../containers/layout/footer/footer-one-ua";
import TrainingPageHeader from "../../../../components/pageheader/training";
import JobsAreaTrain from '../../../../containers/careers/jobs-area-train-ua'
import ContactArea from "../../../../containers/global/contact-area/contact-three-ua";
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import img from '../../../../data/images/bg/service/training.png'


const title = "Технічне навчання";
const language = "uk";
const path =
  "ua/технічне-обслуговування/технічне-навчання";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Технічне навчання операторів, програмістів та механіків по темах експлуатації обладнання, складання робочих програм та проведення технічного обслуговування"
      pathname={path}
      keywords="Технічна підтримка, Технічне навчання, Пуско-наладка обладнання, технологія поверхневого монтажу, smt, siplace, juki, dek, universal, pva, pbt, vitronics soltec, nutek, обладнання smt"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <TrainingPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <JobsAreaTrain />
      <ContactArea />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
