import { useStaticQuery, graphql } from 'gatsby'

function useFormUrl(props) {
    const getFormUrl = useStaticQuery(graphql`
        query GET_FORM_URL {
            site {
                siteMetadata {
                    formspree
                }
            }
        }      
    `)
    const { site: { siteMetadata: { formspree } } } = getFormUrl
    return formspree;
}

export default useFormUrl