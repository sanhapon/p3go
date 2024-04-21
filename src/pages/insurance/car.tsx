import * as React from "react"
import { HeadFC } from "gatsby"
import Layout from "../../components/layout"

import Seo from "../../components/seo"

const hero = {
    minHeight: "400px",
    backgroundColor: "#6B12F9",
    // display: "flex",
    // marginRight: "auto",
    // marginLeft: "auto",
    // position: relative;
}

const iframeStyle = {
    width: "50%",
    minWidth: "350px",
    minHeight: "350px",
    border: 0
}

const CarInsurance = () => {
  return (
    <Layout title="รวมประกันรถ" category="ประกันรถยนต์" isHome={true}>
      <>
        <header>
          <h1>เปรียบเทียบราคา เช็คโปรโมชั่น ประกันรถยนต์ แบบถูกสุดๆ ผ่อนได้สบายๆ 10 เดือน</h1>
        </header>
        {/* <br /> */}
        <div id="hero" style={hero}>
            <iframe src="https://misterprakan.com/th/affiliate/tools/searchform/car?lag=th&affid=AG7585" style={iframeStyle} id="mppanel"></iframe>
            <script src="https://misterprakan.com/th/affiliate/tools/searchform/js/tsmp.js"/>
        </div>
        {/* <div>
            hee
        </div> */}
      </>
    </Layout>

  )
}

export default CarInsurance

export const Head: HeadFC = () => 
  <Seo 
    title="ค่าประกันรถยนต์"
    keywords="ประกันรถ, ค่าประกันรถยนต์, เปรียบเทียบราคา"
    description="รวบรวม และ เปรียบเทียบราคา ค่าประกันรถยนต์ จากบริษัทประกันต่างๆ "
  />
