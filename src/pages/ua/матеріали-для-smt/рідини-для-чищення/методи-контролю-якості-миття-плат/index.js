import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../containers/layout/footer/footer-one-ua";
import AnaliticCleanPageHeader from "../../../../../components/pageheader/analitic-clean";
import AnaliticCleanPcb from "../../../../../containers/materials/cleaning/analitic";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ua";
import MaterialClean from "../../../../../containers/materials/cleaning-ua";
import img from '../../../../../data/images/bg/materials/cleaning/analitic/analit-baner.jpg'


const title = "Методи контролю якості миття плат";
const language = "uk";
const path =
  "ua/матеріали-для-smt/рідини-для-чищення/методи-контролю-якості-миття-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Методи контролю якості відмивання друкованих плат під час миття. Концентрацію миючого розчину можна вимірювати автоматично безпосередньо в машині або окремо"
      pathname={path}
      keywords="контроль якості відмивання плат, тест на наявність флюсів, тест на наявність активаторів, методи контролю якості відмивання плат, ZESTRON Flux Test, Bath Analyzer 10, Bath Analyzer 20, zestron eye, zestron eye mobile"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <AnaliticCleanPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <AnaliticCleanPcb path={path} language={language} />
      <ContactArea />
      <MaterialClean />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
