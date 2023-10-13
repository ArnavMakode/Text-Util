import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <NavBar title="TextUtils" aboutText="About Us" changeMode = {toggleMode} theme = {mode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" theme = {mode}/>
      </div>
    </>
  );
}

export default App;
