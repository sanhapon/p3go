import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Frontmatter } from '../model/blogData';

import * as style from './footerTopicLinks.module.css'

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
const FooterTopicLinks = (props: {title: string}) => {
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
        <div className={style.topicPanel}>
            <span className={style.footerLinksTopic}>เรื่องอื่นๆ ที่น่าสนใจ</span>
            <div className={style.footerLinksWrapper1}>
                <div className={style.footerLinksWrapper2}>
                    {data.allMdx.nodes.map(item =>
                        { return item.frontmatter.title !== props.title && 
                            <Link  className={style.footerLink} to={`/blog/${item.frontmatter.slug}`}>
                                {item.frontmatter.title}
                            </Link>
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

export default FooterTopicLinks
