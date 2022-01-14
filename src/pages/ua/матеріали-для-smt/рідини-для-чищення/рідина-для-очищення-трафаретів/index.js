import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../containers/layout/footer/footer-one-ua";
import StencilCleanPageHeader from "../../../../../components/pageheader/stencil-clean";
import StencilCleanPcb from "../../../../../containers/materials/cleaning/stencil";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ua";
import MaterialClean from "../../../../../containers/materials/cleaning-ua";
import img from '../../../../../data/images/bg/materials/cleaning/stencil/stencil-clean-baner.jpg'


const title = "Рідина для очищення трафаретів";
const language = "uk";
const path =
  "ua/матеріали-для-smt/рідини-для-чищення/рідина-для-очищення-трафаретів";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Рідина для очищення трафаретів від неоплавленої паяльної пасти після нанесення. Засіб застосовується для миття трафаретів в окремих машинах та в принтері."
      pathname={path}
      keywords="Рідина для очищення трафаретів, рідини для відмивання трафаретів, відмивання трафаретів, рідина для очищення трафаретів, рідини для промивання трафаретів, Vigon US, Zestron FA+, smt, vigon EFM, vigon rs 303, atron sp200, atron sp4 vigon sc 200, vigon uc 160"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <StencilCleanPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <StencilCleanPcb path={path} language={language} />
      <ContactArea />
      <MaterialClean />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
