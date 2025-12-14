import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import MenuPage from "./pages/Menu"
import Drinks from "./pages/Drinks"
import ModulePage from "./pages/modules/ModulePage.jsx";

function App() {
  
  return (
    <Routes>
      {/* Родительский layout */}
    <Route element={<RootLayout />}>
        <Route index element={<Home />} />

        {/* /menu — отдельная страница */}
        <Route path="menu" element={<MenuPage />} />

        {/* /menu/drinks — ДРУГАЯ отдельная страница */}
        <Route path="menu/drinks" element={<Drinks />} />
        <Route path="modules/:moduleId" element={<ModulePage />} />
      </Route>

    </Routes>
  );
}
export default App
