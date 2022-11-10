import React from "react";
import "../styles/Registration.css";

function Registration() {
	return (
		<div class="box" id="r-box">
			<form autocomplete="off" id="my-login-form">
				<h2 id="h2-login-form">Sign Up to HotelPlus</h2>
				<div class="main-user-info">
					<div class="inputBox">
						<input
							required="required"
							id="login-input"
							type="text"
							name="email"
							// value={user.email}
							// onChange={onChange}
						></input>
						<span>Full Name</span>
						<i></i>
					</div>
					<div class="inputBox">
						<input
							required="required"
							id="login-input"
							type="text"
							name="email"
							// value={user.email}
							// onChange={onChange}
						></input>
						<span>Enter User Name</span>
						<i></i>
					</div>
					<div class="inputBox">
						<input
							required="required"
							id="login-input"
							type="text"
							name="email"
							// value={user.email}
							// onChange={onChange}
						></input>
						<span>Enter Email</span>
						<i></i>
					</div>
					<div class="inputBox">
						<input
							required="required"
							id="login-input"
							type="text"
							name="email"
							// value={user.email}
							// onChange={onChange}
						></input>
						<span>Phone Number</span>
						<i></i>
					</div>

					<div class="inputBox">
						<input
							type="password"
							required="required"
							id="login-input"
							name="password"
							// value={user.password}
							// onChange={onChange}
						></input>
						<span>Password</span>
						<i></i>
					</div>

					<div class="inputBox">
						<input
							type="password"
							required="required"
							id="login-input"
							name="password"
							// value={user.password}
							// onChange={onChange}
						></input>
						<span>Confirm Password</span>
						<i></i>
					</div>
				</div>
				<div class="gender-details-box">
					<h2 id="h2-login-formr">Gender</h2>

					<div class="gender-category">
						<input type="radio" name="gender" id="male" />
						<label for="male">Male</label>
						<input type="radio" name="gender" id="female" />
						<label for="female">Female</label>
						<input type="radio" name="gender" id="other" />
						<label for="other">Other</label>
					</div>
				</div>
				<input type="submit" value="Register" id="login-input"></input>
			</form>
		</div>
	);
}

export default Registration;
