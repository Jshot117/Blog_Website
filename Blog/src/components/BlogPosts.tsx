import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = {
    FirstBlog: {
        title: "My First Blog Post",
        content: "this is a test content for my first blog post but ideally it is going to be very large so i will probably need to use a text file to store it and bring it in"
    },
    SecondBlog: {
        title: "My Second Blog Post",
        content: "this is a second test content for my second blog post but ideally it is going to be very large so i will probably need to use a text file to store it and bring it in"
    },
}

const BlogPost: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const blogPost = blogPosts[postId as keyof typeof blogPosts];

    if (!blogPost) {
        return <div>Blog post not found</div>
    }

    return (
        <div>
            <h1>
                {blogPost.title}
            </h1>
            <p>{blogPost.content}</p>
        </div>
    )
}

export default BlogPost;