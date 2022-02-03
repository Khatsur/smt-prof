import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three";
import Footer from "../../../../../containers/layout/footer/footer-one";
import FluxWavePageHeader from "../../../../../components/pageheader/flux-wave";
import FluxWave from "../../../../../containers/materials/solder/flux/wave";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ru";
import MaterialSolder from "../../../../../containers/materials/solder";
import img from '../../../../../data/images/bg/materials/solder/flux-wave-baner.jpg'


const title = "Флюс для пайки волной";
const language = "ru";
const path =
  "материалы-для-smt/паяльная-паста-и-припой/флюс-для-пайки/флюс-для-пайки-волной";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Флюс для пайки волной который применятся для заливки в оборудование для пайки волной припоя и в оборудование для селективной пайки. Монтаж в отверстия плат."
      pathname={path}
      keywords="флюс для пайки, флюс-гель, флюс для пайки ручной, флюс для пайки волной припоя, флюс для пайки селективной, припой, флюс гель, флюс паяльный, smt"
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
