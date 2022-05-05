import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import {Home} from "./components/Home"
import { Tododetails } from './components/tododetails' 
import { Navbar } from './components/Navbar'
function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/todo/:id' element = {<Tododetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App
