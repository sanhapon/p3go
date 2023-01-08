import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Layout from "../../components/layout"
import Blog from "../../components/Blog"
import { BlogData } from "../../model/blogData"

import * as style from "./blogpost.module.css"

interface Data {
  mdx: BlogData;
};

const BlogPost = (props: { data : Data, children }) => {
  console.log(props)
  return (
    <Layout title={props.data.mdx.frontmatter.title}>
      <h2>{props.data.mdx.frontmatter.title}</h2>
      {props.children}
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

// const BlogPost = (props: {data: Data}) => {
  
//   return (
//     <Layout title="www.p3go.com">
//       <>
//       {
//         props.data.allMdx.nodes.map((node: BlogData) => (
//           <article className={style.article} key={node.id}>
//             <h5>{node.frontmatter.title}</h5>
//             <p>{node.excerpt}</p>
//             <p>Posted: {node.frontmatter.date}</p>
//           </article>
//         ))
//       }
//       </>
//     </Layout>
//   )
// }

export default BlogPost;
