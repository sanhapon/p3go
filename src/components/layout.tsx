import * as React from 'react'
import * as style from './layout.module.css'

const Layout = ( props: {title: string, children?: JSX.Element} ) => {
    return (
        <div>
            <div className={style.banner}>
                p3go.com
            </div>
            <main className={style.main}>
                {props.children}
            </main>
        </div>
      )
}

export const Head = () => <title>ประกันรถ</title>

export default Layout
