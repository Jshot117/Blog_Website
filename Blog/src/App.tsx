import './App.css'
import BlogHeader from './components/BlogHeader'
import BlogCard from './components/BlogCard'

function App() {

  return (
    <>
      <BlogHeader title={'Jonnathans Blog'} links={[{ "name": "Instagram", "url": "https://www.instagram.com/jonn_ig/" },
      { "name": "linkedIn", "url": "https://www.linkedin.com/in/jonnathan-saavedra/" },
      { "name": "Personal Portfolio", "url": "https://jshot117.github.io/Portfolio_Website/" }]} />
      <BlogCard title = {"My First Blog Post"} link = {{"name": "Read More", "url": "https://jshot117.github.io/Portfolio_Website/"}} description = {"This is my first blog post. I am excited to share my thoughts with you."} />
    </>
  )
}

export default App
