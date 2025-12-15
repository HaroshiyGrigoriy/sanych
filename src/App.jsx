import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import ModuleLayout from "./layouts/ModuleLayout.jsx";
import ModuleIndexPage from "./pages/modules/ModuleIndexPage.jsx";
import ModuleSectionPage from "./pages/modules/ModuleSectionPage.jsx";

function App() {
  
  return (
    <Routes>
      {/* Родительский layout */}
    <Route element={<RootLayout />}>
        <Route index element={<Home />} />

        {/* /menu — отдельная страница */}
      
        <Route path="modules/:moduleId" element={<ModuleLayout />}>
          <Route index element={<ModuleIndexPage />} />
          <Route path=":sectionId" element={<ModuleSectionPage />} />
        </Route>
      </Route>

    </Routes>
  );
}
export default App
