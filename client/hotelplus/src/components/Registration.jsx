import React from "react";
import "../styles/Registration.css";

function Registration() {
	const [user, setUser] = React.useState({
		fullName: "",
		userName: "",
		email: "",
		phoneNumber: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const registerUser = (e) => {
		e.preventDefault();
		const userAccount = {
			fullName: user.fullName,
			userName: user.userName,
			email: user.email,
			phoneNumber: user.phoneNumber,
			password: user.password,
			confirmPassword: user.confirmPassword,
			gender: user.gender,
		};

		fetch("http://localhost:7000/users", {
			method: "POST",
			body: JSON.stringify({
				full_name: userAccount.fullName,
				user_name: userAccount.userName,
				email: userAccount.email,
				phone_number: userAccount.phoneNumber,
				password: userAccount.password,
				confirm_password: userAccount.confirmPassword,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		setUser({
			fullName: "",
			userName: "",
			email: "",
			phoneNumber: "",
			password: "",
			confirmPassword: "",
		}).then((res) => {
			if (res.ok) {
				alert("User registered successfully");
			} else {
				throw new Error("Something went wrong");
			}
		});
	};

	return (
		<div class="box" id="r-box">
			<form autocomplete="off" id="my-login-form" onSubmit={registerUser}>
				<h2 id="h2-login-form">Sign Up to HotelPlus</h2>
				<div class="main-user-info">
					<div class="inputBox">
						<input
							required="required"
							id="login-input"
							type="text"
							name="fullName"
							value={user.fullName}
							onChange={onChange}
						></input>
						<span>Full Name</span>
						<i></i>
					</div>
					<div class="inputBox">
						<input
							required="required"
							id="login-input"
							type="text"
							name="userName"
							value={user.userName}
							onChange={onChange}
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
							value={user.email}
							onChange={onChange}
						></input>
						<span>Enter Email</span>
						<i></i>
					</div>
					<div class="inputBox">
						<input
							required="required"
							id="login-input"
							type="number"
							name="phoneNumber"
							value={user.phoneNumber}
							onChange={onChange}
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
							value={user.password}
							onChange={onChange}
						></input>
						<span>Password</span>
						<i></i>
					</div>

					<div class="inputBox">
						<input
							type="password"
							required="required"
							id="login-input"
							name="confirmPassword"
							value={user.confirmPassword}
							onChange={onChange}
						></input>
						<span>Confirm Password</span>
						<i></i>
					</div>
				</div>
				<div class="gender-details-box">
					<h2 id="h2-login-formr">Gender</h2>

					<div class="gender-category">
						<input
							type="radio"
							name="male"
							id="male"
							value={user.gender}
							onChange={onChange}
						/>
						<label for="male">Male</label>
						<input
							type="radio"
							name="female"
							id="female"
							value={user.gender}
							onChange={onChange}
						/>
						<label for="female">Female</label>
						<input
							type="radio"
							name="other"
							id="other"
							value={user.gender}
							onChange={onChange}
						/>
						<label for="other">Other</label>
					</div>
				</div>
				<input type="submit" value="Register" id="login-input"></input>
			</form>
		</div>
	);
}

export default Registration;
