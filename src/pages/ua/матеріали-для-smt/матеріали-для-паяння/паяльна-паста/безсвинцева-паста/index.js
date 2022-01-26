import React from "react";
import SEO from "../../../../../../components/seo";
import Layout from "../../../../../../containers/layout/layout";
import Header from "../../../../../../containers/layout/header/header-three-ua";
import Footer from "../../../../../../containers/layout/footer/footer-one";
import SolderPasteNcPageHeader from "../../../../../../components/pageheader/solder-paste-nc";
import SolderPastePbFree from "../../../../../../containers/materials/solder/solder-paste/pb-free";
import ContactArea from "../../../../../../containers/global/contact-area/contact-three-ua";
import MaterialSolder from "../../../../../../containers/materials/solder-ua";
import img from "../../../../../../data/images/bg/machines/small-print/auto-print.jpg";

const title = "Безсвинцева паста";
const language = "uk";
const path =
  "ua/матеріали-для-smt/матеріали-для-паяння/паяльна-паста/безсвинцева-паста";
const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO
      title={title}
      description="Безсвинцева паста для нанесення на контактні площадки друкованих плат. Використовують для виробів, де є обмеження щодо застосування припою із вмістом свинцю"
      pathname={path}
      keywords="Паяльна паста Indium 8.9, Паяльна паста Indium NC-SMQ92J, нанесення паяльної пасти, поверхневий монтаж, smt, безсвинцева  паяльна паста, безсвинцева паста, беззмивна паяльна паста, безвідмивна паяльна паста"
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
