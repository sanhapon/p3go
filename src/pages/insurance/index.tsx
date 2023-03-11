import * as React from "react"
import { HeadFC, graphql } from "gatsby"
import Layout from "../../components/layout"

import Seo from "../../components/seo"

interface Data {
  allJson: AllJSON;
}

interface AllJSON {
  nodes: Node[]
}

interface Node {
  url: string;
  meta: Meta;
}

interface Meta {
  year: string;
  vehicleKey: string;
  cc: string;
  brand: string;
  model: string;
  subModel: string;
  insureLevel: string;
}

const IndexPage = (props: {data: Data}) => {
  return (
    <Layout title="รวมประกันรถ" category="ประกันรถยนต์" isHome={false}>
      <>
        <header>
          <h1>รวบรวม และ เปรียบเทียบราคา ค่าประกันรถยนต์ จากบริษัทประกันต่างๆ</h1>
        </header>
        <br />

        <ul>
          {props.data.allJson.nodes.map(node => {
            return (
              <li>
                <a href={node.url}>{node.meta.brand} - {node.meta.model} - {node.meta.subModel} - {node.meta.year}</a>
              </li>
            );
          })}
        </ul>
      </>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => 
  <Seo 
    title="ค่าประกันรถยนต์"
    keywords="ประกันรถ, ค่าประกันรถยนต์, เปรียบเทียบราคา"
    description="รวบรวม และ เปรียบเทียบราคา ค่าประกันรถยนต์ จากบริษัทประกันต่างๆ "
  />

export const query = graphql`
  query {
    allJson(sort: {meta: {brand: ASC}}) {
      nodes {
        url: gatsbyPath(filePath: "/insurance/{json.meta__insureLevel}/{json.meta__vehicleKey}")
        meta {
          brand
          cc
          insureLevel
          model
          subModel
          vehicleKey
          year
        }
      }
    } 
  }
`
