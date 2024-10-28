import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SighupPage from "./components/pages/SighupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Signup" element={<SighupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
