import React from 'react'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import PageNotFound from './components/PageNotFound'
import Resume from './components/Resume'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='app'>
    
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='skills' element={<Skills />} />
            <Route path='projects' element={<Projects />} />
          </Route>
            <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
