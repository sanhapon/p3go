import * as React from "react"
import { HeadFC, Link, PageProps, graphql } from "gatsby"
import Layout from "../components/layout"
import Blog from "../components/Blog"
import { BlogData } from "../model/blogData"

import * as style from "./index.module.css"

interface AllMdx {
  nodes: BlogData[];
};

interface Data {
  allMdx: AllMdx;
};

const IndexPage = (props: {data: Data}) => {
  
  return (
    <Layout title="www.p3go.com">
      <>
      {
        props.data.allMdx.nodes.map((node: BlogData) => (
          <article key={node.id} className={style.artile}>
            <h5>{node.frontmatter.title}</h5>
            <p>
                {node.body.substring(1, 500)}
                <Link to={`/blog/${node.frontmatter.slug}`}> ...more</Link>
            </p>
            <p>Posted: {node.frontmatter.date}</p>
            <hr />
        </article>
        ))
      }
      </>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>p3go.com</title>

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
        }
        id
        excerpt
        body
      }
    }
  }
`
