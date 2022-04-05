import React, { Component } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import ResearchProjects from "./ResearchProjects";
import Publications from "./Publications";
import Team from "./Team";

class Navbar extends Component {
  render() {
    return (
      <HashRouter>
        <div className="navbar">
          <h1 style={{}}>Computer Science Research Lab</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/research-projects">ResearchProjects</NavLink>
            </li>
            <li>
              <NavLink to="/publications">Publications</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/research-projects" element={<ResearchProjects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default Navbar;
