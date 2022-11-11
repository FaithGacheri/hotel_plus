import React from 'react'
import '../styles/Room.css'


function Room({id,image,description,perNightPrice}) {
  return (
    <div className='room' key={id} >
        <img src={image} alt="room" />
        <h5>{description}</h5>
        <p>starts from Ksh {perNightPrice}/night</p>
        <button>Book Now</button>
        
    </div>
    
    
  )
}

export default Room