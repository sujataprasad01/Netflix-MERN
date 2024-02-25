import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import './Netflix.css'
import backgroundImage from '../../assests/home.jpg';
import movieLogo from '../../assests/homeTitle.webp';
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../../store';
import Slider from '../../components/Slider/Slider';

function Netflix() {

  const [isScrolled, setIsScrolled]=useState(false)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const genresLoaded=useSelector((state)=>state.netflix.genresLoaded);
  const movies=useSelector((state)=>state.netflix.movies);

  useEffect(()=>{
    dispatch(getGenres());
  })

  useEffect(()=>{
    if(genresLoaded) dispatch(fetchMovies({type:"all"}))
  },[genresLoaded])

  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0?false:true)
    return()=> window.onscroll=null;                           
  };

  console.log(movies);

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
    <Slider movies={movies}></Slider>
    </>
  )
}

export default Netflix
