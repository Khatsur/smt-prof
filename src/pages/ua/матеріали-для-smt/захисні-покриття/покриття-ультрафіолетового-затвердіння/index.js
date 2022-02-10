import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../containers/layout/footer/footer-one-ua";
import UvCoatingPageHeader from "../../../../../components/pageheader/coating-uv";
import UvCoating from "../../../../../containers/materials/coating/uv";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ua";
import MaterialCoating from "../../../../../containers/materials/coating-ua";
import img from '../../../../../data/images/bg/materials/coating/uv-baner.jpg'


const title = "Покриття ультрафіолетового затвердіння";
const language = "uk";
const path =
  "ua/матеріали-для-smt/захисні-покриття/покриття-ультрафіолетового-затвердіння";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Покриття ультрафіолетового затвердіння застосовують для захисту складених електронних плат, які працюють в агресивних середовищах та за високих температур."
      pathname={path}
      keywords="Покриття ультрафіолетового затвердіння,Вологозахисні акрилові покриття, Вологозахисні покриття, силіконові вологозахисні покриття, вологозахисні уретанові покриття, лак для друкованих плат, 1b73"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <UvCoatingPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <UvCoating path={path} language={language} />
      <ContactArea />
      <MaterialCoating />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
