import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../containers/layout/footer/footer-one-ua";
import TestCleanPageHeader from "../../../../../components/pageheader/test-clean";
import TestCleanPcb from "../../../../../containers/materials/cleaning/test";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ua";
import MaterialClean from "../../../../../containers/materials/cleaning-ua";
import img from '../../../../../data/images/bg/materials/cleaning/test/flux-test-baner.jpg'


const title = "Аналіз чистоти поверхні плат";
const language = "uk";
const path =
  "ua/матеріали-для-smt/рідини-для-чищення/аналіз-чистоти-поверхні-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Аналіз чистоти поверхні плат на наявність активатора паяльного флюсу та визначення якості нанесення різноманітних захисних покриттів на електронні плати"
      pathname={path}
      keywords="Контроль якості відмивання плат, Аналіз чистоти поверхні друкованих плат, zestron flux test, ZESTRON Resin Test, методи контролю якості відмивання, zestron coating layer test"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <TestCleanPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <TestCleanPcb path={path} language={language} />
      <ContactArea />
      <MaterialClean />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
