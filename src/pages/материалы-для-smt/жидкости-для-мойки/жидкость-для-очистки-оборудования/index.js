import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three";
import Footer from "../../../../containers/layout/footer/footer-one";
import UsCleanPageHeader from "../../../../components/pageheader/maintenance-clean";
import MaintenanceCleanPcb from "../../../../containers/materials/cleaning/maintenance";
import ContactArea from "../../../../containers/global/contact-area/contact-three-ru";
import MaterialClean from "../../../../containers/materials/cleaning";
import img from '../../../../data/images/bg/materials/cleaning/pcb/pcb-cleaning-baner.jpg'


const title = "Жидкость для очистки оборудования";
const language = "ru";
const path =
  "материалы-для-smt/жидкости-для-мойки/жидкость-для-очистки-оборудования";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Жидкость для очистки оборудования для пайки (паяльные печи, селективная и волновая пайка) и очистки технологической оснастки (паллеты для пайки и покрытия)"
      pathname={path}
      keywords="Жидкость для очистки оборудования, отмывка паллет, чистка паяльных печей, vigon rs 303, atron sp200, atron sp300, atron sp400, atron dc"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <UsCleanPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <MaintenanceCleanPcb path={path} language={language} />
      <ContactArea />
      <MaterialClean />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
