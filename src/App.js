import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AnimatedSolids from './pages/AnimatedSolids';
import CurvyBg from './pages/CurvyBg';
import WaveBg from './pages/WaveBg';
import AnimeJS from './pages/AnimeJS';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={AnimatedSolids} /> 
          <Route path='/curvybg' Component={CurvyBg} /> 
          <Route path='/wavebg' Component={WaveBg} /> 
          <Route path='/animejs' Component={AnimeJS} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App