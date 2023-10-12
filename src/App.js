import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Us" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
