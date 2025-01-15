import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import InspirationPage from "./pages/InspirationPage.jsx";
import RecipePage from "./pages/RecipePage.jsx";
import AddInspirationPage from "./pages/AddInspirationPage.jsx";
import AddRecipePage from "./pages/AddRecipePage.jsx";
//import CompliancePage from "./pages/CompliancePage.jsx";
//import './styles/App.css';
//import '@relume_io/relume-ui/src/styles/index.css';


function App() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inspirations" element={<InspirationPage />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/addinspiration" element={<AddInspirationPage />} />
          <Route path="/addrecipe" element={<AddRecipePage />} />
       </Routes>
    </Router>
  );
}

export default App;


