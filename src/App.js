import "./App.css";
import Brands from "./Components/Brands/Brands";
import CaseStudies from "./Components/CaseStudies/CaseStudies";
import Footer from "./Components/Footer/Footer";
import GetStarted from "./Components/GetStarted/GetStarted";
import GPT from "./Components/GPT/GPT";
import Hero from "./Components/Hero/Hero";
import Library from "./Components/Library/Library";
import Navbar from "./Components/Navbar/Navbar";
import OpenAi from "./Components/OpenAi/OpenAi";
function App() {
	return (
		<div className="App">
			<div className="w-full bg-main-bg  relative text-white">
				<Navbar />
				<Hero />
				<div className="blur-one" />
				<Brands />
				<GPT />
				<OpenAi />
				<CaseStudies />
				<GetStarted />
				<Library />
				<Footer />
			</div>
		</div>
	);
}

export default App;
