import React from 'react'
import Card from '../Card/Card'

function CardSlider({data, title}) {
  return (
    <div>
      {
        data.map((movie, index)=>{
            return <Card movieData={movie} index={index} key={movie.id}></Card>
        })
      }
    </div>
  )
}

export default CardSlider
