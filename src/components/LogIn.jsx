import React from "react";

function LogIn() {
	const [user, setUserLogin] = React.useState({
		email: "",
		password: "",
	});
	const onChange = (e) => {
		setUserLogin({ ...user, [e.target.name]: e.target.value });
	};

	const loginUser = (e) => {
		e.preventDefault();
		const userAccount = {
			email: user.email,
			password: user.password,
		};
		setUserLogin({
			email: "",
			password: "",
		});
		console.log(userAccount);
	};
	return (
		<div class="box">
			<form autocomplete="off" id="my-login-form" onSubmit={loginUser}>
				<h2 id="h2-login-form">Sign in to HotelPlus</h2>
				<div class="inputBox">
					<input
						required="required"
						id="login-input"
						type="text"
						name="email"
						value={user.email}
						onChange={onChange}
					></input>
					<span>Username</span>
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
