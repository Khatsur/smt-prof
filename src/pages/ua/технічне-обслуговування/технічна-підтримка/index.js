import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../containers/layout/footer/footer-one-ua";
import SupportPageHeader from "../../../../components/pageheader/support";
import JobsAreaSupport from '../../../../containers/careers/jobs-area-sup-ua'
import ContactArea from "../../../../containers/global/contact-area/contact-three-ua";
import WhatsnewArea from '../../../../containers/machines/whats-new-area-ua'
import img from '../../../../data/images/bg/service/support.png'


const title = "Технічна підтримка";
const language = "uk";
const path =
  "ua/технічне-обслуговування/технічна-підтримка";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Технічна підтримка з експлуатації обладнання та підтримка технологічних процесів монтажу електронних компонентів, нанесення захисних покриттів, миття плат."
      pathname={path}
      keywords="Технічна підтримка, Технічне навчання, Пуско-наладка обладнання, технологія поверхневого монтажу, smt, siplace, juki, dek, universal, pva, pbt, vitronics soltec, nutek, обладнання smt"
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
