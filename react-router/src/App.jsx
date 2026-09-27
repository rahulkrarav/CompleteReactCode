import React from 'react'
import Home from './assets/Components/Home'
import About from './assets/Components/About'
import Contact from './assets/Components/Contact'
import NavBar from './assets/Components/NavBar'
import { Route, Routes} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1>Welcome to Routing!</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  )
}
