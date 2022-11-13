import React from "react";
import "../styles/Room.css";
import "../styles/WelcomeSection.css";
import Room from "./Room";

function Rooms() {
	const [rooms, setRooms] = React.useState([]);
	React.useEffect(() => {
		getAllRooms();
	}, []);

	const getAllRooms = async () => {
		try {
			const res = await fetch("http://localhost:7000/hotels");
			const data = await res.json();
			setRooms(data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="rooms">
			<h1>The Best Hotel Rooms for you</h1>
			<div className="par">
				This are some of the hotels we highly recommend for you. We guarantee
				the quality of the services, the food, the hotel area and various other
				aspects.
			</div>
			<div id="room-container">
				{rooms.map((room) => {
					return (
						<Room
							id={room.id}
							image={room.image_url}
							description={room.description}
							perNightPrice={room.description}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Rooms;
