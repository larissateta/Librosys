import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Register from './pages/RegisterStudent'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import BookRegister from './pages/Bookregister'
import Transactions from './pages/Transactions'
import Books from './pages/Books'
import Students from './pages/Students'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path='/bookRegister' element={<BookRegister/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path='/students' element={<Students/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
