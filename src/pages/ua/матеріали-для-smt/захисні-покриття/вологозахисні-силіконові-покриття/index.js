import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../containers/layout/footer/footer-one-ua";
import SilicCoatingPageHeader from "../../../../../components/pageheader/coating-silicone";
import SiliconeCoating from "../../../../../containers/materials/coating/silicone";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ua";
import MaterialCoating from "../../../../../containers/materials/coating-ua";
import img from '../../../../../data/images/bg/materials/coating/silicone-baner.jpg'


const title = "Вологозахисні силіконові покриття";
const language = "uk";
const path =
  "ua/матеріали-для-smt/захисні-покриття/вологозахисні-силіконові-покриття";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Вологозахисні силіконові покриття, що застосовують для захисту складених електронних плат, які працюють за високих температур. Нанесення різними способами."
      pathname={path}
      keywords="Вологозахисні акрилові покриття, Вологозахисні покриття, силіконові вологозахисні покриття, вологозахисні уретанові покриття, лак для друкованих плат, 1b73"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <SilicCoatingPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <SiliconeCoating path={path} language={language} />
      <ContactArea />
      <MaterialCoating />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
