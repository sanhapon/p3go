import * as React from "react"
import { HeadFC, Link, PageProps, graphql } from "gatsby"
import Layout from "../../components/layout"
import Blog from "../../components/Blog"
import { BlogData } from "../../model/blogData"

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
        <h2>{props.data.mdx.frontmatter.title}</h2>

        <article className={style.content}>
          {props.children}
        </article>

        <Link to='/'>
            <span className={style.backHome}>ไปหน้าแรก</span>
        </Link>
      </>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        category
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
