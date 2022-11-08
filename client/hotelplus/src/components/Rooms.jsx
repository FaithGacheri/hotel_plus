import React from 'react'
import Room1 from '../components/img/room1.jpg'
import Room2 from '../components/img/room2.jpg'
import Room3 from '../components/img/room3.jpg'
import Room4 from '../components/img/room4.jpg'
import Room5 from '../components/img/room5.jpg'
import Room6 from '../components/img/room6.jpg'
import './Room.css'


function Rooms() {
  return (
    <div className='rooms'>
      <h1>The Best Hotel Rooms for you</h1>
      <div className='p' >This are some of the hotels we highly recommend for you. We guarantee the quality of the services, the food, the hotel area and various other aspects.</div >
      
      <div id='roomContainer'>
        <div className='room'>
          <img src={Room1} alt="Room1" />
          <h5>Java Heritage Hotel Room</h5>
          <p>starts from ksh 15,000/night</p>
          <button>Book Now</button>
        </div>

        <div className='room'>
          <img src={Room2} alt="Room2" />
          <h5>Grand Aston Hotel Room</h5>
          <p>starts from Ksh 25,000/night</p>
          <button>Book Now</button>
        </div>
        
        <div className='room'>
          <img src={Room3} alt="Room3" />
          <h5>Nihi Sumba Resort Room</h5>
          <p>starts from Ksh 22,000/night</p>
          <button>Book Now</button>
          </div>
          </div>

          <div id='roomContainer'>

        <div className='room'>
          <img src={Room4} alt="Room4" />
          <h5>Yellowstar Hotel Jimbaran Room</h5>
          <p>starts from Ksh 17,000/night</p>
          <button>Book Now</button>
        </div>
        
        <div className='room'>
          <img src={Room5} alt="Room5" />
          <h5>The Alan Hotel Room</h5>
          <p>starts from Ksh 14,000/night</p>
          <button>Book Now</button>
        </div>
        
        <div className='room'>
          <img src={Room6} alt="Room6" />
          <h5>Masai Mara Hotel Room</h5>
          <p>starts from Ksh 20,000/night</p>
          <button>Book Now</button>
        </div>

      </div>
    </div>
  )
}

export default Rooms