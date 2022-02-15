import React from "react";
import SEO from "../../../components/seo";
import Layout from "../../../containers/layout/layout";
import Header from "../../../containers/layout/header/header-three";
import Footer from "../../../containers/layout/footer/footer-one";
import TrainingPageHeader from "../../../components/pageheader/training";
import JobsAreaTrain from '../../../containers/careers/jobs-area-train'
import WhatsnewArea from '../../../containers/machines/whats-new-area'
import ContactArea from "../../../containers/global/contact-area/contact-three-ru";
import img from '../../../data/images/bg/service/training.png'


const title = "Техническое обучение";
const language = "ru";
const path =
  "техническое-обслуживание/техническое-обучение";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Техническое обучение операторов, программистов и механиков по эксплуатации оборудования, составлению рабочих программ и проведению технического обслуживания" 
      pathname={path}
      keywords="Техническое обучение, Пуско-наладка оборудования, технология поверхностного монтажа, smt, siplace, juki, dek, universal, pva, pbt, vitronics soltec,nutek,оборудование smt"
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
