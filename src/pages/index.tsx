import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/layout";
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo";

const IndexPage = () => {

  return (
    <Layout pageTitle="Fluently">
      <p>Bienvenido bruder</p>
      <StaticImage src="../images/doggo.webp" alt="so n brauner doggo kp"/>
    </Layout>
  );
};

export const Head = () => <Seo title="Fluently" />;

export default IndexPage;
