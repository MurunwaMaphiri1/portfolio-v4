import './index.css';
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ReadList from './pages/readlist';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/books' element={<ReadList/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
