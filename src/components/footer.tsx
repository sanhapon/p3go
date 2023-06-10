import * as React from 'react'
import * as style from './footer.module.css'
import FooterTopicLinks from './footerTopicLinks';
import { Link } from 'gatsby';

const Footer = (props: {title: string}) => {
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
                        </span>
                    </div>
                </div>
            </div>
            <FooterTopicLinks title={props.title}></FooterTopicLinks>
        </>
    );
}

export default Footer
