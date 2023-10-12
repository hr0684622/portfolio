import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./routs/header";
import Services from "./routs/services";
import About from "./routs/about";
import Contact from "./routs/contact";
import SignUp from "./routs/signUp";
import LogIn from "./routs/logIn";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
     <Routes>
      <Route path="/" element={<App />}>
        <Route path="header" element={<Header />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="logIn" element={<LogIn />} />
      </Route>
    </Routes>
  </Router>
);


