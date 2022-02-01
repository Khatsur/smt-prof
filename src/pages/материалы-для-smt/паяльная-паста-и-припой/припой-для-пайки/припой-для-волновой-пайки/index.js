import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three";
import Footer from "../../../../../containers/layout/footer/footer-one";
import SolderBarPageHeader from "../../../../../components/pageheader/solder-bar";
import SolderBar from "../../../../../containers/materials/solder/solder-alloy/solder-bar";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ru";
import MaterialSolder from "../../../../../containers/materials/solder";
import img from '../../../../../data/images/bg/materials/solder/solder-bars-baner.jpg'


const title = "Припой для волновой пайки";
const language = "ru";
const path =
  "материалы-для-smt/паяльная-паста-и-припой/припой-для-пайки/припой-для-волновой-пайки";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Припой для волновой пайки для загрузки машин для пайки волной припоя, селективной пайки и пайки погружение. Поставляется в брусках разной формы и сплавов."
      pathname={path}
      keywords="Припой для волновой пайки, Припой трубчатый, припой для пайки, припой для пайки волной, припой для ручной пайки, припой для пайки волной припоя, припой в брусках, припой в проволоке, припой с флюсом, pf604-r, pf606-r, rh63-a"
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
