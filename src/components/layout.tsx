import * as React from 'react'
import * as style from './layout.module.css'

const Layout = ( props: {title: string, children: JSX.Element} ) => {
    return (
        <>
            <div className={style.banner}>
                p3go.com
            </div>
            <div className={style.container}>
                <div className={style.content}>
                    <main>
                        {props.children}
                    </main>
                </div>
            </div>
        </>
      )
}

export const Head = (props: any) => <title>p3go.com | {props?.data?.mdx?.frontmatter?.title ?? ''} </title>

export default Layout
