import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three";
import Footer from "../../../../../containers/layout/footer/footer-one";
import UsCleanPageHeader from "../../../../../components/pageheader/pcb-clean-us";
import UsCleanPcb from "../../../../../containers/materials/cleaning/pcb/us";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ru";
import MaterialClean from "../../../../../containers/materials/cleaning";
import img from '../../../../../data/images/bg/materials/cleaning/pcb/pcb-cleaning-baner.jpg'


const title = "Жидкость для ультразвуковой отмывки плат";
const language = "ru";
const path =
  "материалы-для-smt/жидкости-для-мойки/жидкости-для-отмывки-печатных-плат/для-ультразвуковой-отмывки-плат";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Жидкость для ультразвуковой отмывки плат после загрязнений возникающих в процессе монтажа электронных компонентов на поверхность и в отверстия печатных плат"
      pathname={path}
      keywords="Жидкости для отмывки печатных плат, жидкость для ультразвуковой отмывки плат, жидкость для струйной отмывки плат, жидкость для ручной отмывки плат, vigon us, vigon a201, zestron fa+"
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
      <UsCleanPcb path={path} language={language} />
      <ContactArea />
      <MaterialClean />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
