import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import AnotherPage from './components/AnotherPage';

function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/another" element={<AnotherPage />}/>
        </Routes>
      </Router>
  
    </>
   
  )
}

export default App
