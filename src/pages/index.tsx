import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Blog from "../components/Blog"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="www.p3go.com">
      <Blog excerpt={"p3go.com เรารวบรวมสาระน่ารู้เกี่ยวกับรถ ที่เราทุกคนควรรู้ กฎจราจรที่เกี่ยวข้อง เทรนด์ในอนาคต รวมถึงเปรียบเทียบราคาประกันจาก website ต่างๆ ให้ได้ราคาที่ดีที่สุด"}></Blog>

      <Blog excerpt={"ในปัจจุบันอายุยางรถยนต์จะอยู่ที่ 2-5 ปี หรือ 30,000 – 40,000 กิโลเมตร ซึ่งจะขึ้นอยู่กับการใช้งาน หากมีการใช้งานรถหนักมากเกินไป เช่น การต้องบรรทุกของหนักเป็นประจำ หรือใช้รถเดินทางต่างจังหวัดบ่อย ๆ ผู้ใช้รถควรต้องมีการเช็คยางรถยนต์ อย่างน้อยปีละหนึ่งครั้ง "}></Blog>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>p3go.com</title>
