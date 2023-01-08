import * as React from "react"
import { HeadFC, Link, PageProps, graphql } from "gatsby"
import Layout from "../components/layout"
import Blog from "../components/Blog"
import { BlogData } from "../model/blogData"

import * as style from "./index.module.css"
import BlogCard from "../components/blogCard"

interface AllMdx {
  nodes: BlogData[];
};

interface Data {
  allMdx: AllMdx;
};

const IndexPage = (props: {data: Data}) => {
  
  return (
    <Layout title="www.p3go.com" category={"home"}>
      <div className={style.cardContainer}>
        {props.data.allMdx.nodes.map((node: BlogData, index: number) => 
          <div className={style.cardItem}>
            <BlogCard data={node} index={index}></BlogCard>
          </div>
        )}
      </div>
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
          category
        }
        id
        excerpt(pruneLength: 300)
        body
      }
    }
  }
`
