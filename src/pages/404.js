import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const NotFoundPage = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
  }, location,
}) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="404: Not Found" />
    <h1>404</h1>
    <p>Oops, looks like what you are looking for does not exist.</p>
  </Layout>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
