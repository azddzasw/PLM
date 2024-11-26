import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import RecipeList from "./pages/RecipeList";
import RecipeForm from "./pages/RecipeForm";
import CostSimulation from "./pages/CostSimulation";

function App() {
  return (
    <Router>
      <Container>
        <h1 className="mt-5">Perfume Project Management</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<RecipeForm />} />
          <Route path="/cost-simulation" element={<CostSimulation />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
