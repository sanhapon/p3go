import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import * as style from './blog.module.css'

const Blog = (props: {excerpt: string, link?: string, picture?: string, pictureAlt?: string}) => {
    return (
       <article>
            {props.picture &&
            <StaticImage
                alt={props.pictureAlt || ''}
                    src={props.picture}
                />
            }
            <p>{props.excerpt}</p>
            {props.link && 
                <Link to={props.link}></Link>
            }
            <hr />
       </article>
    )
}

export default Blog
