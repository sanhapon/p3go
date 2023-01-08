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
            <div className={style.footerAbout}>
                <div>
                    logo
                </div>
                <div>
                    Term and condition
                </div>
                <div>
                    Privacy Policy
                </div>
                <div>
                    Contact addreess (email)
                </div>
                <div>
                    Links
                </div>            
            </div>
            <div>
                <ul>
                    {data.allMdx.nodes.map(item =>
                        <li key={item.id}>
                            <Link to={`/blog/${item.frontmatter.slug}`}>
                                    {item.frontmatter.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

        </>
    );
}

export default Footer
