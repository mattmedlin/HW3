import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import ResearchProjects from "./pages/ResearchProjects";
import Publications from "./pages/Publications";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/research-projects" element={<ResearchProjects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
