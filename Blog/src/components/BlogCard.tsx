import React from 'react';

interface BlogCardProps {
    title: string;
    link: { name: string, url: string };
    description: string;
    date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, link, description, date }) => {
    return (
        <div className="bg-gray-200 m-10 border-4 rounded-lg shadow-lg p-8  max-w-4xl mx-auto min-h-72 flex flex-col justify-between" style={{ width: "95vw" }}>
            <div className="flex-grow">
                <h2 className="font-bold text-2xl mb-2"><a href={link.url} className="hover:underline text-lg">{title}</a></h2>
                <h3 className="text-lg mb-4">{date}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
            <div className="text-blue-900 mt-4">
                <a href={link.url} className="hover:underline text-lg">{link.name}</a>
            </div>
        </div>
    );
}

export default BlogCard;
