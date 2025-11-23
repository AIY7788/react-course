import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="chackout" element={<div>test chackout page</div>} />
    </Routes>
  );
}

export default App;
