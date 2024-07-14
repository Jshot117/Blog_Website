import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogHeader from '../components/BlogHeader';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';



const BlogPost: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const [markdown, setMarkdown] = useState("");

    fetch(`/blogContent/${postId}.md`)
        .then(res => res.text())
        .then(text => setMarkdown(text))

    return (
        <div>
            <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                <BlogHeader
                    title={"Jonnathan's Blog"}
                    links={[
                        { "name": "linkedIn", "url": "https://www.linkedin.com/in/jonnathan-saavedra/" },
                        { "name": "Personal Portfolio", "url": "https://jshot117.github.io/Portfolio_Website/" }]} />
                <div className="bg-gray-200 m-10 border-4 rounded-lg shadow-lg p-8  max-w-4xl mx-auto min-h-72 flex flex-col justify-between" style={{ width: "90vw" }}>
                    <article className="prose max-w-none prose-hr:border-black prose-pink">
                        <ReactMarkdown children={markdown} className=""
                            components={{
                                pre: "div",  //THIS is needed because prose styles pre tags but not divs
                                code({ node, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    return match ? (
                                        <div className="not-prose"> {/*This gets rid of backtick ?? still unknown why*/}
                                            <SyntaxHighlighter
                                                children={String(children).replace(/\n$/, '')}
                                                style={materialDark}
                                                language={match[1]}
                                                PreTag="div"
                                                {...props}
                                            />
                                        </div>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                }
                            }}
                        />
                    </article>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;