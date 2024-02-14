import "./App.css";
import NavBar from "./Components/NavBar";
import HomeView from "./Views/HomeView";
import About from "./Views/AboutView";
import Work from "./Views/WorkView";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App bg-slate-900 text-stone-200 ">
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
