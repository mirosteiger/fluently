import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  heading,
  siteTitle,
  loginButton,
  //@ts-ignore-next-line
} from "./layout.module.css";

const Layout = ({ pageTitle, children }: any) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return (
    <div className={container}>
      <header className={siteTitle}>
        {data.site.siteMetadata.title}
        <Link to="/app/login">
          <button className={loginButton}>Login</button>
        </Link>
      </header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
