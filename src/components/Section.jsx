import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, image, path, description, posts, tags, isPreview = false }) => {
  return isPreview ? (
    <div className="section-item">
      <img alt={title} className="section-item-img" src={image} />
      <h1 className="section-item-title">{title}</h1>
    </div>
  ) : (
    <section className="section">
      <h2>{title}</h2>
      <img src={image} alt={title} className="section-image" />
      <p>{description}</p>
      <div className="tags">
        {tags && tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <h3>Recent Posts</h3>
      <ul className="post-list">
        {posts && posts.map((post) => (
          <li key={post.id}>
            <Link to={`${path}/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section;