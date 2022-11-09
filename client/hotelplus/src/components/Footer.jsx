import React from 'react'
import '../styles/Footer.css';

function Footer() {
  return (
    <div> <section className="footer">

        <div className='hotel'>
           <h2 id='intro'> HOTELPLUS</h2>
           <p id='paragraph'>The best booking platform in the world</p>
           
           <a href="/" class="fa fa-facebook" id='footerlogo'></a>
           <a href="/" class="fa fa-twitter" id='footerlogo'></a>
           <a href="/" class="fa fa-whatsapp" id='footerlogo'></a>
        </div>

        {/* <RiTwitterLine/> */}
<section className="room-det">
<ul>
<li><h3 id='details'>Rooms</h3></li>
<li><a href="/">Standard</a></li>
<li><a href="/">Deluxe</a></li>
<li><a href="/">Family</a></li>
</ul>
</section >

<section className="resource">
<ul>
<li><h3 id='details'>Resources</h3></li>
<li><a href="/">Help Center</a></li>
<li><a href="/">Guides</a></li>
<li><a href="/">Partner Network</a></li>
<li><a href="/">Developers</a></li>
</ul>
</section >

<section className="co">
<ul>
<li><h3 id='details'>company</h3></li>
<li><a href="/">About Us</a></li>
<li><a href="/">Testimonials</a></li>
<li><a href="/">Terms of Service</a></li>
<li><a href="/">Privacy Policy</a></li>
<li><a href="/">Cookie Policy</a></li>
</ul>
</section >

<section className="news">
<ul>
<li><h3 id='details'>Newsletter</h3></li>
<li><a href="/">Subscribe and get the latest updates</a></li>
<input id='email' type="text" 

placeholder="Enter your email"/>

<button id='submit' type="Submit">Submit</button>


</ul>
</section >
</section >

<p id='right'>2022-Designed and Developed by Hotelplus</p>
</div>



    
  )
}

export default Footer