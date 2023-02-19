import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/layout";
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Fluently">
      <Link to="/about">About 😘</Link>
      <p>I'm making this to grind my spanish skillz.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/doggo.webp"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="Fluently" />;

export default IndexPage;
