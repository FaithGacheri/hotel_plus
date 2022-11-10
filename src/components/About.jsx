import React from 'react'
import  '../styles/AboutPage.css'
import  '../styles/LogIn.css'
import '../styles/WelcomeSection.css'

function AboutPage() {
return (
<div className='about-page'>

<h2 id='about-heading'>Why You Should Choose Us.</h2>
<p id='about-parags-main'>You Should choose us because we provide the best accomodation and we have sorted all the hotels<br /><p id='about-parags-main-in'>here based on their quality.</p> </p>
<button id = 'zero-all'className='login-btn' >01</button>
<p id='about-parags-head'>We Provide the best choice of hotels for you<br /> to stay.</p>
<p id='about-parags'>We always prioritize customer comfort and<br />satisfaction. That's why we only accept the best hotels</p>
<button id = 'zero-all' className='login-btn'>02</button>
<p id='about-parags-head' >Low price with best quality</p>
<p id='about-parags'>Although the price tends to be cheaper but it will not<br />affect the quality of service, so don't worry</p>
<button id = 'zero-all' className='login-btn'>03</button>
<p id='about-parags-head'>Can refund upto 100%</p>
<p id='about-parags'>Don't worry if suddenly you have a problem and want<br />to do a refund, with us you can get a full refund</p>
{/* <img src="https://i.ibb.co/ccNzfr1/Hotel-Image.jpg" alt='hotel' id='about-hotel-img'></img> */}
  <div class="about-hotel-img">
    <img src="https://i.ibb.co/ccNzfr1/Hotel-Image.jpg" class="img" alt=""></img>
</div>

</div>

)
}

export default AboutPage


