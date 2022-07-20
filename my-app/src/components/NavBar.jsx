import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar({setIsAuth}) {
  return (
    <nav>
    <div className="nav-wrapper blue">
      <Link to ="/" className="brand-logo" > Home </Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/login">login</Link></li>
        <li><Link to="/signup">signup</Link></li>
        <li>
            <button className="btn gry" onClick={() =>{ 
              localStorage.clear()
              setIsAuth(false)
              }}>logout</button>
        </li>
      </ul>
    </div>
  </nav>
  )
}
