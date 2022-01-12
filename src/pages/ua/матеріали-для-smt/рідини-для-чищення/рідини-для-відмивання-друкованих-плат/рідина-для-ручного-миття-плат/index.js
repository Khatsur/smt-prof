import React from "react";
import SEO from "../../../../../../components/seo";
import Layout from "../../../../../../containers/layout/layout";
import Header from "../../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../../containers/layout/footer/footer-one";
import ManualCleanPageHeader from "../../../../../../components/pageheader/pcb-clean-manual";
import ManualCleanPcb from "../../../../../../containers/materials/cleaning/pcb/manual";
import ContactArea from "../../../../../../containers/global/contact-area/contact-three-ua";
import MaterialClean from "../../../../../../containers/materials/cleaning-ua";
import img from "../../../../../../data/images/bg/materials/cleaning/pcb/manual-clean-baner.jpg";

const title = "Рідина для ручного миття плат";
const language = "uk";
const path =
  "ua/матеріали-для-smt/рідини-для-чищення/рідини-для-відмивання-друкованих-плат/рідина-для-ручного-миття-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Рідина для ручного миття плат після забруднень, що виникають у процесі монтажу електронних компонентів на поверхню та в отвори друкованих плат. Розчинники."
      pathname={path}
      keywords="Рідина для ручного миття плат, Рідини для відмивання друкованих плат, рідина для ультразвукового відмивання плат, рідина для струменного відмивання плат, рідина для ручного відмивання плат, vigon us, vigon a201, zestron fa+"
      image={img}
      lang={language}
    />
    <Header path={path} />

    <ManualCleanPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <ManualCleanPcb path={path} language={language} />
      <ContactArea />
      <MaterialClean />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
