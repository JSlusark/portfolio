import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

import About from "./Components/About";
import Work from "./Components/Work";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home />
			<Work />
			<About />
		</div>
	);
}

export default App;
