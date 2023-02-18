import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node: any) => (
        <article key={node.id}>
          <Link to={`/blog/${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt(pruneLength: 30)
      }
    }
  }
`;
export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
