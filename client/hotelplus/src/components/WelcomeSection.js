import React from "react";
import Image from "../img/logo.png";
import { Link } from "react-router-dom";
import "../styles/WelcomeSection.css";
import SimpleImageSlider from "react-simple-image-slider";
import BusinessIcon from "@mui/icons-material/Business";
import AlertDialog from "./dialogs/LoginDialog";
import RegistrationDialog from "./dialogs/RegistrationDialog";
import { TypeAnimation } from "react-type-animation";
import LocalTaxiTwoToneIcon from "@mui/icons-material/LocalTaxiTwoTone";
import BrunchDiningTwoToneIcon from "@mui/icons-material/BrunchDiningTwoTone";
import HeatPumpTwoToneIcon from "@mui/icons-material/HeatPumpTwoTone";
import CameraIndoorTwoToneIcon from "@mui/icons-material/CameraIndoorTwoTone";
// import Button from "@mui/material/Button";
function WelcomeSection() {
	const [showComponent, setShowComponent] = React.useState(false);
	const images = [
		{
			url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		},
		{
			url: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		},
		{
			url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		},
		{
			url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		},
	];

	const handleHideComponent = (user) => {
		// console.log("User is here", user);
		if (!user) {
			setShowComponent(false);
		} else {
			setShowComponent(true);
		}
	};

	console.log("showComponent", showComponent);
	return (
		<div className="welcome-section">
			<div className="navbar">
				<div className="logo">
					<img src={Image} alt="logo" />
				</div>
				<div className="nav-links">
					<div className="links">
						<Link to="/" className="links-address active">
							Home
						</Link>
					</div>
					<div className="links">
						<Link to="/about" className="links-address">
							About Us
						</Link>
					</div>
					<div className="links">
						<Link to="/rooms" className="links-address">
							Rooms
						</Link>
					</div>
					<div className="links">
						<Link to="/contact" className="links-address">
							Services
						</Link>
					</div>
					<div className="links">
						<Link to="/contact" className="links-address">
							Contact Us
						</Link>
					</div>
				</div>
				<div className="login-btnr">
					<button className="login-btn">
						<Link to="/login" className="login-btn-address">
							<div className="btn-icon">
								<BusinessIcon className="icon" />
								Add Hotel
							</div>
						</Link>
					</button>
				</div>
			</div>
			<div className="discover-section">
				<div className="discover-text">
					<h1>Discover The Best Hotels & Resorts to Stay</h1>
				</div>
				<div className="discover-dsc">
					<p>
						We provide a variety of the best loding accomodations for those of
						you need it. Dont't Worry about the Quality of the service.
					</p>
					<div className="user-hotel">
						<AlertDialog onSaveUser={handleHideComponent} />
						<RegistrationDialog />
					</div>
				</div>
			</div>
			<div className="image-slider">
				<div className="center">
					<div className="overlay">
						<TypeAnimation
							sequence={[
								"Welcome to HotelPlus 5 Star World Hotels",
								1000,
								"Welcome to HotelPlus With Best Accomodation",
								1000,
								"Welcome to HotelPlus Best Services ",
								1000,
								"Book Yours Today with a Simple Registration",
								1000,
							]}
							wrapper="div"
							cursor={true}
							repeat={Infinity}
							style={{ fontSize: "5em", fontFamily: "Cormorant Garamond" }}
						/>
					</div>
					<div className="more-on-hotel">
						<div className="inner-more">
							<div className="includes">
								<div className="more-icon">
									<LocalTaxiTwoToneIcon
										className="icons-more"
										style={{ width: "100px" }}
									/>
									<p>Airport transfer</p>
								</div>
							</div>
							<div className="includes">
								<div className="more-icon">
									<BrunchDiningTwoToneIcon
										className="icons-more"
										style={{ width: "100px" }}
									/>
									<p>All inclusive</p>
								</div>
							</div>
							<div className="includes">
								<div className="more-icon">
									<HeatPumpTwoToneIcon
										className="icons-more"
										style={{ width: "100px" }}
									/>
									<p>Air-conditioned</p>
								</div>
							</div>
							<div className="includes">
								<div className="more-icon">
									<CameraIndoorTwoToneIcon
										className="icons-more"
										style={{ width: "100px", fontWeight: 100, fontSize: "2em" }}
									/>
									<p>Under protection</p>
								</div>
							</div>
						</div>
					</div>
					<SimpleImageSlider
						width={1290}
						height={600}
						images={images}
						showBullets={false}
						showNavs={true}
					/>
				</div>
			</div>
		</div>
	);
}

export default WelcomeSection;
