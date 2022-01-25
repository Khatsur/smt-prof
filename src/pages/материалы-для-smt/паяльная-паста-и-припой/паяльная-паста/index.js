import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three";
import Footer from "../../../../containers/layout/footer/footer-one";
import SolderPastePageHeader from "../../../../components/page-header/solder-paste";
import SolderPaste from "../../../../containers/materials/solder/solder-paste";
import ContactArea from "../../../../containers/global/contact-area/contact-three-ru";
import WhatsnewArea from "../../../../containers/machines/whats-new-area";
import MaterialSolder from "../../../../containers/materials/solder";
import img from '../../../../data/images/bg/materials/solder/solder-paste-baner.jpg'

const language = "ru";
const path =
  "материалы-для-smt/паяльная-паста-и-припой/паяльная-паста";
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Паяльная паста"
      description="Паяльная паста - это смесь порошка припоя, флюса и специальных добавок. Применяется для монтажа электронных компонентов на поверхность печатных плат - SMT"
      pathname={path}
      keywords="Паяльная паста Indium 8.9, Паяльная паста Indium NC-SMQ92J, нанесение паяльной пасты, поверхностный монтаж, smt, беcсвинцовая пайка, lead free, PB free, smt, безсвинцовая паста, водосмываемая паяльная паста, безотмывочная паяльная паста"
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
