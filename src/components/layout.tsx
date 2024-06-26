import * as React from 'react'
import * as style from './layout.module.css'
import { Link } from 'gatsby'
import Footer from './footer'

const Layout = (
    props: {title: string, category: string, children: JSX.Element, isHome: boolean}
) => {
    const containerClassName = style.container + " " + (props.isHome? style.containerHome : style.containerBlog);

    return (
        <>
            <div className={style.header}>
                <Link className={style.headerLink} to="/">
                    <img className={style.headerLogo} src="/images/logo_notext_transparent.png" alt="p3go.com logo" />
                    <span className={style.headerSiteName}>p3go.com</span>
                </Link>
            </div>
            <div className={containerClassName}>
                <div className={style.content}>
                    {props.children}
                </div>
            </div>
            <Footer title={props.title}/>
        </>
      )
}

export const Head = (props: any) => <title>p3go.com | {props?.data?.mdx?.frontmatter?.title ?? ''} </title>

export default Layout
