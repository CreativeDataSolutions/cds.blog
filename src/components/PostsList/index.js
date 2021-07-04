import React from 'react';
import { Link } from "gatsby"
import Tags from '../Tags';
import getPrefixedPath from "../../getPrefixedPath"
import './style.scss';

const PostsList = ({ posts }) => (
  <ul className="posts__container">
    {posts.map(({
      node: {
        frontmatter: { thumbnail, tags, title },
        fields: { slug },
        excerpt,
      },
    }) => (
      <li>
        <Link to={slug}>
          <article className="posts__article">
            <div
              className="posts__thumbnail"
              style={{ backgroundImage: `url(${getPrefixedPath(thumbnail)}` }}
            />
            <div>
              <h2 className="posts__title">{title}</h2>
              <p>{excerpt}</p>
              <Tags tags={tags} />
            </div>
          </article>
          </Link>
      </li>
    ))}
  </ul>
);

export default PostsList;
