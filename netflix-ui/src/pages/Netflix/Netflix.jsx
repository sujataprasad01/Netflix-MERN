import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import './Netflix.css'
import backgroundImage from '../../assests/home.jpg';
import movieLogo from '../../assests/homeTitle.webp';
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function Netflix() {

  const [isScrolled, setIsScrolled]=useState(false)

  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0?false:true)
    return()=> window.onscroll=null;                           
  };

  const navigate=useNavigate();
  
  return (
    <>
    <Navbar isScrolled={isScrolled}></Navbar>
    <div className='container6'>
      <div className='hero'>
        <img src={backgroundImage} alt='background' className='background-image'></img>
        <div className='containerr'>
          <div className='logo'>
            <img src={movieLogo} alt='movie logo'></img>
          </div>
          <div className='buttons flex'>
            <button className='flex j-center a-center' onClick={()=>{navigate('/player')}}>
              <FaPlay/>Play
            </button>
            <button className='flex j-center a-center'>
              <AiOutlineInfoCircle/>More Info
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Netflix
