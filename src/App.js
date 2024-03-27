// import logo from './logo.svg';
import React, { useState } from "react"; // imrs
import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // we are making alert object here

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // for example when we click on red pallet, then backgroundColor changes to red by adding 'bg-danger' to className.
  // After this when we click on other color pallet lets say blue, then 'bg-primary' is added to className, but
  // backgroundColor does not change to blue it remains red.Because 'bg-danger' was added first it dominates and
  // therefore when we click on blue pallet the backgroundColor does not changes.
  // To resolve this we write removeBodyClass function.
  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");

    if (document.getElementById("textFormBox1") !== null) {
      document.getElementById("textFormBox1").classList.remove("bg-light");
      document.getElementById("textFormBox1").classList.remove("bg-primary");
      document.getElementById("textFormBox1").classList.remove("bg-warning");
      document.getElementById("textFormBox1").classList.remove("bg-danger");
      document.getElementById("textFormBox1").classList.remove("bg-success");
    }

    if (document.getElementById("textFormBox2") !== null) {
      document.getElementById("textFormBox2").classList.remove("bg-light");
      document.getElementById("textFormBox2").classList.remove("bg-primary");
      document.getElementById("textFormBox2").classList.remove("bg-warning");
      document.getElementById("textFormBox2").classList.remove("bg-danger");
      document.getElementById("textFormBox2").classList.remove("bg-success");
    }
  };

  const applyPalletMode = (cls) => {
    // console.log(cls);
    removeBodyClasses();
    document.body.classList.add(`bg-${cls}`);
    if (
      document.getElementById("textFormBox1") !== null &&
      document.getElementById("textFormBox2") !== null
    ) {
      document.getElementById("textFormBox1").classList.add(`bg-${cls}`);
      document.getElementById("textFormBox2").classList.add(`bg-${cls}`);
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enabled", "success");
      document.title = "textUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "textUtils is amazing";
      // }, 700);
      // setInterval(() => {
      //   document.title = "Install textUtils now";
      // }, 300);
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "textUtils - Light Mode";
    }
  };
  return (
    <>
      {/* Replaced <Router> tag with <HashRouter> and run npm run deploy*/}
      <HashRouter>
        {/*  Navbar component added, with props being passed */}
        <Navbar
          title="textUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          applyPalletMode={applyPalletMode}
          removePalletMode={removeBodyClasses}
        />
        <Alert alert={alert} />
        {/* <TextForm
          heading="Enter your text to analyze below"
          mode={mode}
          showalert={showAlert}
        /> */}
        {/* <About /> */}

        <Routes>
          {/* Its always a good idea to use "exact" with 'path', because if we didn't use 'exact' react would do partial matching. But if 'exact' is used it does exact matching.*/}
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={
              <TextForm
                heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
                showalert={showAlert}
              />
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
