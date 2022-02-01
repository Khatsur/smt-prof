import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three";
import Footer from "../../../../../containers/layout/footer/footer-one";
import SolderPrePageHeader from "../../../../../components/pageheader/solder-pre";
import SolderPre from "../../../../../containers/materials/solder/solder-alloy/solder-pre";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ru";
import MaterialSolder from "../../../../../containers/materials/solder";
import img from '../../../../../data/images/bg/materials/solder/solder-preforms.jpg'


const title = "Припой в виде фольги преформ";
const language = "ru";
const path =
  "материалы-для-smt/паяльная-паста-и-припой/припой-для-пайки/припой-в-виде-фольги-преформ";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Припой в виде фольги преформ. Припой в виде преформ может поставляться в стандартных катушках для установки на машинах для установки компонентов на платы."
      pathname={path}
      keywords="Припой в виде фольги преформ, Припой для волновой пайки, Припой трубчатый, припой для пайки, припой для пайки волной, припой для ручной пайки, припой для пайки волной припоя, припой в брусках, припой в проволоке, припой с флюсом, pf604-r, pf606-r, rh63-a"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <SolderPrePageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <SolderPre path={path} language={language} />
      <ContactArea />
      <MaterialSolder />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
