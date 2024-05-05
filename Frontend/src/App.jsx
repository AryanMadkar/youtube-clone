import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Video from "./pages/Video/Video"
function App() {
  const [count, setCount] = useState(0);

  const [sidebar,setSidebar] = useState(true);

  return (
    <div className="">
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
