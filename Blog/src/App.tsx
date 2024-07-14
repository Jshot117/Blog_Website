import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPosts';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/:postId" element={<BlogPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
