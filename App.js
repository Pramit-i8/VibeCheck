import React, { useState } from "react";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import {Navbar, Container, Nav, Button} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";
import { Login } from "./Login";
import { Register } from "./Register";
import { ProfileCreation } from "./ProfileCreation";
import './App.css';


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      
      {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : currentForm === "register" ? <Register onFormSwitch={toggleForm} /> : <ProfileCreation onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;