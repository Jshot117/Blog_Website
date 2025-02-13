import React from 'react'
import BlogCard from '../components/BlogCard'
import BlogHeader from '../components/BlogHeader'
import NewsLetter from '../components/NewsLetter';


const HomePage: React.FC = () => {
    const blogs = [
        {
            title: "How I got Capital One",
            link: { name: "Read More", url: "/HowIgotCapitalOne" },
            description: "I want to write about what I did to get myself in this fortunate position ( The position being, landing a internship at Capital One for Software Engineering ). This blog post will be especially interesting for those who are looking for a Software engineering internship and are currently in a position of wanting to make themselves a competitive candidate for these roles.",
            date: "2/12/2025"
        },
        {
            title: "My First Blog Post",
            link: { name: "Read More", url: "/MyFirstBlog" },
            description: "Hi, my name is Jonnathan. I am very excited to write because this is, as you probably read in the title, my first blog post. Moving to the content, my idea with my first blog post is to speak about my experience creating this blog. To keep it organized, I will be dividing it into sections. The first section will speak about why I started a blog. The second section will speak about my plan for the blog and how I accomplished it. The last section will speak about the problems I faced and hopefully provide some helpful insights into solving problems you might face when creating a blog.",
            date: "7/14/2024"
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
                <NewsLetter />
            </div>
        </>
    )
}

export default HomePage;