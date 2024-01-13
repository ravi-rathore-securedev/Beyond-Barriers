import React from 'react'
import '../style/Home.css'
import { Link } from 'react-router-dom'



export const Test = () => {
  return (
    <div className="home-container">
        test
        <div className="home-header">

    <header  data-thq="thq-navbar" className="home-navbar-interactive">

    <span className="home-logo">BEYOND BARRIERS</span>

    <div data-thq="thq-navbar-nav" className="home-desktop-menu">

        <nav className="home-links">
        {/* <Link  className="home-nav1">
                About
              </Link> */}
        </nav>
    </div>
    </header>
        </div>
    </div>
  )
}
