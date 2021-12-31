import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three";
import Footer from "../../../../containers/layout/footer/footer-one";
import PcbCleanPageHeader from "../../../../components/page-header/pcb-clean";
import PcbClean from "../../../../containers/materials/cleaning/pcb";
import ContactArea from "../../../../containers/global/contact-area/contact-three-ru";
import WhatsnewArea from "../../../../containers/machines/whats-new-area";
import MaterialClean from "../../../../containers/materials/cleaning";
import img from '../../../../data/images/bg/materials/cleaning/pcb/pcb-cleaning-baner.jpg'

const language = "ru";
const path =
  "материалы-для-smt/жидкости-для-мойки/жидкости-для-отмывки-печатных-плат";
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Жидкости для отмывки печатных плат"
      description="Жидкости для отмывки печатных плат - ZESTRON с использованием ультразвуковой кавитации на поверхности печатных плат. Жидкости для струйной отмывки сборок."
      pathname={path}
      keywords="Жидкости для отмывки печатных плат, жидкость для ультразвуковой отмывки плат, жидкость для струйной отмывки плат, жидкость для ручной отмывки плат, vigon us, vigon a201, zestron fa+"
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
