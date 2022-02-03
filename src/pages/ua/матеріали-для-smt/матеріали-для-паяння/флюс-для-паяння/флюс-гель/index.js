import React from "react";
import SEO from "../../../../../../components/seo";
import Layout from "../../../../../../containers/layout/layout";
import Header from "../../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../../containers/layout/footer/footer-one";
import FluxGelPageHeader from "../../../../../../components/pageheader/flux-gel";
import FluxGel from "../../../../../../containers/materials/solder/flux/gel";
import ContactArea from "../../../../../../containers/global/contact-area/contact-three-ua";
import MaterialSolder from "../../../../../../containers/materials/solder-ua";
import img from "../../../../../../data/images/bg/materials/solder/flux-gel-baner.jpg";

const title = "Флюс-гель";
const language = "uk";
const path =
  "ua/матеріали-для-smt/матеріали-для-паяння/флюс-для-паяння/флюс-гель";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Флюс-гель гель застосовується для проведення ремонтних робіт і для ручного паяння електронних компонентів на поверхню друкованих плат. Має різне пакування"
      pathname={path}
      keywords="флюс для паяння, флюс-гель, флюс для паяння ручний, флюс для паяння хвилею припою, флюс для паяння селективної, припій, флюс гель, флюс паяльний, smt"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <FluxGelPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <FluxGel path={path} language={language} />
      <ContactArea />
      <MaterialSolder />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
