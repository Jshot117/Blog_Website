import React from 'react'
import BlogCard from '../components/BlogCard'
import BlogHeader from '../components/BlogHeader'

const HomePage: React.FC = () => {
    const blogs = [
        {
            title: "My First Blog Post",
            link: { name: "Read More", url: "/home/FirstBlog" },
            description: "This is the content of my first blog post. I am excited to share my thoughts with you."
        },
        {
            title: "My Second Blog Post",
            link: { name: "Read More", url: "/home/SecondBlog" },
            description: "This is the content of my second blog post. I am excited to share my thoughts with you."
        },
        {
            title: "My Third Blog Post",
            link: { name: "Read More", url: "/home/ThirdBlog" },
            description: "This is the content of my third blog post. I am excited to share my thoughts with you."
        }
        
    ]

    return (
        <>
            <BlogHeader title={'Jonnathans Blog'} links={[{ "name": "Instagram", "url": "https://www.instagram.com/jonn_ig/" },
            { "name": "linkedIn", "url": "https://www.linkedin.com/in/jonnathan-saavedra/" },
            { "name": "Personal Portfolio", "url": "https://jshot117.github.io/Portfolio_Website/" }]} />
            <div className="grid grid-cols-1">
                {blogs.map((blog, index) => (
                    <BlogCard
                        key={index}
                        title={blog.title}
                        link={blog.link}
                        description={blog.description}
                    />
                ))}
            </div>      
        </>
    )
}

export default HomePage;