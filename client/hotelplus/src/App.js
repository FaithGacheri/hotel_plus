import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeSection from "./components/WelcomeSection";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
function App() {
	return (
		<>
			<Router>
				<div className="App">
					<div id="container">
						<WelcomeSection />
						<Routes>
							<Route path="/" element={<HomePage />} />
						</Routes>
						<Footer />
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
