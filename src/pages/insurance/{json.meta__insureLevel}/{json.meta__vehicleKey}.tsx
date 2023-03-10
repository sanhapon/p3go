import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../../components/layout"
import { graphql } from 'gatsby'
import Seo from "../../../components/seo"

import * as style from './json.meta.vehicle.module.css';

interface Data {
  allJson: AllJSON;
  json: JSON;
}

interface AllJSON {
  nodes: AllNode[];
}

interface AllNode {
  url: string;
  meta: Meta;
}

interface JSON {
  insurances: Insurance[];
  meta: Meta;
}

interface Meta {
  year: string;
  vehicleKey: string;
  brand: string;
  model: string;
  subModel: string;
  insureLevel: string;
}

interface Insurance {
  companyName: string;
  cover: number;
  coverDeduct: number;
  coverFlooding: string;
  cover3RDAsset: number;
  netAmount: number;
  garage: string;
  garageTotal: number;
  level: number;
  carCheck: string;
}

const formatter = new Intl.NumberFormat('en-US');

const InsurancePage = (props: {data: Data}) => {
  const [detailsVisible, setDetailsVisible] = React.useState(props.data.json.insurances.map(() => false))

  const toggleDetails = (index: number) => {
    setDetailsVisible(prevState => {
      const newState = [...prevState]
      newState[index] = !newState[index]
      return newState
    })
  }
  return (
    <Layout title={`ประกันรถยนต์ ${props.data.json.meta.brand}-${props.data.json.meta.year}`} category="ประกันรถยนต์" isHome={false}>
      <div>
        <header>
          <h1>ราคาเบี้ย ประกันรถยนต์ สำหรับ {props.data.json.meta.brand} {props.data.json.meta.model} {props.data.json.meta.subModel} ปี {props.data.json.meta.year}</h1> 
        </header>
        <div className={style.otherLinks}>
          <span>เลือกประเภทประกัน: </span>
          <ul>
            {props.data.allJson.nodes
              .filter(n=> n.meta.vehicleKey === props.data.json.meta.vehicleKey.replaceAll("-", "") && 
                      n.meta.insureLevel !== props.data.json.meta.insureLevel )
              .map(n => {
                return (
                  <li>
                    <Link to={n.url}>ชั้น {n.meta.insureLevel.replace("plus", "+")}</Link>
                  </li>
                );
            })}

            <li><Link to="/insurance">ดูประกันอื่นๆ</Link></li>
          </ul>
        </div>
        <div className={style.cardPanel}>
          {props.data.json.insurances.map((insur: Insurance, index: number) => {
            return (
              <div key={index} className={style.card}  onClick={() => toggleDetails(index)}>
                  <div className={detailsVisible[index] ? style.cardSelected : ''}>
                  <div className={style.cardHeader}>
                    <div className={style.cardHeaderCol1}>บริษัท {insur.companyName}</div>
                    <div className={style.cardHeaderCol2}>ประกันชั้น{' '} {props.data.json.meta.insureLevel.replace("plus", "+")}</div>
                  </div>
                  <div className={style.cardHeader}>
                    <div className={style.cardHeaderCol1}></div>
                    <div className={style.cardHeaderCol2}>เบี้ยประกัน {formatter.format(insur.netAmount)} บาท</div>
                  </div>
                  </div>

                  {detailsVisible[index] && 
                    <>
                      <hr className={style.separatorLine} />
                      <div className={style.cardDetail}>
                        <div className={style.cardHeaderCol1}>ทุนประกันรถยนต์</div>
                        <div className={style.cardDetailCol2}>{formatter.format(insur.cover)} บาท</div>

                        {Number.isInteger(insur.coverDeduct) && 
                          <>
                            <div className={style.cardHeaderCol1}>ค่าเสียหายส่วนแรก</div>
                            <div className={style.cardDetailCol2}>{formatter.format(insur.coverDeduct)} บาท</div>
                          </>
                        }

                        <div className={style.cardHeaderCol1}>น้ำท่วม</div>
                        <div className={style.cardDetailCol2}>{insur.coverFlooding === 'Y' ? 'ครอบคลุม' : 'ไม่ครอบคลุม'}</div>

                        <div className={style.cardHeaderCol1}>ทรัพย์สินบุคคลภายนอก</div>
                        <div className={style.cardDetailCol2}>{formatter.format(insur.cover3RDAsset)} บาท</div>

                        <div className={style.cardHeaderCol1}>ประเภทการซ่อม</div>
                        <div className={style.cardDetailCol2}>{insur.garage}</div>

                        <div className={style.cardHeaderCol1}>จำนวนอู่</div>
                        <div className={style.cardDetailCol2}>{formatter.format(insur.garageTotal)} อู่</div>
                  
                        <div className={style.cardHeaderCol1}>ตรวจสภาพรถ</div>
                        <div className={style.cardDetailCol2}>{insur.carCheck === 'N' ? 'ไม่ต้อง' : 'ต้อง'}</div>
                      </div>
                  </>
                }
              </div>
              )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default InsurancePage

export const Head = (props: { data: Data }) => 
  <Seo 
    title={`ประกันรถ ${props.data.json.meta.brand} ${props.data.json.meta.subModel}`}
    keywords={`ประกันรถ, ประกันออนไลน์, เทียบเบี้ยประกัน,  ชั้น1ราคา, รายชื่อประกัน, อู่ซ่อมรถ, ประกันรถ, เช็คเบี้ย, ราคาประกัน, รถเก่าทำประกัน, ประกันรถยนต์, ชั้น1, ชั้น2, ชั้น3, ชั้น2+, ชั้น3+ ${props.data.json.meta.brand}, ${props.data.json.meta.brand} ${props.data.json.meta.model}, ${props.data.json.meta.subModel}, ปี ${props.data.json.meta.year}`}
    description={`เทียบเบี้ยประกันเบี้ยประกันรถ ${props.data.json.meta.brand} ${props.data.json.meta.model} ${props.data.json.meta.subModel} ปี ${props.data.json.meta.year}`}
    />

export const query = graphql`
    query MyQuery($id: String) {
      allJson {
        nodes {
          url: gatsbyPath(filePath: "/insurance/{json.meta__insureLevel}/{json.meta__vehicleKey}")
          meta {
            year
            insureLevel
            vehicleKey
          }
        }
      }
      json(id: {eq: $id}) {
        insurances {
          companyName
          cover
          coverDeduct
          coverFlooding
          cover3RDAsset
          netAmount
          garage
          garageTotal
          carCheck
        } 
        meta {
          year
          vehicleKey
          brand
          model
          subModel
          insureLevel
        }
      }
    }
`
