import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three";
import Footer from "../../../../containers/layout/footer/footer-one";
import AnaliticCleanPageHeader from "../../../../components/pageheader/analitic-clean";
import AnaliticCleanPcb from "../../../../containers/materials/cleaning/analitic";
import ContactArea from "../../../../containers/global/contact-area/contact-three-ru";
import MaterialClean from "../../../../containers/materials/cleaning";
import img from '../../../../data/images/bg/materials/cleaning/analitic/analit-baner.jpg'


const title = "Методы контроля качества отмывки плат";
const language = "ru";
const path =
  "материалы-для-smt/жидкости-для-мойки/методы-контроля-качества-отмывки-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Методы контроля качества отмывки печатных плат во время процесса мойки. Концентрацию моющего раствора можно измерять автоматически в машине или отдельно"
      pathname={path}
      keywords="контроль качества отмывки плат, тест на наличие флюсов, тест на наличие активаторов, методы контроля качества отмывки плат, ZESTRON Flux Test, Bath Analyzer 10, Bath Analyzer 20, zestron eye, zestron eye mobile"
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
