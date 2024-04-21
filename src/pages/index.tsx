import * as React from "react"
import { HeadFC, Link, PageProps, graphql } from "gatsby"
import Layout from "../components/layout"
import Blog from "../components/Blog"
import { BlogData } from "../model/blogData"

import * as style from "./index.module.css"
import BlogCard from "../components/blogCard"
import Seo from "../components/seo"

interface AllMdx {
  nodes: BlogData[];
};

interface Data {
  allMdx: AllMdx;
};

const IndexPage = (props: {data: Data}) => {

  return (
    <Layout title="home" category={"home"} isHome={true}>
      <div className={style.cardContainer}>
        {props.data.allMdx.nodes.map((node: BlogData, index: number) => 
          <div key={index} className={style.cardItem}>
            <BlogCard data={node} index={index}></BlogCard>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => 
  <Seo 
    title="p3go.com"
    keywords="Travel, travelling story, faviorite place"
    description="Embark on a journey of discovery with our travel blog, where adventure awaits at every turn. From hidden gems to iconic landmarks, explore the world's most captivating destinations through immersive stories, insider tips, and expert guides. Get inspired, plan your next adventure, and make unforgettable memories with us."
  />

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
          category
          mainPicture
        }
        id
        excerpt(pruneLength: 300)
        body
      }
    }
  }
`
