import React from "react";

function Booking() {
	const [book, setBooking] = React.useState({
		username: "",
		email: "",
    description: ""
	});
	const onChange = (e) => {
		setBooking({ ...book, [e.target.name]: e.target.value });
	};

	const Book = (e) => {
		e.preventDefault();
		const booking = {
			username: book.username,
			email: book.email,
      description: book.description
		};
		setBooking({
			username: "",
			email: "",
      description: ""
		});
		console.log(booking);
	};
	return (
		<div class="box">
			<form autocomplete="off" id="my-booking-form" onSubmit={Book}>
				<h2 id="h2-login-form">Make a booking</h2>
				<div class="inputBox">
					<input
						required="required"
						id="booking-input"
						type="text"
						name="username"
						value={book.username}
						onChange={onChange}
					></input>
					<span>Username</span>
					<i></i>
				</div>
				<div class="inputBox">
					<input
						type="email"
						required="required"
						id="booking-input"
						name="email"
						value={book.email}
						onChange={onChange}
					></input>
					<span>email</span>
					<i></i>
				</div>
        <div class="inputBox">
					<input
						required="required"
						id="booking-input"
						type="text"
						name="description"
						value={book.description}
						onChange={onChange}
					></input>
					<span>Description</span>
					<i></i>
				</div>
				
				<input type="submit" value="book now" id="booking-input"></input>
			</form>
		</div>
	);
}

export default Booking;