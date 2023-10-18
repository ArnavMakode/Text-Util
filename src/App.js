import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutUs from "./components/AboutUs";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333 ";
      showAlert("Dark Mode is On", "info");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f5f5f5";
      showAlert("Light Mode is On", "info");
    }
  };

  return (
    <Router>
      <NavBar
        title="TextUtils"
        aboutText="About Us"
        changeMode={toggleMode}
        theme={mode}
      />
      <Alert alert={alert} />
      <Routes>
        <Route index element={
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze"
          theme={mode}
          showAlert={showAlert}
        />
      </div>}/>
      <Route path="/about" element={<AboutUs theme={mode}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
