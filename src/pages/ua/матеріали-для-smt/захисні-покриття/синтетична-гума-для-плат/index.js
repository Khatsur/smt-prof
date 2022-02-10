import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../containers/layout/footer/footer-one-ua";
import RubberCoatingPageHeader from "../../../../../components/pageheader/coating-rubber";
import RubberCoating from "../../../../../containers/materials/coating/rubber";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ua";
import MaterialCoating from "../../../../../containers/materials/coating-ua";
import img from '../../../../../data/images/bg/materials/coating/synthetic-rubber-baner.jpg'


const title = "Синтетична гума для плат";
const language = "uk";
const path =
  "ua/матеріали-для-smt/захисні-покриття/синтетична-гума-для-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Синтетична гума для плат застосовується створення захисних покриттів зі спеціальними властивостями які не можна досягти традиційними матеріалами для захисту"
      pathname={path}
      keywords="Синтетична гума для плат, Покриття ультрафіолетового затвердіння,Вологозахисні акрилові покриття, Вологозахисні покриття, силіконові вологозахисні покриття, вологозахисні уретанові покриття, лак для друкованих плат, 1b73"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <RubberCoatingPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <RubberCoating path={path} language={language} />
      <ContactArea />
      <MaterialCoating />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
