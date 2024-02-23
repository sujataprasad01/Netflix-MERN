import React, { useState } from 'react'
import './Card.css';
import { useNavigate } from 'react-router-dom';
// import video from '../../';

function Card({movieData, isLiked=false}) {

    const [isHovered, setIsHovered]=useState(false);
    const navigate=useNavigate();

  return (
    <div className='container9' onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>setIsHovered(false)}>
      <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt=''></img>
      {
        isHovered && (
            <div className='hover'>
                <div className="image-vide-container">
                <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt='' onClick={()=>navigate("/player")}></img>
                <video src='' autoPlay loop muted onClick={()=>navigate("/player")}></video>
                </div>
                <div className="info-container">
                    
                </div>
            </div>
        )
      }
    </div>
  )
}

export default Card
