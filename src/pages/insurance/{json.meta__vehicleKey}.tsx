import * as React from "react"
import { HeadFC } from "gatsby"
import Layout from "../../components/layout"
import { graphql } from 'gatsby'
import Seo from "../../components/seo"

import * as style from './json.meta.vehicle.module.css';

interface Data {
  json: JSON;
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
  insureLevel: number;
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
  return (
    <Layout title={`ประกันรถยนต์ ${props.data.json.meta.brand}-${props.data.json.meta.year}`} category="ประกันรถยนต์" isHome={false}>
      <div>
        <h2>ประกันรถยนต์ {props.data.json.meta.brand} {props.data.json.meta.model} {props.data.json.meta.subModel} ปี {props.data.json.meta.year}</h2> 
        <div>
          {props.data.json.insurances.map((insur: any) => {
            return (
              <div className={style.card}>
                  <div className={style.cardHeader}>
                    <div><h4>บริษัท {insur.companyName}</h4></div>
                    <div className={style.cardHeaderCol2}>ประกันชั้น{' '} {props.data.json.meta.insureLevel}</div>
                  </div>
                  <div className={style.cardDetail}>
                    <div>ทุนประกันรถยนต์</div>
                    <div className={style.cardDetailCol2}>{formatter.format(insur.cover)} บาท</div>

                    {Number.isInteger(insur.coverDeduct) && 
                      <>
                        <div>ค่าเสียหายส่วนแรก</div>
                        <div className={style.cardDetailCol2}>{formatter.format(insur.coverDeduct)} บาท</div>
                      </>
                    }

                    <div>น้ำท่วม</div>
                    <div className={style.cardDetailCol2}>{insur.coverFlooding === 'Y' ? 'ครอบคลุม' : 'ไม่ครอบคลุม'}</div>

                    <div>ทรัพย์สินบุคคลภายนอก</div>
                    <div className={style.cardDetailCol2}>{formatter.format(insur.cover3RDAsset)} บาท</div>

                    <div>ประเภทการซ่อม</div>
                    <div className={style.cardDetailCol2}>{insur.garage}</div>

                    <div>จำนวนอู่</div>
                    <div className={style.cardDetailCol2}>{formatter.format(insur.garageTotal)} อู่</div>
              
                    <div>ตรวจสภาพรถ</div>
                    <div className={style.cardDetailCol2}>{insur.carCheck === 'N' ? 'ไม่ต้อง' : 'ต้อง'}</div>
              
                    <div><strong>ราคา</strong></div>
                    <div className={style.cardDetailCol2}>{formatter.format(insur.netAmount)} บาท</div>
                </div>
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
    keywords={`ประกันรถ, ${props.data.json.meta.brand}, ${props.data.json.meta.model}, ${props.data.json.meta.subModel}, ปี ${props.data.json.meta.year}`}
    description={`ประกันรถ ${props.data.json.meta.brand} ${props.data.json.meta.model} ${props.data.json.meta.subModel} ปี ${props.data.json.meta.year}`}
    />

export const query = graphql`
    query MyQuery($id: String) {
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
