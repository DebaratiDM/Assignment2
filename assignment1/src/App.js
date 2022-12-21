import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddStudent from "./Component/AddStudent";
import AllStudent from "./Component/AllStudent";
import Home from "./Component/Home";
import Navbars from "./Component/Navbars";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allStudent" element={<AllStudent />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/editStudent/:id" element={<AddStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
