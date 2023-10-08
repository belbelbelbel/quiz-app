import React from 'react'
import "../Styles/Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <Link to="/" className='title'> intuitive quiz app</Link>
        <hr className='divider'></hr>
    </div>
  )
}

export default Header