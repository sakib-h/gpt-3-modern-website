import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<div className="w-full bg-main-bg overflow-hidden relative text-white">
				<Navbar />
				<Hero />
				<div className="blur-one" />
			</div>
		</div>
	);
}

export default App;
