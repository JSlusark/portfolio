import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Views/HomeView";
import About from "./Views/AboutView";
import Work from "./Views/WorkView";

function App() {
  return (
    <div className="App bg-slate-900 text-stone-200 ">
      <NavBar />
      <Home />
      <Work />
      <About />
    </div>
  );
}

export default App;
