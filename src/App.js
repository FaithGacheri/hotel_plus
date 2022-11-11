import './App.css';
import HomePage from "./components/HomePage"
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
       <div id='container'>
       <HomePage />
       <WelcomeSection />
       <Footer /> 
       </div>
    </div>
  );
}

export default App;
