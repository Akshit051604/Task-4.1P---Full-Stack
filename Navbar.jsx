import React from 'react'
import './Narbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
      <div className="center">
        <h3> HAIKYU </h3>
      </div>
      <div className="center">
        <input type='text' id='searchbar' placeholder='Search..'></input>
      </div>
      <div className="center">
        <h3> Post </h3>
      </div>
      <div className="center">
        <h3> Login </h3>
      </div>
    </div>
  )
}

export default Navbar
