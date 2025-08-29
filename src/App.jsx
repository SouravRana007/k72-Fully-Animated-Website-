import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Agence from "./pages/Agence.jsx";
import Projects from "./pages/Projects.jsx";

const App = () => {
  return (
    <div className="text-white">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/agence" element={<Agence />}>
          {" "}
        </Route>
        <Route path="/projects" element={<Projects />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
