import React from "react";

function LogIn() {
	return (
		<div class="box">
			<form autocomplete="off" id="my-login-form">
				<h2 id="h2-login-form">Sign in to HotelPlus</h2>
				<div class="inputBox">
					<input type="text" required="required" id="login-input"></input>
					<span>Username</span>
					<i></i>
				</div>
				<div class="inputBox">
					<input type="password" required="required" id="login-input"></input>
					<span>Password</span>
					<i></i>
				</div>
				<div class="links">
					<a href>Forgot Password ?</a>
					<a href>Signup</a>
				</div>
				<input type="submit" value="Login" id="login-input"></input>
			</form>
		</div>
	);
}

export default LogIn;
