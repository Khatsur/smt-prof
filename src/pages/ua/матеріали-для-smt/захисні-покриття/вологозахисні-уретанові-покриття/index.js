import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../containers/layout/footer/footer-one-ua";
import UrethaneCoatingPageHeader from "../../../../../components/pageheader/coating-urethane";
import UrethaneCoating from "../../../../../containers/materials/coating/urethane";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ua";
import MaterialCoating from "../../../../../containers/materials/coating-ua";
import img from '../../../../../data/images/bg/materials/coating/urethane-baner.jpg'


const title = "Вологозахисні уретанові покриття";
const language = "uk";
const path =
  "ua/матеріали-для-smt/захисні-покриття/вологозахисні-уретанові-покриття";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Вологозахисні уретанові покриття застосовують для захисту складених електронних плат що працюють у агресивних середовищах. Нанесення розпиленням, зануренням"
      pathname={path}
      keywords="Вологозахисні акрилові покриття, Вологозахисні покриття, силіконові вологозахисні покриття, вологозахисні уретанові покриття, лак для друкованих плат, 1b73"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <UrethaneCoatingPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <UrethaneCoating path={path} language={language} />
      <ContactArea />
      <MaterialCoating />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
