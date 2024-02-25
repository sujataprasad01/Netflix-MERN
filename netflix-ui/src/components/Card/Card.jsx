import React, { useState } from 'react'
import './Card.css';
import { useNavigate } from 'react-router-dom';
import video from '../../assests/pexels-ilia-devaltovskii-20071909 (1440p).mp4'
import { IoPlayCircleSharp } from 'react-icons/io5'
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri'
import { BsCheck } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase-config';
import axios from 'axios';

function Card({ movieData, isLiked = false }) {

  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail]=useState(undefined)
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  })

  const addToList=async()=>{
    try{
      await axios.post("http://localhost:5000/api/user/add", {email, data:movieData})
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className='container9' onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => setIsHovered(false)}>
      <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt=''></img>
      {
        isHovered && (
          <div className='hover'>
            <div className="image-video-container">
              <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt='' onClick={() => navigate("/player")}></img>
              <video src={video} autoPlay loop muted onClick={() => navigate("/player")}></video>
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
                      (<AiOutlinePlus title='Add to my list' onClick={addToList}></AiOutlinePlus>
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
