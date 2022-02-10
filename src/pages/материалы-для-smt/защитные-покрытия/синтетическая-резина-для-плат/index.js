import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three";
import Footer from "../../../../containers/layout/footer/footer-one";
import RubberCoatingPageHeader from "../../../../components/pageheader/coating-rubber";
import RubberCoating from "../../../../containers/materials/coating/rubber";
import ContactArea from "../../../../containers/global/contact-area/contact-three-ru";
import MaterialCoating from "../../../../containers/materials/coating";
import img from '../../../../data/images/bg/materials/coating/synthetic-rubber-baner.jpg'


const title = "Синтетическая резина для плат";
const language = "ru";
const path =
  "материалы-для-smt/защитные-покрытия/синтетическая-резина-для-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Синтетическая резина для плат применяется для создание защитных покрытий со специальными свойствами, которые нельзя достигнуть традиционными материалами." 
      pathname={path}
      keywords="Синтетическая резина для плат,покрытия ультрафиолетового отверждения, Влагозащитные силиконовые покрытия, Влагозащитные акриловые покрытия, Влагозащитные покрытия, силиконовые влагозащитные покрытия, влагозащитные уретановые покрытия, лак для печатных плат, 1b73"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <RubberCoatingPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <RubberCoating path={path} language={language} />
      <ContactArea />
      <MaterialCoating />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
