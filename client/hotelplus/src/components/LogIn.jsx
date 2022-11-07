import React from 'react'

function LogIn() {
  return (
    <div class="box">
		<form autocomplete="off" id="my-login-form">
      <h1 id='h1-login-form'style={{ color: 'blue'}}>Karibuni to Hotel++!!!</h1>
			<h2 id="h2-login-form">Sign in</h2>
			<div class="inputBox">
				<input type="text" required="required"></input>
				<span>Userame</span>
				<i></i>
			</div>
			<div class="inputBox">
				<input type="password" required="required"></input>
				<span>Password</span>
				<i></i>
			</div>
			<div class="links">
				<a href>Forgot Password ?</a>
				<a href>Signup</a>
			</div>
			<input type="submit" value="Login"></input>
		</form>
	</div>

  )
}

export default LogIn