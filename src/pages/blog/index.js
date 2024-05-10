import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id}>
            <Link to = {`${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
