import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AnimatedSolids from './pages/AnimatedSolids';
import CurvyBg from './pages/CurvyBg';
import WaveBg from './pages/WaveBg';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={AnimatedSolids} /> 
          <Route path='/curvybg' Component={CurvyBg} /> 
          <Route path='/wavebg' Component={WaveBg} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App