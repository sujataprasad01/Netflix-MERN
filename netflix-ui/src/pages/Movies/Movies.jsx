import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../../store';
import './Movies.css'
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import NotAvailabel from '../../components/NotAvailabel/NotAvailabel';
import SelectGenres from '../../components/SelectGenres/SelectGenres';
function Movies() {

  const [isScrolled, setIsScrolled]=useState(false)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const genresLoaded=useSelector((state)=>state.netflix.genresLoaded);
  const movies=useSelector((state)=>state.netflix.movies);
  const genres=useSelector((state)=>state.netflix.genres);

  useEffect(()=>{
    dispatch(getGenres());
  })

  useEffect(()=>{
    if(genresLoaded) dispatch(fetchMovies({type:"movies"}))
  }, [genresLoaded])

  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0?false:true)
    return()=> window.onscroll=null;                           
  };

  return (
    <div className='container11'>
      <div className='navbar'>
        <Navbar isScrolled={isScrolled}></Navbar>
      </div>
      <div className='data'>
      <SelectGenres genres={genres} type='movie'></SelectGenres>
        {
          movies.length?<Slider movies={movies}></Slider> :
          <NotAvailabel></NotAvailabel>
        }
      </div>
    </div>
  )
}

export default Movies
