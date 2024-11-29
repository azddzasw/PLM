import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage.jsx";
import InspirationPage from "./pages/InspirationPage.jsx";
import RecipePage from "./pages/RecipePage.jsx";
import CompliancePage from "./pages/CompliancePage.jsx";
import './styles/App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inspirations" element={<InspirationPage />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/compliance" element={<CompliancePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


