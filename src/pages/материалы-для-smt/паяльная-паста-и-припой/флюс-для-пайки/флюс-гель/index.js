import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three";
import Footer from "../../../../../containers/layout/footer/footer-one";
import FluxGelPageHeader from "../../../../../components/pageheader/flux-gel";
import FluxGel from "../../../../../containers/materials/solder/flux/gel";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ru";
import MaterialSolder from "../../../../../containers/materials/solder";
import img from '../../../../../data/images/bg/materials/solder/flux-gel-baner.jpg'


const title = "Флюс-гель";
const language = "ru";
const path =
  "материалы-для-smt/паяльная-паста-и-припой/флюс-для-пайки/флюс-гель";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Флюс-гель гель применяется для проведения ремонтных работ и для ручной пайки электронных компонентов на поверхность печатных плат Поставляется в разной таре"
      pathname={path}
      keywords="флюс для пайки печатных плат, флюс-карандаш, флюсы для пайки smd, флюс для ремонта, флюсы для пайки печатных плат, флюс-гель, ремонт smd, флюс-аппликатор"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <FluxGelPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <FluxGel path={path} language={language} />
      <ContactArea />
      <MaterialSolder />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
