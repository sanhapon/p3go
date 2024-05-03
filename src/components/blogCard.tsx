import * as React from "react"
import { BlogData } from "../model/blogData"

import * as style from './blogCard.module.css';
import { Link } from "gatsby";

const BlogCard = (props: { data : BlogData, index: number }) => {
    const pic = props.data.frontmatter.mainPicture ?? `../../images/default/unsplash-${(props.index % 7) + 1}.jpg`;

    return (
        <article key={props.data.id} className={style.article}>
            <img className={style.picture} src={pic} alt={props.data.frontmatter.title}></img>
            <span className={style.excerpt}>
                {props.data.excerpt}
            </span>
            <Link to={`/blog/${props.data.frontmatter.slug}`}>
                <span className={style.more}>More ...</span>
            </Link>
        </article>
    )
}

export default BlogCard;
  