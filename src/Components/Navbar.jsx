import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      < div className='logo'>
       <span>&lt;/&gt;</span> <strong>Mohan</strong><span className="highlight">Dev</span>
       </div>
      <ul>
       <Link  to='/'><li>Home</li></Link>
       <Link to='/skills'><li>Skills</li></Link>
       <Link to='/project'><li>Projects</li></Link>
       <Link to='/about'><li>About</li></Link>
       <Link to='/contact'><li>Contact</li></Link>
      </ul>
      <button>Resume</button>
    </div>
  )
}

export default Navbar
