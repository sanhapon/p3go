import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Frontmatter } from '../model/blogData';

import * as style from './footer.module.css'

interface Data {
    allMdx: AllMdx;
}

interface AllMdx {
    nodes: Node[];
}

interface Node {
    id: string;
    frontmatter: Frontmatter;
}
const Footer = (props: {category: string}) => {
    const data : Data = useStaticQuery(graphql`
        query FooterQuery {
            allMdx {
                nodes {
                    id
                    frontmatter {
                        slug
                        title
                    }
                }
            }
        }
    `)

    return (
        <>
            <div className={style.footerContainer}>
                <div className={style.footerWrapper}>
                    <div className={style.footerLogo}>
                        <img
                            src="/images/logo_transparent.png" alt="p3go logo"></img>
                    </div>
                    <div className={style.footerLinkPanel}>
                        <ul>
                            <li>Term and condition</li>
                            <li>Privacy Policy</li>
                            <li>About us</li>
                        </ul>
                        <span>
                            Contact address: sanhapon@yahoo.com
                        </span>
                    </div>
                </div>
            </div>
            {/* <div>
                <ul>
                    {data.allMdx.nodes.map(item =>
                        <li key={item.id}>
                            <Link to={`/blog/${item.frontmatter.slug}`}>
                                    {item.frontmatter.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </div> */}

        </>
    );
}

export default Footer
