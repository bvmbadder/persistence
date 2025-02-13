import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Swap from "./pages/swap";
import Functionalities from "./pages/Functionalities";
// import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/functionalities" element={<Functionalities />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
