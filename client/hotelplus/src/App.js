import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeSection from "./components/WelcomeSection";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
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
