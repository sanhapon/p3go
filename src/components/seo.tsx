import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = (props: {title: string, keywords?: string, description?: string }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <title>{props.title} | {data.site.siteMetadata.title}</title>
        <meta http-equiv="content-language" content="th"></meta>
        {props.keywords && 
            <meta name="keywords" content={props.keywords}></meta>
        }
        {props.description &&
            <meta name="description" content={props.description}></meta>
        }
    </>
    
  )
}

export default Seo