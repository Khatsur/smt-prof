import React from "react";
import SEO from "../../../../../../components/seo";
import Layout from "../../../../../../containers/layout/layout";
import Header from "../../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../../containers/layout/footer/footer-one";
import UsCleanPageHeader from "../../../../../../components/pageheader/pcb-clean-us";
import UsCleanPcb from "../../../../../../containers/materials/cleaning/pcb/us";
import ContactArea from "../../../../../../containers/global/contact-area/contact-three-ua";
import MaterialClean from "../../../../../../containers/materials/cleaning-ua";
import img from "../../../../../../data/images/bg/materials/cleaning/pcb/pcb-cleaning-baner.jpg";

const title = "Рідина для ультразвукового миття плат";
const language = "uk";
const path =
  "ua/матеріали-для-smt/рідини-для-чищення/рідини-для-відмивання-друкованих-плат/для-ультразвукового-миття";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Рідина для ультразвукового миття плат після забруднень електронних компонентів, що виникають у процесі монтажу, на поверхню SMT та в отвори друкованих плат."
      pathname={path}
      keywords="Рідина для ультразвукового миття плат, Рідина для струменевого миття плат, Рідина для ручного миття плат, Рідини для відмивання друкованих плат, рідина для ультразвукового відмивання плат, рідина для струменного відмивання плат, рідина для ручного відмивання плат, vigon us, vigon a201, zestron fa+"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <UsCleanPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <UsCleanPcb path={path} language={language} />
      <ContactArea />
      <MaterialClean />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
