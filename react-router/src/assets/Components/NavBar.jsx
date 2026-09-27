import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      {/* <a href=""></a> */}
      <Link to="/">Home</Link><br />
      <Link to="/about">About</Link><br />
      <Link to="/contact">Contact</Link><br />
    </div>
  )
}
