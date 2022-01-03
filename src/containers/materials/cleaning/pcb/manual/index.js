import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Section, { Row, Col } from "../../../../../components/ui/wrapper";
import Heading from "../../../../../components/ui/heading";
import CaseStudyBox from "../../../../../components/box-large-image/layout-two";
import ButtonSection from "../../../../../containers/elements/button/button-smt";

const CaseStudiesArea = (props) => {
  const autoPrinterData = useStaticQuery(graphql`
    query {
      allMaterialJson(
        filter: { id: { regex: "/zestron-pcb-manual|zestron-fa/" } }
        sort: { order: ASC, fields: id }
      ) {
        edges {
          node {
            fields {
              slug
            }
            id
            bigtitle
            title
            category
            excerpt
            brochure
            image {
              childImageSharp {
                fluid(maxHeight: 230, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
      allMaterialUaJson(
        filter: { id: { regex: "/zestron-pcb-manual|zestron-fa/" } }
        sort: { order: ASC, fields: id }
      ) {
        edges {
          node {
            fields {
              slug
            }
            id
            bigtitle
            title
            category
            excerpt
            brochure
            image {
              childImageSharp {
                fluid(maxHeight: 258, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    }
  `);

  const caseStudies = autoPrinterData.allMaterialJson.edges;
  const caseStudiesUa = autoPrinterData.allMaterialUaJson.edges;
  const brochure = "";

  const { sectionStyle, headingStyle, caseStudyStyles } = props;

  if (props.language === "ru") {
    return (
      <Section {...sectionStyle}>
        <Row>
          <Col>
            <Heading {...headingStyle}>
            Отмывочные жидкости для печатных плат
            </Heading>
            <h5 style={{ textAlign: "justify", color: "#086AD8" }}>
            Жидкость для ручной отмывки плат
            </h5>
            <h6 style={{ textAlign: "justify" }}>
            Отмывочные жидкости для ручной очистки печатных плат позволяют эффективно удалять остатки флюса при изготовлении прототипов изделий или после проведения ремонтных работ. Жидкости для ручной отмывки изготавливаются на основе  органических растворителей, что влечет за собой соблюдения специальных условий пожаробезопасности. Рекомендуется для изделий со следующими процессами нанесением влагозащитных покрытий для улучшения адгезии и снижение риска образования проводящих сред под защитным покрытием.
            </h6>
            <h5 style={{ textAlign: "justify", color: "#086AD8" }}>
            SMART технологии очистки плат от ZESTRON
            </h5>
          </Col>
        </Row>
        <br></br>
        <Row>
          {caseStudies.map((caseStudy) => (
            <Col lg={4} md={6} mb="30px" key={caseStudy.node.id}>
              <CaseStudyBox
                {...caseStudyStyles}
                imageSrc={caseStudy.node.image.childImageSharp}
                title={caseStudy.node.bigtitle}
                category={caseStudy.node.category}
                desc={caseStudy.node.excerpt}
                path={`/${props.path}/${caseStudy.node.fields.slug}`}
                btnText="Подробно"
              />
            </Col>
          ))}
        </Row>
        <Row>
          <ButtonSection path={brochure} lang={props.language} />
        </Row>
      </Section>
    );
  } else if (props.language === "uk") {
    return (
      <Section {...sectionStyle}>
        <Row>
          <Col>
            <Heading {...headingStyle}>
            Миючі рідини для друкованих плат
            </Heading>
            <h5 style={{ textAlign: "justify", color: "#086AD8" }}>
            Рідина для ручного миття плат
            </h5>
            <h6 style={{ textAlign: "justify" }}>
            Миючі рідини для ручного очищення друкованих плат дозволяють ефективно видаляти залишки флюсу під час виготовлення прототипів виробів або після проведення ремонтних робіт. Рідини для ручного відмивання виготовляються на основі органічних розчинників, що зобов'язує до дотримання спеціальних умов пожежної і санітарної безпеки. Рекомендується для виробів з наступними процесами нанесенням вологозахисних покриттів для покращення адгезії та зниження ризику утворення провідних середовищ під захисним покриттям.
            </h6>
            <h5 style={{ textAlign: "justify", color: "#086AD8" }}>
            SMART технології очищення плат від ZESTRON
            </h5>
          </Col>
        </Row>
        <br></br>
        <Row>
          {caseStudiesUa.map((caseStudiesUa) => (
            <Col lg={4} md={6} mb="30px" key={caseStudiesUa.node.id}>
              <CaseStudyBox
                {...caseStudyStyles}
                imageSrc={caseStudiesUa.node.image.childImageSharp}
                title={caseStudiesUa.node.bigtitle}
                category={caseStudiesUa.node.category}
                desc={caseStudiesUa.node.excerpt}
                path={`/${props.path}/${caseStudiesUa.node.fields.slug}`}
                btnText="Докладно"
              />
            </Col>
          ))}
        </Row>
        <Row>
          <ButtonSection path={brochure} lang={props.language} />
        </Row>
      </Section>
    );
  }
};

CaseStudiesArea.propTypes = {
  sectionStyle: PropTypes.object,
  headingStyle: PropTypes.object,
  caseStudyStyles: PropTypes.object,
};

CaseStudiesArea.defaultProps = {
  sectionStyle: {
    pt: "39px",
    pb: "70px",
    responsive: {
      medium: {
        pt: "72px",
        pb: "50px",
      },
      small: {
        pt: "53px",
        pb: "30px",
      },
    },
  },
  headingStyle: {
    as: "h3",
    mb: "40px",
    textalign: "center",
    child: {
      color: "primary",
    },
    responsive: {
      small: {
        mb: "30px",
      },
    },
  },
  caseStudyStyles: {
    contentBoxStyle: {
      pt: "25px",
      pl: "26px",
      pr: "26px",
      textalign: "left",
    },
    headingStyle: {
      as: "h6",
      fontweight: 600,
      mb: "2px",
    },
    descStyle: {
      mb: 0,
      mt: "13px",
    },
  },
};

export default CaseStudiesArea;
