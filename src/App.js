import "./App.css";
import NavBar from "./Components/NavBar";
import HomeView from "./Views/HomeView";
import About from "./Views/AboutView";
import Work from "./Views/WorkView";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App text-stone-200 flex  ">
      <div className="bg-gradient-to-b from-slate-900 fixed w-full h-full top-0 z-0 ">
        {/* this was added to maintain gradient as a background while bounce scroll is active */}
      </div>
      <div className="z-20 w-full">
        <BrowserRouter>
          <NavBar />
          {/* need to make the content inside about scrollable scrollable*/}
          <div className=" flex items-center justify-center h-screen ">
            <Routes>
              <Route path="/portfolio" Component={HomeView} />
              <Route path="/home" Component={HomeView} />
              <Route path="/work" Component={Work} />
              <Route path="/about" Component={About} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
