import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { addRecipe } from "../services/api";
import { useNavigate } from "react-router-dom";

function RecipeForm() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [cost, setCost] = useState("");
  const [version, setVersion] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipe = {
      name,
      ingredients: ingredients.split(","),
      cost: parseFloat(cost),
      version,
    };
    await addRecipe(recipe);
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ingredients (comma separated)</Form.Label>
        <Form.Control
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cost</Form.Label>
        <Form.Control
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Version</Form.Label>
        <Form.Control
          type="number"
          value={version}
          onChange={(e) => setVersion(Number(e.target.value))}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Recipe
      </Button>
    </Form>
  );
}

export default RecipeForm;
