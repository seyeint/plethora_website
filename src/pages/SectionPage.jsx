import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import sectionObjects from '../utilities/sectionObjects';
import MarkdownRenderer from '../components/MarkdownRenderer';

const SectionPage = () => {
  const { sectionId, blogId } = useParams();
  const navigate = useNavigate();
  const section = sectionObjects.find(s => s.id === sectionId);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (section) {
      const blog = blogId
        ? section.blogs.find(b => b.id === blogId)
        : section.blogs[0];
      setSelectedBlog(blog);
    }
  }, [section, blogId]);

  if (!section) return <div>Section not found</div>;

  const filteredBlogs = section.blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBlogSelect = (blog) => {
    navigate(`/section/${sectionId}/${blog.id}`);
  };

  return (
    <div className="section-page">
      <div className="sidebar">
        <Link to="/" className="back-button">← Back to Sections</Link>
        <h2>{section.title}</h2>
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <ul>
          {filteredBlogs.map(blog => (
            <li
              key={blog.id}
              onClick={() => handleBlogSelect(blog)}
              className={selectedBlog?.id === blog.id ? 'active' : ''}
            >
              {blog.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        {selectedBlog && (
          <>
            <h1>{selectedBlog.title}</h1>
            <MarkdownRenderer contentPath={selectedBlog.content} />
          </>
        )}
      </div>
    </div>
  );
};

export default SectionPage;