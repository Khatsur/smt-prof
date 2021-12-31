import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../containers/layout/footer/footer-one-ua";
import PcbCleanPageHeader from "../../../../../components/page-header/pcb-clean";
import PcbClean from "../../../../../containers/materials/cleaning/pcb";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ua";
import WhatsnewArea from "../../../../../containers/machines/whats-new-area-ua";
import MaterialClean from "../../../../../containers/materials/cleaning-ua";
import img from '../../../../../data/images/bg/materials/cleaning/pcb/pcb-cleaning-baner.jpg'

const language = "uk";
const path =
  "ua/матеріали-для-smt/рідини-для-чищення/рідини-для-відмивання-друкованих-плат";
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Рідини для відмивання друкованих плат"
      description="Рідини для відмивання друкованих плат ZESTRON з використанням ультразвукової кавітації на поверхні друкованих плат. Рідини для струменевого відмивання плат."
      pathname={path}
      keywords="Рідини для відмивання друкованих плат, рідина для ультразвукового миття плат, рідина для струменевого миття плат, рідина для ручного миття плат, vigon us, vigon a201, zestron fa+"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <main className="site-wrapper-reveal">
      <PcbCleanPageHeader lang={language} />
      <PcbClean lang={language} />
      <ContactArea />
      <MaterialClean />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
);

export default IndexPage;
