import React from 'react';

interface BlogCardProps {
    title: string;
    link: { name : string , url : string };
    description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({title, link, description }) => {
    return (
        <div className = "">
            <div className = "flex-col text-center">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href = {link.url}>{link.name}</a>
            </div>  
        </div>
    )
}
export default BlogCard;