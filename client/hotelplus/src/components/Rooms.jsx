import React from 'react'
import '../styles/Room.css'
import Room from './Room'
import rooms from './roomdata.js'




function Rooms() {
  console.log(rooms)
  return(
    <div className='rooms'>

      <h1>The Best Hotel Rooms for you</h1>
     <div className='par' >This are some of the hotels we highly recommend for you. We guarantee the quality of the services, the food, the hotel area and various other aspects.</div >
     <div id='room-container'>
        {rooms.map((room) =>{
          return(
           <Room id={room.id} image={room.image}  description={room.description} perNightPrice={room.description} />
          )
        })
        }
      </div>
    </div>
  )
  
}

export default Rooms