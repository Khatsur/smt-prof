import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three";
import Footer from "../../../../../containers/layout/footer/footer-one";
import SolderWirePageHeader from "../../../../../components/pageheader/solder-wire";
import SolderWire from "../../../../../containers/materials/solder/solder-alloy/solder-wire";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ru";
import MaterialSolder from "../../../../../containers/materials/solder";
import img from '../../../../../data/images/bg/materials/solder/solder-wire-baner.jpg'


const title = "Припой трубчатый";
const language = "ru";
const path =
  "материалы-для-smt/паяльная-паста-и-припой/припой-для-пайки/припой-трубчатый";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Припой трубчатый с флюсом для ручной пайки. Применяется для ручного монтажа электронных компонентов на печатные платы и для роботизированного монтажа"
      pathname={path}
      keywords="Припой трубчатый, припой для пайки, припой для пайки волной, припой для ручной пайки, припой для пайки волной припоя, припой в брусках, припой в проволоке, припой с флюсом, pf604-r, pf606-r, rh63-a"
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
