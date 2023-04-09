
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Crafts_Index from './pages/Crafts_Index';
import Recipes from './pages/Recipe_Index';

const App = () => {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/crafts' component={Crafts_Index} />
        <Route path='/recipes' component={Recipes} />
      </Routes>
   
    </>
   );
  }

export default App;
