import React, { useState } from 'react'
import './Navbar.css';
import logo from '../../assests/logo (1).png'
import { Link, useNavigate } from 'react-router-dom';
import {FaPowerOff, FaSearch} from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

function Navbar({isScrolled}) {

 const [showSearch, setShowSearch]=useState(false);
 const [inputHover, setInputHover]=useState(false);
 const navigate=useNavigate();

 onAuthStateChanged(firebaseAuth, (currentUser) => {
  if (!currentUser) { navigate("/login")}
})

  return (
    <div className='container5'>
      <nav className={`flex ${isScrolled?"scrolled":""}`}>
        <div className='left flex a-center'>
          <div className='brand flex a-center j-center'>
            <img src={logo} alt='logo'></img>
          </div>
          <ul className='links flex'>
            <li>
              <Link className='Link' to='/'>Home</Link>
            </li>
            <li>
              <Link className='Link' to='/tv'>Tv Shows</Link>
            </li>
            <li>
              <Link className='Link' to='/movies'>Movies</Link>
            </li>
            {/* <li>
              <Link className='Link' to='/mylist'>My List</Link>
            </li> */}
          </ul>
        </div>
        <div className='right flex a-center'>
          <div className={`search ${showSearch?"show-search":""}`}>
            <button onFocus={()=>setShowSearch(true)} onBlur={()=>{
              if(!inputHover) setShowSearch(false);
            }}>
              <FaSearch></FaSearch>
            </button>
    <input type='text'placeholder='Search' 
    onMouseEnter={()=>setInputHover(true)}
    onMouseLeave={()=>setInputHover(false)}
    onBlur={()=>{
      setShowSearch(false);
      setInputHover(false);
    }}>
    </input>
          </div>
          <button onClick={()=>signOut(firebaseAuth)} onChange={onAuthStateChanged}>
            <FaPowerOff/>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
