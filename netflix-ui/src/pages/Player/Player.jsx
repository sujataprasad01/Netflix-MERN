import React from 'react'
import {BsArrowLeft} from 'react-icons/bs';
// import video from '../../';
import { useNavigate } from 'react-router-dom';

function Player() {
const navigate=useNavigate()

  return (
    <div className='container7'>
      <div className="player">
        <div className="back">
            <BsArrowLeft onClick={()=>navigate(-1)}></BsArrowLeft>
        </div>
        <video src={''} autoplay loop controls muted></video>
      </div>
    </div>
  )
}

export default Player
