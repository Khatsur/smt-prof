import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three";
import Footer from "../../../../containers/layout/footer/footer-one";
import UrethaneCoatingPageHeader from "../../../../components/pageheader/coating-urethane";
import UrethaneCoating from "../../../../containers/materials/coating//urethane";
import ContactArea from "../../../../containers/global/contact-area/contact-three-ru";
import MaterialCoating from "../../../../containers/materials/coating";
import img from '../../../../data/images/bg/materials/coating/urethane-baner.jpg'


const title = "Влагозащитные уретановые покрытия";
const language = "ru";
const path =
  "материалы-для-smt/защитные-покрытия/влагозащитные-уретановые-покрытия";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Влагозащитные уретановые покрытия применяют для защиты собранных электронных плат, которые работают в агрессивных средах. Нанесение распылением, погружением" 
      pathname={path}
      keywords="Влагозащитные силиконовые покрытия, Влагозащитные акриловые покрытия, Влагозащитные покрытия, силиконовые влагозащитные покрытия, влагозащитные уретановые покрытия, лак для печатных плат, 1b73"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <UrethaneCoatingPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <UrethaneCoating path={path} language={language} />
      <ContactArea />
      <MaterialCoating />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
