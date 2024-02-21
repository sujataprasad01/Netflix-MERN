import React from 'react'
// import logo from '../../assests/logo(1).png';
import logo from '../../assests/logo (1).png'

import { useNavigate } from 'react-router-dom';
import './Header.css'

function Header(props) {

  const navigate=useNavigate()

  return (
    <div className='container3 flex a-center j-between'>
      <div className='logo'>
      <img src={logo} alt='logo'></img>
      </div>
    <button onClick={()=>{navigate(props.login ? "/login" : "/signup")}}>
     {props.login? "Log In":"Sign In"}
    </button>
    </div>

  )
}

export default Header
