import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import SanychHeader from "./components/SanychHeader";
function App() {
  
  return (
    
    <Routes>
      <Route element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      </Route>
    </Routes>
    
  );
}
export default App
