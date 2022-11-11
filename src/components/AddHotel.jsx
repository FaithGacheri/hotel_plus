import React from "react";
import '../styles/AddHotel.css'


function AddHotel() {
	const [addHotel, setAddHotel] = React.useState({
		image_ur: "",
		name: "",
        location: "",
        description: ""
	});
	const onChange = (e) => {
		setAddHotel({ ...addHotel, [e.target.name]: e.target.value });
	};

	const myHotel = (e) => {
		e.preventDefault();
		const addMyHotel = {
			image_ur: addHotel.image_ur,
			name: addHotel.name,
            location: addHotel.location,
            description: addHotel.description
		};
		setAddHotel({
			image_ur: "",
			name: "",
            location: "",
            description: ""
		});
		console.log(addMyHotel);
	};
	return (
		<div class="box">
			<form autocomplete="off" id="add-hotel-form" onSubmit={myHotel}>
				<h2 id="h2-add-hotel-form">Add my Hotel</h2>
				<div class="inputBox">
					<input
						required="required"
						id="add-hotel-input"
						type="text"
						name="image_ur"
						value={addHotel.image_ur}
						onChange={onChange}
					></input>
					<span>Image URL</span>
					<i></i>
				</div>
				<div class="inputBox">
					<input
						type="name"
						required="required"
						id="add-hotel-input"
						name="name"
						value={addHotel.name}
						onChange={onChange}
					></input>
					<span>name</span>
					<i></i>
				</div>
                <div class="inputBox">
					<input
						type="location"
						required="required"
						id="add-hotel-input"
						name="location"
						value={addHotel.location}
						onChange={onChange}
					></input>
					<span>Location</span>
					<i></i>
				</div>
                <div class="inputBox">
					<input
						type="description"
						required="required"
						id="add-hotel-input"
						name="description"
						value={addHotel.description}
						onChange={onChange}
					></input>
					<span>Description</span>
					<i></i>
				</div>
				
				<input type="submit" value="Add My Hotel" id="add-hotel-input"></input>
                {/* <button>Add My Hotel</button> */}
			</form>
		</div>
	);
}

export default AddHotel;