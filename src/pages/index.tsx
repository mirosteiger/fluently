import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Fluently">
      <Link to="/about">About 😘</Link>
      <p>I'm making this to grind my spanish skillz.</p>
    </Layout>
  );
};

export const Head = () => <title>Fluently</title>;

export default IndexPage;
