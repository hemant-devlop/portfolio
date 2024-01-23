import React from 'react'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='app'>
    <Router>
    <NavbarComponent/>
      <Routes>
        <Route path='/about' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
