import React, { useState } from 'react'
import './Card.css';
import { useNavigate } from 'react-router-dom';
// import video from '../../';
import { IoPlayCircleSharp } from 'react-icons/io5'
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri'
import { BsCheck } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';

function Card({ movieData, isLiked = false }) {

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='container9' onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => setIsHovered(false)}>
      <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt=''></img>
      {
        isHovered && (
          <div className='hover'>
            <div className="image-video-container">
              <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt='' onClick={() => navigate("/player")}></img>
              <video src='' autoPlay loop muted onClick={() => navigate("/player")}></video>
            </div>
            <div className="info-container flex column">
              <h3 className='name' onClick={() => navigate("/player")}>{movieData.name}</h3>
              <div className='icons flex j-between'>
                <div className='controls flex'>
                  <IoPlayCircleSharp title='play' onClick={() => navigate("/player")}></IoPlayCircleSharp>
                  <RiThumbUpFill title='Like'></RiThumbUpFill>
                  <RiThumbDownFill title='Dislike'></RiThumbDownFill>
                  {
                    isLiked ? (
                      <BsCheck title="Remove From List" />) :
                      (<AiOutlinePlus title='Add to my list'></AiOutlinePlus>
                      )
                  }
                </div>
                <div className="info">
                  <BiChevronDown title="More Info"></BiChevronDown>
                </div>
                <div className="genres flex">
                  <ul className='flex'>{movieData.genres.map((genre)=>
                    <li key={genre}>{genre}</li>
                  )}</ul>
                </div>
              </div>
            </div>
      </div>
            )
      }
    </div>
)
}
export default Card
