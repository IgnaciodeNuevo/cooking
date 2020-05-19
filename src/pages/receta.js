import React from 'react';
import {graphql} from 'gatsby';

import Layout from "../components/layout"

export default ({data}) => {
  const post = data.markdownRemark;
  const htmlContent = {__html: post.html};

  return (
      <Layout>
        <div dangerouslySetInnerHTML={htmlContent} />
      </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
    }
  }
`;
