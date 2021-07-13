const path = require(`path`)
const { slugify } = require('./src/utils/utilFunctions')
const _ = require('lodash')

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title);
        const date = node.frontmatter.date;
        const dateSplit = date.split(" ");
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle
        });
        createNodeField({
            node,
            name: 'id',
            value: slugFromTitle + '-' + dateSplit[0]
        });
        createNodeField({
            node,
            name: "dateSlug",
            value: dateSplit[0]
        });
        if (Object.prototype.hasOwnProperty.call(node.frontmatter, "author")) {
            createNodeField({
                node,
                name: "authorId",
                value: slugify(node.frontmatter.author)
            });
        }
    }
    if (node.internal.type === 'AuthorsJson') {
        createNodeField({
            node,
            name: "authorId",
            value: slugify(node.name)
        });
    }
    if (node.internal.type === 'ItServicesJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'ItSolutionsJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'CaseStudiesJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'SmallPrinterJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'SmallPrinterUaJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'SmallPrinterPbtJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'SmallPrinterPbtUaJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'SemiPrinterJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'SemiPrinterUaJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'AutoPrinterJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'AutoPrinterUaJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'ManipulatorJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'ManipulatorUaJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'ToptablePlacerJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'ToptablePlacerUaJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'SemiPlacerJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'SemiPlacerUaJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'JukiPlacerJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'JukiPlacerUaJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'ReflowJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'ReflowUaJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'SelectiveJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'SelectiveUaJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'InspectionJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'InspectionUaJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'ConveyerJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if (node.internal.type === 'ConveyerUaJson') {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    
}


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const servicePage = path.resolve("./src/templates/service-template/service-template.js")
    const solutionPage = path.resolve("./src/templates/it-solution-template/it-solution-template.js")
    const caseStudyPage = path.resolve("./src/templates/case-study-template/case-study-template.js")
    const smallPrinterPage = path.resolve("./src/templates/small-printer-template/small-printer-template.js")
    const smallPrinterPageUa = path.resolve("./src/templates/small-printer-template/small-printer-template-ua.js")
    const smallPrinterPbtPage = path.resolve("./src/templates/small-printer-pbt-template/small-printer-pbt-template.js")
    const smallPrinterPbtPageUa = path.resolve("./src/templates/small-printer-pbt-template/small-printer-pbt-template-ua.js")
    const semiPrinterPage = path.resolve("./src/templates/semi-printer-template/semi-printer-template.js")
    const semiPrinterPageUa = path.resolve("./src/templates/semi-printer-template/semi-printer-template-ua.js")
    const autoPrinterPage = path.resolve("./src/templates/auto-printer-template/auto-printer-template.js")
    const autoPrinterPageUa = path.resolve("./src/templates/auto-printer-template/auto-printer-template-ua.js")
    const manipulatorPage = path.resolve("./src/templates/manipulator-template/manipulator-template.js")
    const manipulatorPageUa = path.resolve("./src/templates/manipulator-template/manipulator-template-ua.js")
    const toptablePlacerPage = path.resolve("./src/templates/toptable-placer-template/toptable-placer-template.js")
    const toptablePlacerPageUa = path.resolve("./src/templates/toptable-placer-template/toptable-placer-template-ua.js")
    const semiPlacerPage = path.resolve("./src/templates/semi-placer-template/semi-placer-template.js")
    const semiPlacerPageUa = path.resolve("./src/templates/semi-placer-template/semi-placer-template-ua.js")
    const jukiPlacerPage = path.resolve("./src/templates/juki-placer-template/juki-placer-template.js")
    const jukiPlacerPageUa = path.resolve("./src/templates/juki-placer-template/juki-placer-template-ua.js")
    const reflowPage = path.resolve("./src/templates/reflow-template/reflow-template.js")
    const reflowPageUa = path.resolve("./src/templates/reflow-template/reflow-template-ua.js")
    const selectivePage = path.resolve("./src/templates/selective-template/selective-template.js")
    const selectivePageUa = path.resolve("./src/templates/selective-template/selective-template-ua.js")
    const inspectionPage = path.resolve("./src/templates/inspection-template/inspection-template.js")
    const inspectionPageUa = path.resolve("./src/templates/inspection-template/inspection-template-ua.js")
    const conveyerPage = path.resolve("./src/templates/conveyer-template/conveyer-template.js")
    const conveyerPageUa = path.resolve("./src/templates/conveyer-template/conveyer-template-ua.js")

    
    const singleBlogPage = path.resolve("./src/templates/blog-template/blog-template.js")
    const blogList = path.resolve("./src/templates/blog-list/blog-list.js");
    const tagPage = path.resolve("./src/templates/tag-template/tag-template.js");
    const categoryPage = path.resolve("./src/templates/category-template/category-template.js");
    const authorPage = path.resolve("./src/templates/author-template/author-template.js");
    const datePage = path.resolve("./src/templates/date-template/date-template.js");
    const searchPage = path.resolve("./src/templates/search-template/search-template.js");


    const result = await graphql(`
        {
            allItServicesJson {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }  
            allItSolutionsJson {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }  
            allCaseStudiesJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        image {
                          childImageSharp {
                            fixed(width: 120, height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        image {
                          childImageSharp {
                            fixed(width: 120, height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }  
            allSmallPrinterJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            allSmallPrinterPbtJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            allSmallPrinterPbtUaJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            
            allSmallPrinterUaJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }  
            allSemiPrinterJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            allSemiPrinterUaJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            allAutoPrinterJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            allAutoPrinterUaJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }
            allManipulatorJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            allManipulatorUaJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }
            allToptablePlacerJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            allToptablePlacerUaJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }
            allSemiPlacerJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            allSemiPlacerUaJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }
            allJukiPlacerJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                        ru
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            allJukiPlacerUaJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                        ua
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }
            allReflowJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                        ru
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            allReflowUaJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                        ua
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }
            allSelectiveJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                        ru
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            allSelectiveUaJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                        ua
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }
            allInspectionJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                        ru
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            allInspectionUaJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                        ua
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }
            allConveyerJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                        ru
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            } 
            allConveyerUaJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                        ua
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        bigtitle
                        image {
                          childImageSharp {
                            fixed(height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }

            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                            authorId
                            dateSlug
                        }
                        frontmatter {
                            tags
                            categories
                            date(formatString: "LL")
                        }
                    }
                    next {
                        frontmatter {
                            title
                            featured_image {
                                childImageSharp {
                                    fluid(maxWidth: 720, maxHeight: 120, quality: 100) {
                                        src
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                    previous {
                        frontmatter {
                            title
                            featured_image {
                                childImageSharp {
                                    fluid(maxWidth: 720, maxHeight: 120, quality: 100) {
                                        src
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }       
        }
    `);

    // Create Single IT Service page

    const itservices = result.data.allItServicesJson.edges;
    itservices.forEach(({ node }) => {
        createPage({
            path: `it-service/${node.fields.slug}`,
            component: servicePage,
            context: {
                slug: node.fields.slug
            }
        })
    });

    // Create Single IT Solution page
    const itsolutions = result.data.allItSolutionsJson.edges;
    itsolutions.forEach(({ node }) => {
        createPage({
            path: `it-solution/${node.fields.slug}`,
            component: solutionPage,
            context: {
                slug: node.fields.slug
            }
        })
    });

    // Create Single Case Study Page

    const caseStudies = result.data.allCaseStudiesJson.edges;
    caseStudies.forEach(({ node, next, previous }) => {
        createPage({
            path: `case-study/${node.fields.slug}`,
            component: caseStudyPage,
            context: {
                slug: node.fields.slug,
                next,
                previous
            }
        })
    });

    // Create Single Small Printer Page

    const smallPrinter = result.data.allSmallPrinterJson.edges;
    smallPrinter.forEach(({ node, next, previous }) => {
        createPage({
            path: `оборудование-для-монтажа/поверхностный-монтаж/принтеры-паяльной-пасты/принтеры-пасты-ручные/${node.fields.slug}`,
            component: smallPrinterPage,
            context: {
                slug: node.fields.slug,
                next,
                previous
            }
        })
    });

     // Create Single Small Printer Ua Page

     const smallPrinterUa = result.data.allSmallPrinterUaJson.edges;
     smallPrinterUa.forEach(({ node, next, previous }) => {
         createPage({
             path: `ua/обладнання-для-монтажу/поверхневий-монтаж/принтери-паяльної-пасти/принтери-пасти-ручні/${node.fields.slug}`,
             component: smallPrinterPageUa,
             context: {
                 slug: node.fields.slug,
                 next,
                 previous
             }
         })
     });

     // Create Single Small Printer PBT Page

    const smallPrinterPbt = result.data.allSmallPrinterPbtJson.edges;
    smallPrinterPbt.forEach(({ node, next, previous }) => {
        createPage({
            path: `оборудование-для-монтажа/поверхностный-монтаж/принтеры-паяльной-пасты/принтеры-пасты-ручные/${node.fields.slug}`,
            component: smallPrinterPbtPage,
            context: {
                slug: node.fields.slug,
                next,
                previous
            }
        })
    });

     // Create Single Small Printer PBT Ua Page

     const smallPrinterPbtUa = result.data.allSmallPrinterPbtUaJson.edges;
     smallPrinterPbtUa.forEach(({ node, next, previous }) => {
         createPage({
             path: `ua/обладнання-для-монтажу/поверхневий-монтаж/принтери-паяльної-пасти/принтери-пасти-ручні/${node.fields.slug}`,
             component: smallPrinterPbtPageUa,
             context: {
                 slug: node.fields.slug,
                 next,
                 previous
             }
         })
     });

     // Create Single Semi Printer Page

     const semiPrinter = result.data.allSemiPrinterJson.edges;
     semiPrinter.forEach(({ node, next, previous }) => {
        createPage({
            path: `оборудование-для-монтажа/поверхностный-монтаж/принтеры-паяльной-пасты/полуавтоматический-трафаретный-принтер/${node.fields.slug}`,
            component: semiPrinterPage,
            context: {
                slug: node.fields.slug,
                next,
                previous
            }
        })
    });

    // Create Single Semi Printer Page Ua

    const semiPrinterUa = result.data.allSemiPrinterUaJson.edges;
     semiPrinterUa.forEach(({ node, next, previous }) => {
        createPage({
            path: `ua/обладнання-для-монтажу/поверхневий-монтаж/принтери-паяльної-пасти/напівавтоматичний-трафаретний-принтер/${node.fields.slug}`,
            component: semiPrinterPageUa,
            context: {
                slug: node.fields.slug,
                next,
                previous
            }
        })
    });

     // Create Single Auto Printer Page

     const autoPrinter = result.data.allAutoPrinterJson.edges;
     autoPrinter.forEach(({ node, next, previous }) => {
        createPage({
            path: `оборудование-для-монтажа/поверхностный-монтаж/принтеры-паяльной-пасты/автоматический-принтер-пасты/${node.fields.slug}`,
            component: autoPrinterPage,
            context: {
                slug: node.fields.slug,
                next,
                previous
            }
        })
    });

    // Create Single Auto Printer Page Ua

    const autoPrinterUa = result.data.allAutoPrinterUaJson.edges;
     autoPrinterUa.forEach(({ node, next, previous }) => {
        createPage({
            path: `ua/обладнання-для-монтажу/поверхневий-монтаж/принтери-паяльної-пасти/автоматичний-принтер-пасти/${node.fields.slug}`,
            component: autoPrinterPageUa,
            context: {
                slug: node.fields.slug,
                next,
                previous
            }
        })
    });

     // Create Single Manipulator Page

     const Manipulator = result.data.allManipulatorJson.edges;
     Manipulator.forEach(({ node, next, previous }) => {
        createPage({
            path: `оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов/манипулятор-установки-компонентов-smd/${node.fields.slug}`,
            component: manipulatorPage,
            context: {
                slug: node.fields.slug,
                next,
                previous
            }
        })
    });

    // Create Single Manipulator Page Ua

    const ManipulatorUa = result.data.allManipulatorUaJson.edges;
    ManipulatorUa.forEach(({ node, next, previous }) => {
        createPage({
            path: `ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів/маніпулятор-встановлення-компонентів-smd/${node.fields.slug}`,
            component: manipulatorPageUa,
            context: {
                slug: node.fields.slug,
                next,
                previous
            }
        })
    });

    // Create Single Toptable Page

    const toptablePlacer = result.data.allToptablePlacerJson.edges;
    toptablePlacer.forEach(({ node, next, previous }) => {
       createPage({
           path: `оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов/расстановщик-smd/${node.fields.slug}`,
           component: toptablePlacerPage,
           context: {
               slug: node.fields.slug,
               next,
               previous
           }
       })
   });

   // Create Single Toptable Page Ua

   const toptablePlacerUa = result.data.allToptablePlacerUaJson.edges;
   toptablePlacerUa.forEach(({ node, next, previous }) => {
       createPage({
           path: `ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів/розстановник-smd/${node.fields.slug}`,
           component: toptablePlacerPageUa,
           context: {
               slug: node.fields.slug,
               next,
               previous
           }
       })
   });

   // Create Single Semi Placer Page

   const semiPlacer = result.data.allSemiPlacerJson.edges;
   semiPlacer.forEach(({ node, next, previous }) => {
      createPage({
          path: `оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов/автоматические-установщики-smd/${node.fields.slug}`,
          component: semiPlacerPage,
          context: {
              slug: node.fields.slug,
              next,
              previous
          }
      })
  });

  // Create Single Semi Placer Page Ua

  const semiPlacerUa = result.data.allSemiPlacerUaJson.edges;
  semiPlacerUa.forEach(({ node, next, previous }) => {
      createPage({
          path: `ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів/автоматичні-установники-smd/${node.fields.slug}`,
          component: semiPlacerPageUa,
          context: {
              slug: node.fields.slug,
              next,
              previous
          }
      })
  });

   // Create Single Juki Placer Page

   const jukiPlacer = result.data.allJukiPlacerJson.edges;
   jukiPlacer.forEach(({ node, next, previous }) => {
      createPage({
          path: `${node.ru}/${node.fields.slug}`,
          component: jukiPlacerPage,
          context: {
              slug: node.fields.slug,
              next,
              previous
          }
      })
  });

  // Create Single Juki Placer Page Ua

  const jukiPlacerUa = result.data.allJukiPlacerUaJson.edges;
  jukiPlacerUa.forEach(({ node, next, previous }) => {
      createPage({
          path: `${node.ua}/${node.fields.slug}`,
          component: jukiPlacerPageUa,
          context: {
              slug: node.fields.slug,
              next,
              previous
          }
      })
  });

  // Create Single Reflow Page

  const reflow = result.data.allReflowJson.edges;
  reflow.forEach(({ node, next, previous }) => {
     createPage({
         path: `${node.ru}/${node.fields.slug}`,
         component: reflowPage,
         context: {
             slug: node.fields.slug,
             next,
             previous
         }
     })
 });

 // Create Single Reflow Page Ua

 const reflowUa = result.data.allReflowUaJson.edges;
 reflowUa.forEach(({ node, next, previous }) => {
     createPage({
         path: `${node.ua}/${node.fields.slug}`,
         component: reflowPageUa,
         context: {
             slug: node.fields.slug,
             next,
             previous
         }
     })
 });

 // Create Single Selective Page

 const selective = result.data.allSelectiveJson.edges;
 selective.forEach(({ node, next, previous }) => {
    createPage({
        path: `${node.ru}/${node.fields.slug}`,
        component: selectivePage,
        context: {
            slug: node.fields.slug,
            next,
            previous
        }
    })
});

// Create Single Selective Page Ua

const selectiveUa = result.data.allSelectiveUaJson.edges;
selectiveUa.forEach(({ node, next, previous }) => {
    createPage({
        path: `${node.ua}/${node.fields.slug}`,
        component: selectivePageUa,
        context: {
            slug: node.fields.slug,
            next,
            previous
        }
    })
});

// Create Single Inspection Page

const inspection = result.data.allInspectionJson.edges;
inspection.forEach(({ node, next, previous }) => {
   createPage({
       path: `${node.ru}/${node.fields.slug}`,
       component: inspectionPage,
       context: {
           slug: node.fields.slug,
           next,
           previous
       }
   })
});

// Create Single Inspection Page Ua

const inspectionUa = result.data.allInspectionUaJson.edges;
inspectionUa.forEach(({ node, next, previous }) => {
   createPage({
       path: `${node.ua}/${node.fields.slug}`,
       component: inspectionPageUa,
       context: {
           slug: node.fields.slug,
           next,
           previous
       }
   })
});

// Create Single Conveyer Page

const conveyer = result.data.allConveyerJson.edges;
conveyer.forEach(({ node, next, previous }) => {
   createPage({
       path: `${node.ru}/${node.fields.slug}`,
       component: conveyerPage,
       context: {
           slug: node.fields.slug,
           next,
           previous
       }
   })
});

// Create Single Conveyer Page Ua

const conveyerUa = result.data.allConveyerUaJson.edges;
conveyerUa.forEach(({ node, next, previous }) => {
   createPage({
       path: `${node.ua}/${node.fields.slug}`,
       component: conveyerPageUa,
       context: {
           slug: node.fields.slug,
           next,
           previous
       }
   })
});



    // Create Single Blog Page

    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach(({ node, next, previous }) => {
        createPage({
            path: node.fields.slug,
            component: singleBlogPage,
            context: {
                slug: node.fields.slug,
                authorId: node.fields.authorId,
                next,
                previous
            }
        })
    });


    // Create Blog List Page
    // Pagination

    const postsPerPage = 6;
    const numberOfPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numberOfPages }).forEach((_, index) => {
        const isFirstPage = index === 0;
        const currentPage = index + 1;
        if (isFirstPage) return;
        createPage({
            path: `blog/page/${currentPage}`,
            component: blogList,
            context: {
                limit: postsPerPage,
                skip: index * postsPerPage,
                currentPage,
                numberOfPages
            }
        })
    })

    // Create Tags Page

    let tags = []
    _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
        }
    })

    tags = _.uniq(tags)
    tags.forEach(tag => {
        createPage({
            path: `/tag/${slugify(tag)}`,
            component: tagPage,
            context: {
                tag
            }
        })
    })

    // Create Categories Page

    let categories = []
    _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.categories')) {
            categories = categories.concat(edge.node.frontmatter.categories)
        }
    })

    categories = _.uniq(categories)
    categories.forEach(category => {
        createPage({
            path: `/category/${slugify(category)}`,
            component: categoryPage,
            context: {
                category
            }
        })
    })

    // Create Authors Page

    let authors = []
    _.each(posts, edge => {
        if (_.get(edge, 'node.fields.authorId')) {
            authors = authors.concat(edge.node.fields.authorId)
        }
    })

    authors = _.uniq(authors)
    authors.forEach(author => {
        createPage({
            path: `/profile/${author}`,
            component: authorPage,
            context: {
                author
            }
        })
    })

    // Create Date Page

    let dates = []
    let dateSlugs = []
    _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.date')) {
            dates = dates.concat(edge.node.frontmatter.date)
            dateSlugs = dateSlugs.concat(edge.node.fields.dateSlug)
        }
    })

    dates = _.uniq(dates)
    dateSlugs = _.uniq(dateSlugs)
    dateSlugs.forEach((dateSlug, i) => {
        createPage({
            path: `/date/${dateSlug}`,
            component: datePage,
            context: {
                date: dates[i],
                dateSlug
            }
        })
    })

    // Create Search Page
    createPage({
        path: '/search',
        component: searchPage,
    })
}
