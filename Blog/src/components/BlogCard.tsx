import React from 'react';

interface BlogCardProps {
    title: string;
    link: { name: string, url: string };
    description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, link, description }) => {
    return (
        <div className="mr-48 ml-48 mb-10 mt-10 border-4 ">
            <div className="flex-col text-center mb-5 mt-5">
                <h2 className="ml-1 text-left font-bold">{title}</h2>
                <p>{description}</p>
                <div className="text-blue-900">
                    <a href={link.url}>{link.name}</a>
                </div>
            </div>
        </div>
    )
}
export default BlogCard;