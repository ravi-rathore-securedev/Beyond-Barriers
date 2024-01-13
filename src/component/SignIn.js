import React from 'react'
import '../style/signin.css'

export const SignIn = () => {
  return (
    <div className='container'>
        <form className='form-container'>
            <div className='logo'></div>
            <div className='title'>Sign In</div>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
            <div className='or'>or</div>
            <button type="submit">Sign In with Google</button>
            <div className='or'>Don't have an account? <a href="/signup">Sign Up</a></div>
        </form>
    </div>
  )
}
