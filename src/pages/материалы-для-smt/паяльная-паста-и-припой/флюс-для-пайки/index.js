import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three";
import Footer from "../../../../containers/layout/footer/footer-one";
import FluxPageHeader from "../../../../components/page-header/flux";
import Flux from "../../../../containers/materials/solder/flux";
import ContactArea from "../../../../containers/global/contact-area/contact-three-ru";
import WhatsnewArea from "../../../../containers/machines/whats-new-area";
import MaterialSolder from "../../../../containers/materials/solder";
import img from '../../../../data/images/bg/materials/solder/flux-wave-baner.jpg'

const language = "ru";
const path =
  "материалы-для-smt/паяльная-паста-и-припой/флюс-для-пайки";
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Флюс для пайки"
      description="Флюс для пайки который применятся в процессах монтажа электронных компонентов в отверстия печатных плат на машинах  пайки волной припоя и селективной пайки"
      pathname={path}
      keywords="флюс для пайки, флюс-гель, флюс для пайки ручной, флюс для пайки волной припоя, флюс для пайки селективной, припой, флюс гель, флюс паяльный, smt"
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
