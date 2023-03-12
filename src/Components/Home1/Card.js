import React from 'react'
import "./Connecting.css"

function Card({anime}) {
  return (
    <div className='card'>
        <div className='upcoming-img' style={{ backgroundImage: `url(${anime.topImage})` }}>
        <div style={{ color:'anime.color'}} className="name1">{anime.name}</div>
        </div>
        
    </div>
  )
}

export default Card