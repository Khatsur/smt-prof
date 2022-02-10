import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../containers/layout/footer/footer-one-ua";
import AcrCoatingPageHeader from "../../../../../components/pageheader/coating-acrylic";
import AcrylicCoating from "../../../../../containers/materials/coating/acrylic";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ua";
import MaterialCoating from "../../../../../containers/materials/coating-ua";
import img from '../../../../../data/images/bg/materials/coating/acrylic-baner.jpg'


const title = "Вологозахисні акрилові покриття";
const language = "uk";
const path =
  "ua/матеріали-для-smt/захисні-покриття/вологозахисні-акрилові-покриття";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Вологозахисні акрилові покриття застосовують захисту складених електронних плат. Покриття наносяться до різних методів нанесення – розпилення, занурення."
      pathname={path}
      keywords="Вологозахисні акрилові покриття, Вологозахисні покриття, силіконові вологозахисні покриття, вологозахисні уретанові покриття, лак для друкованих плат, 1b73"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <AcrCoatingPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <AcrylicCoating path={path} language={language} />
      <ContactArea />
      <MaterialCoating />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
