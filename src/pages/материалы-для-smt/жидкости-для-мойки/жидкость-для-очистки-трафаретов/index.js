import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three";
import Footer from "../../../../containers/layout/footer/footer-one";
import StencilCleanPageHeader from "../../../../components/pageheader/stencil-clean";
import StencilCleanPcb from "../../../../containers/materials/cleaning/stencil";
import ContactArea from "../../../../containers/global/contact-area/contact-three-ru";
import MaterialClean from "../../../../containers/materials/cleaning";
import img from '../../../../data/images/bg/materials/cleaning/stencil/stencil-clean-baner.jpg'


const title = "Жидкость для очистки трафаретов";
const language = "ru";
const path =
  "материалы-для-smt/жидкости-для-мойки/жидкость-для-очистки-трафаретов";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Жидкость для очистки трафаретов от неоплавленной паяльной пасты после процессов нанесения. Средство применяется для мойки трафаретов в машинах и в принтере"
      pathname={path}
      keywords="Жидкость для очистки трафаретов, жидкости для отмывки трафаретов, отмывка трафаретов, жидкость для очистки трафаретов, жидкости для промывки трафаретов, Vigon US, Zestron FA+, smt,vigon EFM, vigon rs 303, atron sp200, atron sp300, atron sp400, atron dc, vigon sc 200, vigon uc 160"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <StencilCleanPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <StencilCleanPcb path={path} language={language} />
      <ContactArea />
      <MaterialClean />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
