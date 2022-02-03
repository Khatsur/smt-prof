import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../containers/layout/footer/footer-one-ua";
import FluxPageHeader from "../../../../../components/page-header/flux";
import Flux from "../../../../../containers/materials/solder/flux";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ua";
import WhatsnewArea from "../../../../../containers/machines/whats-new-area-ua";
import MaterialSolder from "../../../../../containers/materials//solder-ua";
import img from '../../../../../data/images/bg/materials/solder/flux-wave-baner.jpg'

const language = "uk";
const path =
  "ua/матеріали-для-smt/матеріали-для-паяння/флюс-для-паяння";
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Флюс для паяння"
      description="Флюс для паяння що застосовується в процесах монтажу електронних компонентів в отвори друкованих плат на машинах пайки хвилею припою та селективного паяння"
      pathname={path}
      keywords="флюс для паяння, флюс-гель, флюс для паяння ручний, флюс для паяння хвилею припою, флюс для паяння селективної, припій, флюс гель, флюс паяльний, smt"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <main className="site-wrapper-reveal">
      <FluxPageHeader lang={language} />
      <Flux lang={language} />
      <ContactArea />
      <MaterialSolder />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
);

export default IndexPage;
