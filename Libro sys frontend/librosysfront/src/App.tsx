import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import BookRegister from './pages/Bookregister'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/"  element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path='/bookRegister' element={<BookRegister/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
