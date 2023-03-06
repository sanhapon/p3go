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
    title="Home Page"
    keywords="รถยนตร์, รถไฟฟ้า"
    description="เว็บเรารวบรวม เรื่องต่างๆ ที่น่าสนใจ เกียวกับรถยนตร์และรถไฟฟ้า เพื่อเป็นประโยชน์กับ รถรักรถทั่วไป"
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

// allJson {
//   edges {
//     node {
//       id
//       meta {
//         vehicleKey
//         brand
//         model
//         subModel
//         insureLevel
//       }
//     }
//   }
// }