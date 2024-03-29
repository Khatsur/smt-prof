import React from 'react'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { useStaticQuery, graphql } from "gatsby"
import {PageHeaderWrap} from './page-header.style';

const PageHeader = ({pageContext, location, title}) => {
    const { breadcrumb: { crumbs } } = pageContext;
    const disableLinks = [
        "/elements", 
        "/category", 
        "/profile", 
        "/date", 
        "/tag", 
        "/page", 
        "/blog", 
        "/blog/page", 
        "/blogs",
        "/services"
    ]
    const iii = location.pathname + '/';
    const customCrumbLabel = iii.toLowerCase();
    const crumbLabelArr = customCrumbLabel.split('/');
    const label = crumbLabelArr[crumbLabelArr.length - 1]
    const labelArr = label.split('-');
    const imageData = useStaticQuery(graphql `
        query FxPlacerCrumbImgQuery {
            file(relativePath: {eq: "images/bg/machines/placer/fx-baner.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1520, maxHeight: 400, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
      
    `);
    return (
        <PageHeaderWrap fluid={imageData.file.childImageSharp.fluid}>
            <Breadcrumb
                title={title}
                crumbs={crumbs}
                crumbLabel={labelArr.join(' ')}            
                disableLinks={disableLinks}
            />
        </PageHeaderWrap>
    )
}

export default PageHeader
