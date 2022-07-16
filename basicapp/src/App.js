// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import Colourr from "./components/ColourPicker";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

let name = "mu";
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  return (
    <>
      <h1>Hello {name}</h1>
      <Router>
        <Routes>
          <Route path="/about">
            <Navbar />
          </Route>
          <Route path="/">
            <Colourr></Colourr>
          </Route>
        </Routes>
      </Router>
      <Timer></Timer>
      <Alert alert="this is alert" />
    </>
  );
}

export default App;
