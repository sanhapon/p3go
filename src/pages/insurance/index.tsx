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
  meta: Meta;
}

interface Meta {
  year: string;
  vehicleKey: string;
  cc: string;
  brand: string;
  model: string;
  subModel: string;
  insureLevel: number;
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
            const url = node.meta.vehicleKey.substring(0, 4) + "-" + node.meta.vehicleKey.substring(4, 6) + "-" + node.meta.vehicleKey.substring(6, 8);
            return (
              <li>
                <a href={`/insurance/${url.toLowerCase()}/`}>{node.meta.brand} - {node.meta.model} - {node.meta.subModel} - {node.meta.year}</a>
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
        meta {
          brand
          cc
          insureLevel
          model
          subModel
          vehicleKey
          url
          year
        }
      }
    } 
  }
`
