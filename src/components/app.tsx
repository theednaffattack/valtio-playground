import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FourOhFour } from "../pages/four-oh-four";
import { Home } from "../pages/home";
import { ValtioDemo } from "../valtio-demo";
import "./App.css";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<FourOhFour />} />
      <Route path="/valtio-demo" element={<ValtioDemo />} />
    </Routes>
  );
}

export function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
