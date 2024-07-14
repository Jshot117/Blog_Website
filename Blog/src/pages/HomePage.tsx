import React from 'react'
import BlogCard from '../components/BlogCard'
import BlogHeader from '../components/BlogHeader'

const HomePage: React.FC = () => {
    const blogs = [
    {
        title: "My First Blog Post",
        link: { name: "Read More", url: "/MyFirstBlog" },
        description: "My first blog post I want to be my an introduction to myself and my expereince creating my blog. ",
        date: "6/23/2024"
    },
    ]

    return (
        <>
            <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                <BlogHeader title={"Jonnathan's Blog"} links={[
                    { "name": "linkedIn", "url": "https://www.linkedin.com/in/jonnathan-saavedra/" },
                    { "name": "Personal Portfolio", "url": "https://jshot117.github.io/Portfolio_Website/" }]} />
                <div className="grid grid-cols-1">
                    {blogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            title={blog.title}
                            link={blog.link}
                            description={blog.description}
                            date={blog.date}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomePage;