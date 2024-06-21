import React from 'react';

// Define the type for the props
interface BlogHeaderProps {
    title: string;
    links: { name: string; url: string }[];
}

// BlogHeader component
const BlogHeader: React.FC<BlogHeaderProps> = ({ title, links }) => {
    return (
        <header className="bg-gray-500 flex-col text-center p-2">
            <h1 className="m-0 font-bold text-3xl">{title}</h1>
            <nav>
                <ul className="list-none p-0 flex justify-center gap-4">
                    {links.map((link, index) => (
                        <li key={index} className="m-0 text-white text-l hover:scale-110 transform duration-200">
                            <a href={link.url} >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default BlogHeader;
