import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Vineyards from "./components/Vineyards";
import WineCellars from "./components/WineCellars";
import Wines from "./components/Wines";
import Map from "./components/Map";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} index></Route>
        <Route element={<AppLayout />} path="app">
          <Route element={<Vineyards />} path="vineyards"></Route>
          <Route element={<WineCellars />} path="wine_cellars"></Route>
          <Route element={<Wines />} path="map"></Route>
          <Route element={<Map />} path="wines"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
