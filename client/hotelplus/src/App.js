import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeSection from "./components/WelcomeSection";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/ABoutPage";
import RoomsPage from "./components/pages/RoomsPage";
import ContactPage from "./components/pages/ContactPage";

function App() {
	return (
		<div>
			<Router>
				<>
					<div className="App">
						<div id="container">
							<WelcomeSection />
							<Routes>
								<Route exact path="/" element={<HomePage />} />
								<Route exact path="/about" element={<AboutPage />} />
								<Route exact path="/rooms" element={<RoomsPage />} />
								<Route exact path="/contact" element={<ContactPage />} />
							</Routes>
							<Footer />
						</div>
					</div>
				</>
			</Router>
		</div>
	);
}

export default App;
