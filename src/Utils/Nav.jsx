import React from 'react'
import '../style/Nav.css'
import { Link } from 'react-router-dom'
export const Nav = () => {
  return (
    <div className='nav-container'>

        <div className='nav-logo'></div>
    <h1 className='nav-heading'>Diverse Enable</h1>
    <Link to='/' className='linkstyle'>
    <div className='nav-item'>Home</div>
    </Link>
    <div className='nav-item'>Explore</div>
    <div className='nav-item'>Services</div>
    <div className='nav-item'>Community</div>
    <div className='nav-item'>Resources</div>
    <Link to='/signup' className='linkstyle'>
    <div >Sign up</div>
    </Link>
    <Link to='/signin' className='linkstyle'>
    <div >Sign in</div>
    </Link>

    
    </div>
  )
}
