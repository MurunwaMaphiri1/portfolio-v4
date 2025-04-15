import './index.css';
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Resume from './pages/resume';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/resume/' element={<Resume/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
