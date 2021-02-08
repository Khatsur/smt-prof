import React from "react"
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-three-en'
import Footer from '../../containers/layout/footer/footer-one-en'
import Hero from '../../containers/landing/hero-en'
import Feature from '../../containers/landing/feature-en'
import CaseStudy from '../../containers/landing/case-study-en'
import HeaderLayout from '../../containers/landing/header-layout-en'
import HeaderLayoutSpeed from '../../containers/landing/header-layout-2-en'
import CaseStudyAdvan from '../../containers/landing/case-study-2-en'
import Plugins from '../../containers/landing/plugins-en'
import ExtraFeature from '../../containers/landing/extra-features-en'
import BlogArea from '../../containers/index-services/blog-area-en'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Machines for SMT" description="Machines for SMT (surface mounting of components) and for THT (through holes components mounting). Complex solutions, materials and machines service" pathname="en" keywords="machines for smt, machines for tht, materials for soldering, machines service, process development, machines and materials for electronics assembly" lang="en"/>
    <Header transparent/>
    <main className="site-wrapper-reveal">
      <Hero/>
      <Feature/>
      <HeaderLayout/>
      <CaseStudy/>
      <HeaderLayoutSpeed/>
      <CaseStudyAdvan />
      
      <Plugins/>
      <ExtraFeature/>
      <BlogArea />
    </main>
    <Footer/>
  </Layout>
)
 
export default IndexPage
