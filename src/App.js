import "./App.css";
import NavBar from "./Components/NavBar";
import HomeView from "./Views/HomeView";
import About from "./Views/AboutView";
import Work from "./Views/WorkView";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className="App
   bg-gradient-to-t from-indigo-950 from-10%  to-slate-900 to-90%
    text-stone-200 "
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/portfolio" Component={HomeView} />
          <Route path="/home" Component={HomeView} />
          <Route path="/work" Component={Work} />
          <Route path="/about" Component={About} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
