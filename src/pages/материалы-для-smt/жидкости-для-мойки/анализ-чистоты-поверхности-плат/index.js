import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three";
import Footer from "../../../../containers/layout/footer/footer-one";
import TestCleanPageHeader from "../../../../components/pageheader/test-clean";
import TestCleanPcb from "../../../../containers/materials/cleaning/test";
import ContactArea from "../../../../containers/global/contact-area/contact-three-ru";
import MaterialClean from "../../../../containers/materials/cleaning";
import img from '../../../../data/images/bg/materials/cleaning/test/flux-test-baner.jpg'


const title = "Анализ чистоты поверхности плат";
const language = "ru";
const path =
  "материалы-для-smt/жидкости-для-мойки/анализ-чистоты-поверхности-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Анализ чистоты поверхности плат на наличие активатор паяльного флюса и определение качества нанесения защитных покрытий на собранные электронные платы" 
      pathname={path}
      keywords="Контроль качества отмывки плат,Анализ чистоты поверхности печатных плат,zestron flux test,ZESTRON Resin Test,методы контроля качества отмывки, zestron coating layer test"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <TestCleanPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <TestCleanPcb path={path} language={language} />
      <ContactArea />
      <MaterialClean />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
