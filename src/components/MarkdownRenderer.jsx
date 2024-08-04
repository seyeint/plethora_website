import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ContentRenderer = ({ contentPath }) => {
  const [content, setContent] = useState('');
  const isPDF = contentPath.toLowerCase().endsWith('.pdf');

  useEffect(() => {
    if (!isPDF) {
      fetch(`/content/${contentPath}`)
        .then(response => response.text())
        .then(text => setContent(text));
    }
  }, [contentPath, isPDF]);

  if (isPDF) {
    return (
        <div className="pdf-content" style={{
            height: 'calc(100vh - 100px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <iframe
                src={`/content/${contentPath}`}
                width="77%"
                height="100%"
                style={{border: 'none'}}
                title="PDF Viewer"
                allowFullScreen
            />
        </div>
    );
  }

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
                    },
                    img({src, alt}) {
                        return <img src={src} alt={alt} style={{maxWidth: '100%'}} />;
                    },
                    a({node, children, href, ...props}) {
                        return (
                            <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                                {children}
                            </a>
                        )
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default ContentRenderer;