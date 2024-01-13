import React from 'react'

import '../style/signin.css'
import { Link } from 'react-router-dom'
export const SignIn = () => {
  return (
    <div className='mains'>
    <div className='container'>
        <form className='form-container'>
            <div className='logo'></div>
            <div className='titles'>Sign In</div>
            <input type="text" placeholder="email" className='inputs' />
            <input type="password" placeholder="Password" className='inputs' />
            <button type="submit" className='buttons'>Sign In</button>
            <div className='or'>or</div>
            <button type="submit" className='buttons'>Sign In with Google</button>
            <div className='or'>Don't have an account?
            <Link to='/signup'>Sign Up</Link>
             </div>
        </form>
    </div>
</div>
  )
}
