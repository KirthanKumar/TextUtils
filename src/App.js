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
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "textUtils - Light Mode";
    }
  };

  return (
    <>
      <HashRouter>
        <Navbar
          title="textUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          applyPalletMode={applyPalletMode}
          removePalletMode={removeBodyClasses}
        />
        <Alert alert={alert} />
        <Routes>
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
