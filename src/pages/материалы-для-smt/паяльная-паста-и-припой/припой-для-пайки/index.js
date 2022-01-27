import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three";
import Footer from "../../../../containers/layout/footer/footer-one";
import SolderPageHeader from "../../../../components/page-header/solder";
import Solder from "../../../../containers/materials/solder/solder-alloy";
import ContactArea from "../../../../containers/global/contact-area/contact-three-ru";
import WhatsnewArea from "../../../../containers/machines/whats-new-area";
import MaterialSolder from "../../../../containers/materials/solder";
import img from '../../../../data/images/bg/materials/solder/solder-baner.jpg'

const language = "ru";
const path =
  "материалы-для-smt/паяльная-паста-и-припой/припой-для-пайки";
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Припой для пайки"
      description="Припой для пайки применяется для монтажа электронных компонентов на поверхность плат (SMT) и в отверстия печатных плат (THT). Отличается по форме и сплаву."
      pathname={path}
      keywords="припой для пайки, припой для пайки волной, припой для ручной пайки, припой для пайки волной припоя, припой в брусках, припой в проволоке, припой с флюсом"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <main className="site-wrapper-reveal">
      <SolderPageHeader lang={language} />

      <Solder lang={language} />
      <ContactArea />
      <MaterialSolder />
      <WhatsnewArea />
    </main>
    <Footer />
  </Layout>
);

export default IndexPage;
