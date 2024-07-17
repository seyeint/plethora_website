import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MarkdownRenderer = ({ contentPath }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/content/${contentPath}`)
      .then(response => response.text())
      .then(text => setContent(text));
  }, [contentPath]);

  return (
    <div className="markdown-content">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={tomorrow}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;