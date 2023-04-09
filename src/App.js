
import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Crafts from './pages/Crafts_Index'
import Recipes from './pages/Recipe_Index'
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/crafts' component={Crafts} />
        <Route path='/recipes' component={Recipes} />
      </Routes>
    </Router>
    </>
   );
  }

export default App;
