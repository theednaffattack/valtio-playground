import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ValtioDemo } from "../valtio-demo";
import { Home } from "../pages/home";

export function App() {
  return (
    <div className="App">
      <h1>Valtio Demo</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/valtio-demo" element={<ValtioDemo />} />
      </Routes>
    </div>
  );
}

export function AppWithRouter() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
