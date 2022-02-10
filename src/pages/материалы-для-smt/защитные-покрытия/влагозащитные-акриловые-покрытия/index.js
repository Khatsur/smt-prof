import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three";
import Footer from "../../../../containers/layout/footer/footer-one";
import AcrCoatingPageHeader from "../../../../components/pageheader/coating-acrylic";
import AcrylicCoating from "../../../../containers/materials/coating/acrylic";
import ContactArea from "../../../../containers/global/contact-area/contact-three-ru";
import MaterialCoating from "../../../../containers/materials/coating";
import img from '../../../../data/images/bg/materials/coating/acrylic-baner.jpg'


const title = "Влагозащитные акриловые покрытия";
const language = "ru";
const path =
  "материалы-для-smt/защитные-покрытия/влагозащитные-акриловые-покрытия";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Влагозащитные акриловые покрытия применяют для защиты собранных электронных плат. Покрытия наносятся для разных методов нанесения – распыление, погружение." 
      pathname={path}
      keywords="Влагозащитные акриловые покрытия, Влагозащитные покрытия, силиконовые влагозащитные покрытия, влагозащитные уретановые покрытия, лак для печатных плат, 1b73"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <AcrCoatingPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <AcrylicCoating path={path} language={language} />
      <ContactArea />
      <MaterialCoating />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
