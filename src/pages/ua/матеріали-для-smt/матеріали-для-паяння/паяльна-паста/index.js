import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../containers/layout/footer/footer-one-ua";
import SolderPastePageHeader from "../../../../../components/page-header/solder-paste";
import SolderPaste from "../../../../../containers/materials/solder/solder-paste";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ua";
import WhatsnewArea from "../../../../../containers/machines/whats-new-area-ua";
import MaterialSolder from "../../../../../containers/materials//solder-ua";
import img from '../../../../../data/images/bg/materials/solder/solder-paste-baner.jpg'

const language = "uk";
const path =
  "ua/матеріали-для-smt/матеріали-для-паяння/паяльна-паста";
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Паяльна паста"
      description="Паяльна паста - це суміш порошку припою, флюсу та спеціальних добавок. Застосовується для монтажу електронних компонентів на поверхню друкованих плат - SMT"
      pathname={path}
      keywords="Паяльна паста Indium 8.9, Паяльна паста Indium NC-SMQ92J, нанесення паяльної пасти, поверхневий монтаж, smt, безсвинцева  паяльна паста, безсвинцева паста, беззмивна паяльна паста, безвідмивна паяльна паста"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <main className="site-wrapper-reveal">
      <SolderPastePageHeader lang={language} />
      <SolderPaste lang={language} />
      <ContactArea />
      <MaterialSolder />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
);

export default IndexPage;
