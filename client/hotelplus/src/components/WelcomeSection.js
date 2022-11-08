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
				<div className="login-btn">
					<button>
						<Link to="/login" className="login-btn-address">
							Login
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default WelcomeSection;
