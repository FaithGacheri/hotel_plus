import React from "react";
import MediaCard from "../Card";

function ProfilePage() {
	var colorcode =
		"rgb(" +
		Math.floor(Math.random() * 256) +
		"," +
		Math.floor(Math.random() * 256) +
		"," +
		Math.floor(Math.random() * 256) +
		")";
	const images = [
		"https://imgur.com/xSQ9JZC.jpg",
		"https://imgur.com/R90UNeJ.jpg",
		"https://imgur.com/SAW83ZY.jpg",
		"https://imgur.com/6ax0o8i.jpg",
		"https://i.imgur.com/xSQ9JZC.jpg",
		"https://i.imgur.com/SAW83ZY.jpg",
	];

	const rooms = [
		{
			id: 1,
			image: images[0],
			description:
				"Enjoy our elegant 40 m² guest rooms, designed in warm beige tones and tailored to the needs of privateaccess and a walk-in closet",
			name: "Deluxe Room",
		},
		{
			id: 2,
			image: images[1],
			description:
				"Just a 10-minute walk from the National Center for the Square. Built and many rooms still feature high, crown-molded ceilings",
			name: "Deluxe Room",
		},
		{
			id: 3,
			image: images[2],
			description:
				"This 4-storied hotel is a beautiful combination of traditional rooms are furnished with a range of crown-molded ceilings ",
			name: "Deluxe Room",
		},
	];
	return (
		<>
			<div className="container-l" style={{ background: colorcode }}>
				<div className="card" style={{ background: colorcode }}>
					<div className="profile_details">
						<div className="profile_images">
							<img src="https://i.imgur.com/G1pXs7D.jpg" />
						</div>
						<div className="profile">
							<h2>John Alexender</h2>
							<div className="specification">
								<span>UX Designer</span>
								<small className="line"></small>
								<span>California, USA</span>
							</div>
							<button>Follow</button>
						</div>
					</div>
					<div className="recent_likes">
						<h5>Recent Likes</h5>
						<ul className="like_photos">
							{images.map((image) => (
								<li>
									<img src={image} />
								</li>
							))}
						</ul>
					</div>
				</div>
				<div id="room-container">
					{rooms.map((room) => {
						return (
							<MediaCard
								id={room.id}
								image={room.image}
								description={room.description}
								name={room.name}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default ProfilePage;
