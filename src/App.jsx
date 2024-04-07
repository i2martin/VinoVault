import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Vineyards from "./components/Vineyards";
import WineCellar from "./components/WineCellar";
import Wines from "./components/Wines";
import Map from "./components/Map";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} index></Route>
        <Route element={<AppLayout />} path="app">
          <Route index element={<Navigate replace to="vineyards" />}></Route>
          <Route element={<Vineyards />} path="vineyards"></Route>
          <Route element={<WineCellar />} path="wine_cellar"></Route>
          <Route element={<Map />} path="map"></Route>
          <Route element={<Wines />} path="wines"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
