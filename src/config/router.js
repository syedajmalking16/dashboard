import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import About from "../screen/about";
import Contact from "../screen/contact";
import Home from "../screen/home";
import Profile from "../screen/profile";
import Dashboard from "../screen/Dashboard/dashboard";

export default function WebRouter() {
    return (
        <Router>
            <div>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
        </ul>
        </div>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="profile/:userName" element={<Profile />} />
                <Route path="dashboard/*" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}