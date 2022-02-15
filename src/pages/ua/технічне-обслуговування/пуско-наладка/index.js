import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../containers/layout/footer/footer-one-ua";
import InstallationPageHeader from "../../../../components/pageheader/installation";
import JobsArea from '../../../../containers/careers/jobs-area-ua'
import ContactArea from "../../../../containers/global/contact-area/contact-three-ua";
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import img from '../../../../data/images/bg/machines/machine-smt.jpg'


const title = "Пуско-наладка обладнання";
const language = "uk";
const path =
  "ua/технічне-обслуговування/пуско-наладка";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Пуско-наладка обладнання для поверхневого монтажу та монтажу електронних компонентів в отвори друкованих плат, для нанесення захисних покриттів та миття."
      pathname={path}
      keywords="Технічне навчання, Пуско-наладка обладнання, технологія поверхневого монтажу, smt, siplace, juki, dek, universal, pva, pbt, vitronics soltec, nutek, обладнання smt"
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
