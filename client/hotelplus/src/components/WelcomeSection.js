import React from "react";
import Image from "../img/logo.png";
import { Link } from "react-router-dom";
import "../styles/WelcomeSection.css";
// import Button from "@mui/material/Button";
function WelcomeSection() {
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
						<Link to="/services" className="links-address">
							Services
						</Link>
					</div>
					<div className="links">
						<Link to="/contacts" className="links-address">
							Contact
						</Link>
					</div>
				</div>
				<div className="login-btnr">
					<button className="login-btn">
						<Link to="/login" className="login-btn-address">
							Sign in
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
						<button className="login-btn">
							<Link to="/rooms" className="login-btn-address">
								Add Hotel
							</Link>
						</button>
						<button className="login-btn discover">
							<Link to="/rooms" className="login-btn-address">
								Discover
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WelcomeSection;
