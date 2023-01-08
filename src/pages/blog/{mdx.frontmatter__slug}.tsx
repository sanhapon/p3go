import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Layout from "../../components/layout"
import Blog from "../../components/Blog"
import { BlogData } from "../../model/blogData"

import * as style from "./blogpost.module.css"
import { MDXProvider } from "@mdx-js/react"

interface Data {
  mdx: BlogData;
};

const BlogPost = (props: { data : Data, children }) => {
  console.log(props)
  return (
    <Layout title={props.data.mdx.frontmatter.title}>
      <h2>{props.data.mdx.frontmatter.title}</h2>
      <MDXProvider>
        {props.children}
      </MDXProvider>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost;
