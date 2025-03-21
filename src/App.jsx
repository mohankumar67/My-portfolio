import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Product from './Pages/Skills'
import { Routes, Route } from 'react-router-dom'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Project from './Pages/Project'
const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
