import React from "react";
import SEO from "../../../../../../components/seo";
import Layout from "../../../../../../containers/layout/layout";
import Header from "../../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../../containers/layout/footer/footer-one";
import FluxWavePageHeader from "../../../../../../components/pageheader/flux-wave";
import FluxWave from "../../../../../../containers/materials/solder/flux/wave";
import ContactArea from "../../../../../../containers/global/contact-area/contact-three-ua";
import MaterialSolder from "../../../../../../containers/materials/solder-ua";
import img from "../../../../../../data/images/bg/materials/solder/flux-wave-baner.jpg";

const title = "Флюс для паяння хвилею";
const language = "uk";
const path =
  "ua/матеріали-для-smt/матеріали-для-паяння/флюс-для-паяння/флюс-для-паяння-хвилею";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Флюс для паяння хвилею який застосовується для заливки в обладнання для паяння хвилею припою та обладнання для селективного паяння. Монтаж в отвори плат."
      pathname={path}
      keywords="флюс для паяння, флюс-гель, флюс для паяння ручний, флюс для паяння хвилею припою, флюс для паяння селективної, припій, флюс гель, флюс паяльний, smt"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <FluxWavePageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <FluxWave path={path} language={language} />
      <ContactArea />
      <MaterialSolder />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
