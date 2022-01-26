import React from "react";
import SEO from "../../../../../components/seo";
import Layout from "../../../../../containers/layout/layout";
import Header from "../../../../../containers/layout/header/header-three";
import Footer from "../../../../../containers/layout/footer/footer-one";
import SolderPasteNcPageHeader from "../../../../../components/pageheader/solder-paste-nc";
import SolderPastePbFree from "../../../../../containers/materials/solder/solder-paste/pb-free";
import ContactArea from "../../../../../containers/global/contact-area/contact-three-ru";
import MaterialSolder from "../../../../../containers/materials/solder";
import img from '../../../../../data/images/bg/machines/small-print/auto-print.jpg'


const title = "Бессвинцовая паста";
const language = "ru";
const path =
  "материалы-для-smt/паяльная-паста-и-припой/паяльная-паста/бессвинцовая-паста";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Бессвинцовая паста для нанесения на контактные площадки печатных плат. Используют для изделий где есть ограничения по применению припоя с содержанием свинца"
      pathname={path}
      keywords="Паяльная паста Indium 8.9, Паяльная паста Indium NC-SMQ92J, нанесение паяльной пасты, поверхностный монтаж, smt, беcсвинцовая пайка, lead free, PB free, smt, безсвинцовая паста, водосмываемая паяльная паста, безотмывочная паяльная паста"
      image={img}
      lang={language}
    />
    <Header path={path} />
    <SolderPasteNcPageHeader
      pageContext={pageContext}
      location={location}
      title={title}
    />
    <main className="site-wrapper-reveal">
      <SolderPastePbFree path={path} language={language} />
      <ContactArea />
      <MaterialSolder />
    </main>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
