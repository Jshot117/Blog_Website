import React from 'react';

// Define the type for the props
interface BlogHeaderProps {
    title: string;
    links: { name: string; url: string }[];
}

// BlogHeader component
const BlogHeader: React.FC<BlogHeaderProps> = ({ title, links }) => {
    return (
        <header className="bg-cyan-900 flex-col text-center p-2">
            <div className="container mx-auto flex flex-col md:flex-row md:pr-10 md:pl-10 justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Logo"
                        className="mr-4"
                    />
                    <h1 className="text-white font-bold text-3xl">
                        <a href={"/"}>{title}</a>
                    </h1>
                </div>
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
            </div>
        </header>
    );
};

export default BlogHeader;
