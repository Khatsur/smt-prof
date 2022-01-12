import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../containers/layout/footer/footer-one-ua";
import MaintenanceCleanPageHeader from "../../../../../components/pageheader/maintenance-clean";
import MaintenanceCleanPcb from "../../../../../containers/materials/cleaning/maintenance";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ua";
import MaterialClean from "../../../../../containers/materials/cleaning-ua";
import img from '../../../../../data/images/bg/materials/cleaning/pcb/pcb-cleaning-baner.jpg'


const title = "Рідина для очищення обладнання";
const language = "uk";
const path =
  "ua/матеріали-для-smt/рідини-для-чищення/рідина-для-очищення-обладнання";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Рідина для очищення обладнання для паяння (паяльні печі, селективне та хвильове паяння) і очищення технологічного оснащення (паллети для паяння та покриття)"
      pathname={path}
      keywords="Рідина для очищення обладнання, відмивання палет, чистка паяльних печей, vigon rs 303, atron sp200, atron sp300, atron sp400, atron dc"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <MaintenanceCleanPageHeader
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
