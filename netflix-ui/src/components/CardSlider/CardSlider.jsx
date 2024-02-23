import React, { useRef, useState } from 'react'
import Card from '../Card/Card'
import './CardSlider.css'
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
function CardSlider({data, title}) {

  const [showControl, setShowControl]=useState(false);
  const [sliderPosition, setSliderPosition]=useState(0);
  const listRef=useRef();
  const handleDirection=(direction)=>{
     let distance=listRef.current.getBoundingClientRect().x -70
     if(direction==='left' && sliderPosition>0){
      listRef.current.style.transform=`translateX(${230 +distance}px)`
      setSliderPosition(sliderPosition-1);
     }
     if(direction==='right' && sliderPosition<4){
      listRef.current.style.transform=`translateX(${-230 +distance}px)`
      setSliderPosition(sliderPosition+1);
     }
    };
  return (
    <>
    <div className='container10 flex column' onMouseEnter={()=>setShowControl(true)} onMouseLeave={()=>setShowControl(false)}>
      <h1>{title}</h1>
      <div className='wrapper'>
        <div className={`slider-action left ${!showControl?"none":""} flex j-center a-center`}>
          <AiOutlineLeft onClick={()=>handleDirection("left")}></AiOutlineLeft>
        </div>
    <div className='flex slider' ref={listRef}>
      {
        data.map((movie, index)=>{
          return <Card movieData={movie} index={index} key={movie.id}></Card>
        })
      }
      </div>
      <div className={`slider-action right ${!showControl?"none":""} flex j-center a-center`}>
          <AiOutlineRight onClick={()=>handleDirection("right")}></AiOutlineRight>
        </div>
    </div>
    </div>
    </>
  )
}

export default CardSlider
