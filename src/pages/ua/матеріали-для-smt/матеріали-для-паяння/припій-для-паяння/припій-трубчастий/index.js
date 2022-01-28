import React from "react";
import SEO from "../../../../../../components/seo";
import Layout from "../../../../../../containers/layout/layout";
import Header from "../../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../../containers/layout/footer/footer-one";
import SolderWirePageHeader from "../../../../../../components/pageheader/solder-wire";
import SolderWire from "../../../../../../containers/materials/solder/solder-alloy/solder-wire";
import ContactArea from "../../../../../../containers/global/contact-area/contact-three-ua";
import MaterialSolder from "../../../../../../containers/materials/solder-ua";
import img from "../../../../../../data/images/bg/materials/solder/solder-wire-baner.jpg";

const title = "Припій трубчастий";
const language = "uk";
const path =
  "ua/матеріали-для-smt/матеріали-для-паяння/припій-для-паяння/припій-трубчастий";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Припій трубчастий з флюсом для ручного паяння. Застосовується для ручного монтажу електронних компонентів на друковані плати та для роботизованого монтажу"
      pathname={path}
      keywords="Припій трубчастий, припій для паяння, припій для паяння хвилею, припій для ручного паяння, припій для паяння хвилею припою, припій у брусках, припій у дроті, припій з флюсом, pf604-r, pf606-r, rh63-a"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <SolderWirePageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <SolderWire path={path} language={language} />
      <ContactArea />
      <MaterialSolder />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
