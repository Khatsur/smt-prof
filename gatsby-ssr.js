import React from "react";
export const onRenderBody = (
    { setHeadComponents },
    pluginOptions
  ) => {
    setHeadComponents([
      <script type="text/javascript" charset="UTF-8" src="//cdn.cookie-script.com/s/e900861860e56aca406c1a8cd23dfc14.js"></script>
    ])
}





/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

