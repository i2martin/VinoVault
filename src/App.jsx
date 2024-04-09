import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Vineyards from "./components/Vineyards";
import WineStorage from "./components/WineStorage";
import Wines from "./components/Wines";
import Map from "./components/Map";
import AddWine from "./components/AddWine";
import AddStorage from "./components/AddStorage";
import AddVineyard from "./components/AddVineyard";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} index></Route>
        <Route element={<AppLayout />} path="app">
          <Route index element={<Navigate replace to="vineyards" />}></Route>
          <Route element={<Vineyards />} path="vineyards"></Route>
          <Route element={<WineStorage />} path="wine_storage"></Route>
          <Route element={<Map />} path="map"></Route>
          <Route element={<Wines />} path="wines"></Route>
          <Route element={<AddWine />} path="add_wine"></Route>
          <Route element={<AddStorage />} path="add_storage"></Route>
          <Route element={<AddVineyard />} path="add_vineyard"></Route>
        </Route>
        <Route element={<ErrorPage />} path="*"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
