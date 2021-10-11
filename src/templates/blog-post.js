import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostsGrid from '../components/PostsGrid';

import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import config from "../../gatsby-config"
// import getPrefixedPath from "../getPrefixedPath"


const BlogPostTemplate = ({ data, location }) => {
  const {
    markdownRemark: post,
    site: { siteMetadata: { title: siteTitle } },
    previous,
    next,
    more,
  } = data;

  const {
    excerpt,
    html,
    frontmatter: {
      title,
      description,
      date,
      tags,
    },
  } = post;

  let disqusConfig = {
    // url: `${config.siteUrl+post.title}`,
    url: "https://creativedatasolutions.github.io/cds.blog/2021-07-1-getting-started-again-final/",
    identifier: post.title,
    title: post.title,
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={title}
        keywords={tags}
        description={description || excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{title}</h1>
          <p>{date}</p>
        </header>
        <section
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
        />
        <CommentCount config={disqusConfig} placeholder={'...'} />
        <Disqus config={disqusConfig} />
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ←
                {' '}
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
                {' '}
                →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <PostsGrid posts={more.nodes} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    more: allMarkdownRemark(
      limit: 3, 
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          thumbnail
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
