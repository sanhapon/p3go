import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { BlogData, Frontmatter } from "../../model/blogData"
import { Helmet } from 'react-helmet'

import * as style from "./blogpost.module.css"
import Seo from "../../components/seo"

interface Data {
  mdx: BlogData;
};

const BlogPost = (props: { data : Data, children: any }) => {
  return (
    <Layout 
        title={props.data.mdx.frontmatter.title}
        category={props.data.mdx.frontmatter.category}
        isHome={false}>
      <>
        <h1 className={style.head}>{props.data.mdx.frontmatter.title}</h1>
        <span className={style.lastupdate}>Last update: 
            {props.data.mdx.frontmatter.dateModifiedDate ? 
              props.data.mdx.frontmatter.dateModifiedDate : 
              props.data.mdx.frontmatter.date
            }
        </span>

        {getHemlet(props.data.mdx.frontmatter)}
        
        <article className={style.content}>
          {props.children}
        </article>

        <Link to='/'>
            <span className={style.backHome}>Back to home</span>
        </Link>
      </>
    </Layout>
  )
}

const getHemlet = (frontmatter: Frontmatter) => {
  return (
    <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${frontmatter.title}", 
              "image": "${frontmatter.mainPicture}",
              "datePublished": "${frontmatter.date}"
              ${frontmatter.dateModifiedDate ? `,"dateModified": "${frontmatter.dateModifiedDate}"` : ''} 
            }
          `}
        </script>
      </Helmet>
  )
}
export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        dateModifiedDate(formatString: "YYYY-MM-DD")
        category
        keywords
        description
        mainPicture
      }
      body
    }
  }
`

export const Head = (props: { data: Data }) => 
  <Seo 
    title={props.data.mdx.frontmatter.title}
    keywords={props.data.mdx.frontmatter.keywords}
    description={props.data.mdx.frontmatter.description}
    />

export default BlogPost;
