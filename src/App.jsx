import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import ModuleLayout from "./layouts/ModuleLayout.jsx";
import ModuleIndexPage from "./pages/modules/ModuleIndexPage.jsx";
import ModuleSectionPage from "./pages/modules/ModuleSectionPage.jsx";
import ModuleTopicPage from "./pages/modules/TopicPages.jsx";


function App() {
  
  return (
    <Routes>
      {/* Родительский layout */}
    <Route element={<RootLayout />}>
        <Route index element={<Home />} />

        {/* /menu — отдельная страница */}
      
        <Route path=":moduleId" element={<ModuleLayout />}>
          <Route index element={<ModuleIndexPage />} />
           <Route path=":sectionId">
          <Route index element={<ModuleSectionPage />} />
          <Route path=":topicId" element={<ModuleTopicPage/>} />
          <Route path=":topicId/:partId?" element={<ModuleTopicPage />} />

        </Route>
        </Route>
      </Route>

    </Routes>
  );
}
export default App
