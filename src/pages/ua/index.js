import React from "react"
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-three-ua'
import Footer from '../../containers/layout/footer/footer-one-ua'
import Hero from '../../containers/landing/hero-ua'
import Feature from '../../containers/landing/feature-ua'
import CaseStudy from '../../containers/landing/case-study-ua'
import HeaderLayout from '../../containers/landing/header-layout-ua'
import HeaderLayoutSpeed from '../../containers/landing/header-layout-2-ua'
import CaseStudyAdvan from '../../containers/landing/case-study-2-ua'
import Plugins from '../../containers/landing/plugins-ua'
import ExtraFeature from '../../containers/landing/extra-features-ua'
import BlogArea from '../../containers/index-services/blog-area-ua'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Обладнання для SMT" description="Обладнання для SMT (поверхневий монтаж компонентів) і для THT ( монтаж компонентів в отвори друкованих плат). Комплексні рішення і витратні матеріали" pathname="ua" keywords="обладнання для SMT, матеріали для монтажу, сервіс обладнання, організація складання електроніки, створення заводів «під ключ», монтаж на поверхню плат" lang="ua"/>
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
