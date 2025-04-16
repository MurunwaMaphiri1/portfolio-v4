import './index.css';
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ReadList from './pages/readlist';
import Blog from './pages/blog';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/books' element={<ReadList/>}/>
          <Route path='/blogs' element={<Blog/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
