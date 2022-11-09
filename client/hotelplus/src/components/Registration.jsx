import React from 'react'
import '../styles/Registration.css'

function Registration() {
  return (
    <div class="container">
    <h1 class="form-title">Hotel+ Registration</h1>
    <form action="#">
      <div class="main-user-info">
        <div class="user-input-box">
          {/* <!-- start first name --> */}
          <label for="fullName">Full Name</label>
          <input type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Full Name"/>
        </div>
        {/* <!-- end first name -->
         <!-- username section --> */}
        <div class="user-input-box">
          <label for="username">Username</label>
          <input type="text"
                  id="username"
                  name="username"
                  placeholder="Enter Username"/>
        </div>
        {/* <!-- end username section -->
        <!-- start email section  --> */}
        <div class="user-input-box">
          <label for="email">Email</label>
          <input type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"/>
        </div>
        {/* <!-- end email section -->
        <!-- start phoneNumber section --> */}
        <div class="user-input-box">
          <label for="phoneNumber">Phone Number</label>
          <input type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"/>
        </div>
        {/* <!-- end phoneNumber section -->
        <!-- start password section --> */}
        <div class="user-input-box">
          <label for="password">Password</label>
          <input type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"/>
        </div>
        {/* <!-- end password section -->
        <!-- continue password confirmPassword --> */}
        <div class="user-input-box">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"/>
        </div>
         {/* <!-- end continue password confirmPassword --> */}
       </div>
       <div class="gender-details-box">
        <span class="gender-title">Gender</span>
        <div class="gender-category">
          <input type="radio" name="gender" id="male"/>
          <label for="male">Male</label>
          <input type="radio" name="gender" id="female"/>
          <label for="female">Female</label>
          <input type="radio" name="gender" id="other"/>
          <label for="other">Other</label>
        </div>
       </div>
      {/* <!-- gender part wadau --> */}
      <div class="form-submit-btn">
        <input type="submit" value="Register"/>
      </div>
       {/* <!-- end gender--> */}
    </form>
  </div>
 
 
)
  
      
      
}

export default Registration