import React from "react";
import SEO from "../../../../../../components/seo";
import Layout from "../../../../../../containers/layout/layout";
import Header from "../../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../../containers/layout/footer/footer-one";
import SolderBarPageHeader from "../../../../../../components/pageheader/solder-bar";
import SolderBar from "../../../../../../containers/materials/solder/solder-alloy/solder-bar";
import ContactArea from "../../../../../../containers/global/contact-area/contact-three-ua";
import MaterialSolder from "../../../../../../containers/materials/solder-ua";
import img from "../../../../../../data/images/bg/materials/solder/solder-bars-baner.jpg";

const title = "Припій для хвильової пайки";
const language = "uk";
const path =
  "ua/матеріали-для-smt/матеріали-для-паяння/припій-для-паяння/припій-для-хвильової-пайки";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Припій для хвильової пайки для завантаження машин для паяння хвилею припою, селективного паяння та паяння зануренням. Поставляється в брусках різної форми"
      pathname={path}
      keywords="Припій для хвильової пайки, Припій трубчастий, припій для паяння, припій для паяння хвилею, припій для ручного паяння, припій для паяння хвилею припою, припій у брусках, припій у дроті, припій з флюсом, pf604-r, pf606-r, rh63-a"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <SolderBarPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <SolderBar path={path} language={language} />
      <ContactArea />
      <MaterialSolder />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
