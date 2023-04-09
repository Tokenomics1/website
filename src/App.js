import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Crafts_Index from './pages/Crafts_Index'
import './App.css'
// Home Page 

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/Crafts_Index' element={<Crafts_Index />} />
    </Routes>
  </Router>
  <div className="App">
  <header className="App-header">
    
    <a
      className="App-link"
      
      target="_blank"
      rel="noopener noreferrer"
    >
      Welcome to Tokenomics
      
  
    </a>

  </header>
</div>
</>
  );
}

export default App;
