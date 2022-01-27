import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../containers/layout/footer/footer-one-ua";
import SolderPageHeader from "../../../../../components/page-header/solder";
import Solder from "../../../../../containers/materials/solder/solder-alloy";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ua";
import WhatsnewArea from "../../../../../containers/machines/whats-new-area-ua";
import MaterialSolder from "../../../../../containers/materials//solder-ua";
import img from '../../../../../data/images/bg/materials/solder/solder-baner.jpg'

const language = "uk";
const path =
  "ua/матеріали-для-smt/матеріали-для-паяння/припій-для-паяння";
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Припій для паяння"
      description="Припій для паяння застосовується для монтажу електронних компонентів на поверхню плат (SMT) та отвори друкованих плат. Відрізняється за формою та сплавом."
      pathname={path}
      keywords="припій для паяння, припій для паяння хвилею, припій для ручного паяння, припій для пайки хвилею припою, припій у брусках, припій у дроті, припій з флюсом"
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
