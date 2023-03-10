import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="th-TH">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="th"></meta>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
         <link rel="shortcut icon" type="image/png" href="/images/favicon.png"/>
        <link rel="preload"
            href="/fonts/Sarabun-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="interFont"
            />
        {props.headComponents}
    
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
