import './App.css'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Route } from 'react-router-dom'
import BlogPost from './pages/BlogPosts'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home/:postId" element={<BlogPost />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
