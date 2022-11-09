import React from "react";
import WelcomeSection from "./WelcomeSection";
import AboutPage from "./AboutPage";
import Rooms from "./Rooms";
import Slider from "./Slider";
import Footer from "./Footer";

function HomePage() {
	return (
		<div>
			<AboutPage />
			<Rooms />
			<Slider />
			<Footer />
		</div>
	);
}

export default HomePage;
