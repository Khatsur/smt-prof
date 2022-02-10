import React from "react";
import SEO from "../../../../components/seo";
import Layout from "../../../../containers/layout/layout";
import Header from "../../../../containers/layout/header/header-three";
import Footer from "../../../../containers/layout/footer/footer-one";
import UvCoatingPageHeader from "../../../../components/pageheader/coating-uv";
import UvCoating from "../../../../containers/materials/coating/uv";
import ContactArea from "../../../../containers/global/contact-area/contact-three-ru";
import MaterialCoating from "../../../../containers/materials/coating";
import img from '../../../../data/images/bg/materials/coating/uv-baner.jpg'


const title = "Покрытия ультрафиолетового отверждения";
const language = "ru";
const path =
  "материалы-для-smt/защитные-покрытия/покрытия-ультрафиолетового-отверждения";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Покрытия ультрафиолетового отверждения применяют для защиты собранных электронных плат, которые работают в агрессивных средах и при высоких температурах." 
      pathname={path}
      keywords="покрытия-ультрафиолетового-отверждения, Влагозащитные силиконовые покрытия, Влагозащитные акриловые покрытия, Влагозащитные покрытия, силиконовые влагозащитные покрытия, влагозащитные уретановые покрытия, лак для печатных плат, 1b73"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <UvCoatingPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <UvCoating path={path} language={language} />
      <ContactArea />
      <MaterialCoating />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
